/**
 * 随机ID值
 */
export const getUnitId = (): string => {
	return Math.random().toString(32).slice(2)
}

/**
 * 判断属性值
 * @param {Object} foo 判断对象
 * @param {String} key 对象值
 */
export const hasProperty = (foo: object, key: string): boolean => {
	return Object.prototype.hasOwnProperty.call(foo, key)
}

/**
 * 获取参数
 * @param {string} name - 参数名
 * @param {string} src - 域名，默认使用当前访问域名
 */
export const getParam = (name: string, src: string): string => {
	const re = new RegExp('(?:^|\\?|#|&)' + name + '=([^&#]*)(?:$|&|#)', 'i')
	const m = re.exec(src || (window.location || {}).href)
	return m ? m[1] : ''
}

/**
 * 获取url的origin
 */
export const getUrlOrigin = (url: string): string => {
	let origin = ''

	if (typeof window.URL === 'function' && url) {
		const urlObj = new URL(url)
		origin = urlObj.origin
	} else {
		const a = document.createElement('a')
		a.href = url
		origin = a.protocol + '//' + a.host
	}

	return origin
}

/**
 * LocalStorage
 * @param name String name of the localStorage
 * @param value String value of the localStorage
 */
export const setItem = (name: string, value: string): void => {
	window.localStorage.setItem(name, value)
}

/**
 * LocalStorage
 * @param name String name of the localStorage
 * @returns string value of the localStorage
 */
export const getItem = (name: string): any => {
	return window.localStorage.getItem(name)
}

/**
 * 设置cookie
 */
export const setCookie = (name: string, value: string, expireTime?: any, path?: any, domain?: string): void => {
	const now = new Date().getTime(),
		expiresTime = new Date(now + expireTime)
	let domainStr = '',
		pathStr = '',
		expiresStr = ''

	if (domain) {
		domainStr = ';domain=' + domain
	}
	if (path) {
		pathStr = ';path=' + path
	}

	if (expireTime) {
		expiresStr = ';expires=' + expiresTime
	}

	document.cookie = name + '=' + encodeURIComponent(value) + expiresStr + pathStr + domainStr
}

/**
 * 获取cookie
 */
export const getCookie = (name: string): string => {
	let c_start: any = '',
		c_end = null

	if (window.document.cookie.length > 0) {
		c_start = window.document.cookie.indexOf(name + '=')
		if (c_start !== -1) {
			c_start = c_start + name.length + 1
			c_end = window.document.cookie.indexOf(';', c_start)
			if (c_end === -1) {
				c_end = window.document.cookie.length
			}
			return decodeURIComponent(window.document.cookie.substring(c_start, c_end))
		}
	}
	return ''
}

/**
 * 对象转换为字符串拼接
 */
export const objToStr = (obj: any): string => {
	let str = ''
	for (const x in obj) {
		str += str === '' ? x + '=' + obj[x] : '&' + x + '=' + obj[x]
	}
	return str
}

export const toString = (str: string): string => {
	let _str = ''
	if (typeof str === 'object') {
		_str = JSON.stringify(str)
	} else if (typeof str === 'undefined') {
		_str = 'undefined'
	} else {
		_str = str
	}

	return _str
}

/**
 * 是否为数组
 */
export const isArray = (obj: object): boolean => {
	if (typeof Array === 'function') {
		return Array.isArray(obj) // {} --> false, [] --> true
	}

	return Object.prototype.toString.call(obj) === '[object Array]'
}

/**
 * 是否为对象
 */
export const isObject = (obj: object): boolean => {
	return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * 时间戳转换
 */
export const timestampToTime = (timestamp: number): any => {
	const date = new Date(String(timestamp).length === 10 ? timestamp * 1000 : timestamp)
	const Y = date.getFullYear() + '-'
	const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
	const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
	const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
	const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
	return Y + M + D + h + m
}

/**
 * 对象转数组
 */
export const obj2Arr = (obj: any): any => {
	const arr = []
	if (typeof obj === 'object') {
		for (const x in obj) {
			if (hasProperty(obj, x)) {
				arr.push(obj[x])
			}
		}
	}
	return arr
}

/**
 * 格式化非标准数据
 */
export const parseJSON = (data: any) => {
	if (typeof data !== 'string' || !data) {
		return null
	}
	data = data.replace(/\n| |↵/gi, '')
	return new Function('return ' + data)()
}

/**
 * 深度obj转浅度obj
 */
export const deepObj2shallowObj = (obj: any) => {
	const data: any = {}
	const forEach = (obj: any) => {
		Object.keys(obj).forEach((keys) => {
			if (typeof obj[keys] === 'object') {
				forEach(obj[keys])
			} else if (typeof obj[keys] === 'symbol') {
				return
			} else {
				data[keys] = obj[keys]
			}
		})
	}
	forEach(obj)
	return data
}

// set value by path for tar property
// notice that the function will change tar, so save one more copy of data before use the function
/**
 *
 * @param path
 * @param tar
 * @param operation
 * @param splitChar
 * @returns
 */
export const operationWithGetValueByPath = <T>(
	path: string,
	tar: T,
	operation: (parent: any, key: string, val: any) => void,
	splitChar = '/',
) => {
	const reg = new RegExp(`[^${splitChar}]+`, 'g')

	const steps: any = path.match(reg)

	function traverseStep(target: Record<string, any>) {
		if (steps.length == 0 || !target || typeof target !== 'object') return target
		if (Array.isArray(target)) {
			const len = target.length
			for (let i = 0; i < len; ++i) {
				traverseStep(target[i])
			}
		} else {
			const key = steps.shift()
			if (steps.length === 0) {
				operation(target, key, target[key])
			} else {
				traverseStep(target[key])
			}
			steps.unshift(key)
		}
	}

	traverseStep(tar)
}

/**
 * set the intermediate ellipsis for long sentence
 */
export const midElliptical = (sentence: string, limit: number, fill = '...') => {
	const size = sentence.length
	const ellTar = size - limit
	if (ellTar <= 0 || limit <= 0) return sentence
	let l = Math.floor(size / 2)
	let r = l
	let moveLeft = true
	while (r - l + 1 < ellTar) {
		if (moveLeft) {
			l--
		} else {
			r++
		}
		moveLeft = !moveLeft
	}
	return sentence.slice(0, l) + fill + sentence.slice(r + 1)
}

/**
 * count value width with fontSize & fontFamily
 */
export const measureValueWidth = (value: string, fontSize = 16, fontFamily = 'arial') => {
	const font = `${fontSize}px ${fontFamily}`
	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d')
	if (context) {
		context.font = font
		const { width } = context.measureText(value)
		// document.removeChild(canvas)
		return width
	}
}
