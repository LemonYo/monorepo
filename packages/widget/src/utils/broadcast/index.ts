/**
 * @author  doublexiao
 * @module  broadcast
 * @description    React广播组件，适用于React/React Native模块广播通信
 * @version 0.1.1
 */

interface Option {
	debug: boolean
}

class BroadCast {
	private _option: Option
	private _definedChannel: object
	private _mListenChannel: object

	constructor() {
		this._option = {
			debug: false,
		}
		this._definedChannel = {}
		this._mListenChannel = {} //{"SORT_TIME":{data:null,callback}}
		this.init()
	}

	/**
	 * 初始化
	 */
	init(): void {
		this._definedChannel = {}
		this.channel()
	}

	/**
	 * 动态定义频道
	 * @return {key} [频道名称]
	 */
	definedChannel(key: string, defined: string) {
		this._definedChannel[key] = defined
	}

	/**
	 * 获取频道列表
	 * @return {[type]} [description]
	 */
	channel() {
		const channel = {}
		for (const x in this._definedChannel) {
			channel[x] = x
		}
		return channel
	}

	/**
	 * 广播触发方法
	 * @param  {String}   name     [广播名称，必须在this.definedChannel预定义]
	 * @param  {Object}   data     [广播参数，必须为object格式]
	 * @return {none}              [无返回]
	 * @desc [
	 *     trigger方法机制：
	 *     1、查找广播频道时候存在，
	 *     2、如果频道存在，将参数和回调函数放在广播缓存中 ]
	 */
	trigger(name: string, data: any) {
		let i = 0

		if (!data) {
			this._option.debug && console.info('@broadcast 你Trigger的频道没有data，请确认,频道为：' + name)
		}

		if (this._definedChannel[name] && this._mListenChannel[name] && this._mListenChannel[name].length > 0) {
			for (i; i < this._mListenChannel[name].length; i++) {
				if (typeof this._mListenChannel[name][i].listenCb === 'function') {
					this._mListenChannel[name][i].listenCb(data)
					if (console.trace && this._option.debug) {
						console.trace()
					}
				} else {
					if (console.trace && this._option.debug) {
						console.trace()
					}

					return false
				}
			}
		} else {
			if (!this._definedChannel[name]) {
				this._option.debug && console.info('@broadcast 你Trigger的频道不存在,频道为：' + name)
			}

			if (this._mListenChannel[name] && this._mListenChannel[name].length === 0) {
				this._option.debug && console.info('@broadcast 你Trigger的频道无监听,频道为：' + name)
			}
		}
	}

	/**
	 * 广播监听
	 * @param  {String}   name [广播名称，必须在broadcast.definedChannel预定义]
	 * @param  {Function} listenCallback [广播监听回调方法]
	 * @return {none} [无返回]
	 * @desc
	 *     listen方法机制：
	 *     1、查找广播频道时候存在，
	 *     2、如果频道存在，将频道进行预定义，定义后，等待trigger触发
	 */
	listen(name: string, listenCallback: any) {
		const initChannelArr = () => {
			this._mListenChannel[name] = []
			pushChannelArr()
		}
		const pushChannelArr = () => {
			this._mListenChannel[name].push({
				data: null,
				listenCb: listenCallback,
			})
		}

		if (this._definedChannel[name]) {
			// 如果频道存在，则判断监听频道是否存在
			typeof this._mListenChannel[name] === 'undefined' ? initChannelArr() : pushChannelArr()
		} else {
			// 如果频道不存在，则判动态增加增加频道
			this.definedChannel(name, 'broadcast_ids_' + Math.floor(Math.random() * 100000000))
			typeof this._mListenChannel[name] === 'undefined' ? initChannelArr() : pushChannelArr()
			console.info('@broadcast 你监听的频道 ' + name + ' 已动态创建')
		}

		if (console.trace && this._option.debug) {
			console.trace()
		}
	}

	/**
	 * 调试模式
	 */
	debug(): void {
		this._option.debug = true
	}

	/**
	 * 帮助中心
	 */
	help(): void {
		console.group('@broadcast::帮助中心')
		console.log(
			'broadcast.listen(name, listenCallback) // name: 广播频道，listenCallback：监听方法\n',
			'broadcast.trigger(name, data) // name: 广播频道，data：参数对象\n',
			'broadcast.channel() // 获取所用频道name\n',
		)
		console.groupEnd()
	}
}

const _window = window as any
_window.BroadCast = new BroadCast()
export default _window.BroadCast
