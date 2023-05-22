import { set, cloneDeep } from 'lodash-es'
import util from '../utils'
import { type NodeRegisterMapType } from './dataConf'
import { type RelativePropsType } from './interface'

const { operationWithGetValueByPath, midElliptical, measureValueWidth } = util

const FONT_SIZE = 16

// shape interface
interface SingleRectShapeSettings {
	name?: Record<string, string | number>
	nameText?: Record<string, string | number>
}
export interface DoubleRectShapeSettings {
	name?: Record<string, string | number>
	subName?: Record<string, string | number>
	nameText?: Record<string, string | number>
	subNameText?: Record<string, string | number>
}

export type ShapeAttrSettingType = SingleRectShapeSettings | DoubleRectShapeSettings | any

// shape definitions
export function doubleRectShape(shapeSettings: DoubleRectShapeSettings) {
	const { name, subName, nameText, subNameText } = shapeSettings || {}
	return {
		inherit: 'rect',
		markup: [
			{
				tagName: 'rect',
				selector: 'body',
			},
			{
				tagName: 'rect',
				selector: 'name',
			},
			{
				tagName: 'text',
				selector: 'nameText',
			},
			{
				tagName: 'rect',
				selector: 'subName',
			},
			{
				tagName: 'text',
				selector: 'subNameText',
			},
		],
		attrs: {
			body: {
				strokeWidth: 0,
			},
			name: {
				refWidth: 1,
				strokeWidth: 1,
				...name,
			},
			nameText: {
				fill: '#232323',
				ref: 'name',
				refX: 0.5,
				refY: 0.5,
				textAnchor: 'middle',
				fontSize: FONT_SIZE,
				...nameText,
			},
			subName: {
				refWidth: 1,
				strokeWidth: 1,
				...subName,
			},
			subNameText: {
				fill: '#232323',
				fontSize: FONT_SIZE,
				ref: 'subName',
				refX: 0.5,
				refY: 0.5,
				textAnchor: 'middle',
				...subNameText,
			},
		},
	}
}
export function singleRectShape(shapeSettings: SingleRectShapeSettings) {
	const { name, nameText } = shapeSettings || {}
	return {
		inherit: 'rect',
		markup: [
			{
				tagName: 'rect',
				selector: 'body',
			},
			{
				tagName: 'rect',
				selector: 'name',
			},
			{
				tagName: 'text',
				selector: 'nameText',
			},
		],
		attrs: {
			body: {
				strokeWidth: 0,
			},
			name: {
				refWidth: 1,
				strokeWidth: 1,
				refHeight: 1,
				...name,
			},
			nameText: {
				fill: '#232323',
				ref: 'name',
				refX: 0.5,
				refY: 0.5,
				textAnchor: 'middle',
				fontSize: FONT_SIZE,
				...nameText,
			},
		},
	}
}

type ApiEnumType =
	| 'atomic'
	| 'composite'
	| 'derived'
	| 'metricsTable'
	| 'virtualTable'
	| 'materializedView'
	| 'physicalTable'
	| 'running' // 新增自定义
	| 'unstart'
	| 'finished'
	| 'error'
interface ApiEnumShapeMapItemType {
	include: { label: string; type: ApiEnumType }[]
	shape: NodeRegisterMapType
	legendColor: string
}
// shape data format
// 与后端返回的type枚举息息相关
const ApiEnumTypeShapeMap: ApiEnumShapeMapItemType[] = [
	{
		include: [{ label: '原子指标', type: 'atomic' }],
		shape: 'aGreenDoubleRect',
		legendColor: '#e8faef',
	},
	{
		include: [{ label: '复合指标', type: 'composite' }],
		shape: 'aOrangeDoubleRect',
		legendColor: '#ffeedd',
	},
	{
		include: [{ label: '派生指标', type: 'derived' }],
		shape: 'aPurpleDoubleRect',
		legendColor: '#f3e2f6',
	},
	{
		include: [{ label: '虚拟表', type: 'metricsTable' }],
		shape: 'aBlueDoubleRect',
		legendColor: '#c4e0ff',
	},
	{
		include: [{ label: '虚拟表', type: 'virtualTable' }],
		shape: 'aBlueSingleRect',
		legendColor: '#c4e0ff',
	},
	{
		include: [{ label: '物化视图', type: 'materializedView' }],
		shape: 'aPurpleSingleRect',
		legendColor: '#f0f5ff',
	},
	{
		include: [{ label: '物理表', type: 'physicalTable' }],
		shape: 'aGreySingleRect',
		legendColor: '#8c8c8c',
	},
	{
		include: [{ label: '运行中', type: 'running' }],
		shape: 'dag-node',
		legendColor: '#1677ff',
	},
	{
		include: [{ label: '未运行', type: 'unstart' }],
		shape: 'dag-node',
		legendColor: '#8c8c8c',
	},
	{
		include: [{ label: '已完成', type: 'finished' }],
		shape: 'dag-node',
		legendColor: '#e8faef',
	},
	{
		include: [{ label: '错误中断', type: 'error' }],
		shape: 'dag-node',
		legendColor: '#ff4d4f',
	},
]
type ShapeNameType = 'doubleRectShape' | 'singleRectShape'
type ShapeType = { name: string; subName: string } | { name: string }
const ShapeNameMapApiKey: { [key in ShapeNameType]: ShapeType[] } = {
	doubleRectShape: [
		{
			name: 'name',
			subName: 'columnExpression',
		},
	],
	singleRectShape: [
		{
			name: 'name',
		},
	],
}

function getShapeApiKey(item: Record<string, any>, shapeName: keyof typeof ShapeNameMapApiKey) {
	const shapeApiKeyStructures = ShapeNameMapApiKey[shapeName]
	const shapeApiKeyMap = shapeApiKeyStructures.find((structure) => {
		const apiKeys = Object.values(structure)
		return apiKeys.every((key) => Object.hasOwnProperty.call(item, key))
	})
	if (!shapeApiKeyMap) {
		console.warn('没有在shapeNameMapApiKey中找到相应的结构，请去shapeNameMapApiKey中定义')
		return {}
	}
	const shapeApiKeyInfo = Object.entries(shapeApiKeyMap).reduce((pre, [structureKey, apiKey]) => {
		pre[structureKey as keyof ShapeType] = item[apiKey] as string
		return pre
	}, {} as ShapeType)
	return shapeApiKeyInfo
}

interface LimitSettingProps {
	limit?: number
	unit?: number
	maxWidth: number
	fontSize?: number
	fontFamily?: string
}

const defaultSetting: LimitSettingProps = {
	maxWidth: 200,
	fontSize: 16,
	fontFamily: 'arial',
}

// 量宽度，设置宽度。最长可展示的内容
const getWidthAndTextUnderLimit = (
	texts: Record<string, string>,
	setting?: LimitSettingProps,
): { maxWidth: number; map: Record<string, { width: number; text: string; needOpen: boolean }> } => {
	if (!texts) return { maxWidth: 0, map: {} }

	const { maxWidth, fontSize, fontFamily } = setting || defaultSetting
	let ansMaxWidth = 0
	const ansMap = Object.entries(texts).reduce(
		(map: Record<string, { width: number; text: string; needOpen: boolean }>, [key, text]) => {
			if (!text) {
				map[text] = {
					width: 0,
					text: '',
					needOpen: false,
				}
			}
			const fontWidth = measureValueWidth(text, fontSize, fontFamily) || 0
			if (fontWidth > maxWidth) {
				const size = text.length
				const limit = size - Math.ceil((fontWidth - maxWidth) / (fontWidth / size))
				map[key] = {
					width: maxWidth,
					text: midElliptical(text, limit),
					needOpen: true,
				}
			} else {
				map[key] = {
					width: fontWidth,
					text,
					needOpen: false,
				}
			}
			if (map[key].width > ansMaxWidth) {
				ansMaxWidth = map[key].width
			}
			return map
		},
		{},
	)

	return {
		maxWidth: ansMaxWidth,
		map: ansMap,
	}
}

function formatSingleRectShape(
	item: { name: string },
	parent: Record<string, any>,
	attrsSetting: SingleRectShapeSettings,
) {
	if (!item) return
	const { name } = item
	const NameHeight = 42
	const NameFontSize = 18
	const FontPadding = 20
	const MaxWidth = 200

	const { maxWidth: w, map } = getWidthAndTextUnderLimit(
		{
			name,
		},
		{
			maxWidth: MaxWidth,
			fontSize: 18,
		},
	)

	parent.width = w + FontPadding * 2

	parent.height = NameHeight

	parent.id = spellNodeID(parent)

	if (!parent.attrs) {
		parent.attrs = {}
	}

	const needOpen = Object.values(map).some(({ needOpen }) => needOpen)
	set(parent, 'attrs.name', {
		height: NameHeight,
		needOpen,
		cursor: needOpen ? 'pointer' : '',
		...attrsSetting?.name,
	})
	set(parent, 'attrs.nameText', {
		text: map.name.text,
		fontSize: NameFontSize,
		cursor: needOpen ? 'pointer' : '',
		...attrsSetting?.nameText,
	})
}

function formatDoubleRectShape(
	item: { name: string; subName: string },
	parent: Record<string, any>,
	attrsSetting: DoubleRectShapeSettings,
) {
	if (!item) return
	const { name, subName } = item
	const NameHeight = 42
	const SubNameHeight = 36
	const NameFontSize = 18
	const SubNameFontSize = 16
	const FontPadding = 20
	const MaxWidth = 200

	const { maxWidth: w, map } = getWidthAndTextUnderLimit(
		{
			name,
			subName,
		},
		{
			maxWidth: MaxWidth,
			fontSize: 18,
		},
	)

	parent.width = w + FontPadding * 2

	parent.height = NameHeight + SubNameHeight

	parent.id = spellNodeID(parent)

	if (!parent.attrs) {
		parent.attrs = {}
	}

	const needOpen = Object.values(map).some(({ needOpen }) => needOpen)
	set(parent, 'attrs.name', {
		height: NameHeight,
		needOpen,
		cursor: needOpen ? 'pointer' : '',
		...attrsSetting?.name,
	})
	set(parent, 'attrs.nameText', {
		text: map.name.text,
		fontSize: NameFontSize,
		cursor: needOpen ? 'pointer' : '',
		...attrsSetting?.nameText,
	})
	set(parent, 'attrs.subName', {
		height: SubNameHeight,
		transform: `translate(0,${NameHeight})`,
		cursor: needOpen ? 'pointer' : '',
		...attrsSetting?.subName,
	})
	set(parent, 'attrs.subNameText', {
		text: map.subName.text,
		fontSize: SubNameFontSize,
		cursor: needOpen ? 'pointer' : '',
		...attrsSetting?.subNameText,
	})
}

function formatDagRectShape(
	item: { name: string },
	parent: Record<string, any>,
	attrsSetting: SingleRectShapeSettings,
) {
	if (!item) return
	const { name } = item
	const NameHeight = 42
	const NameFontSize = 18
	const FontPadding = 20
	const MaxWidth = 140

	const { map } = getWidthAndTextUnderLimit(
		{
			name,
		},
		{
			maxWidth: MaxWidth,
			fontSize: 18,
		},
	)

	parent.width = MaxWidth + FontPadding * 2

	parent.height = NameHeight

	parent.id = spellNodeID(parent)

	if (!parent.attrs) {
		parent.attrs = {}
	}

	const needOpen = Object.values(map).some(({ needOpen }) => needOpen)
	set(parent, 'attrs.name', {
		height: NameHeight,
		needOpen,
		cursor: needOpen ? 'pointer' : '',
		...attrsSetting?.name,
	})
	set(parent, 'attrs.nameText', {
		text: map.name.text,
		fontSize: NameFontSize,
		cursor: needOpen ? 'pointer' : '',
		...attrsSetting?.nameText,
	})
}

function dataFormatByShape<T extends { shape?: NodeRegisterMapType }>(
	shape: NodeRegisterMapType,
	parent: T,
	attrsSetting: ShapeAttrSettingType,
) {
	parent.shape = shape ?? 'defaultRect'
	let shapeInfo = {}
	switch (shape) {
		case 'aGreenDoubleRect':
		case 'aOrangeDoubleRect':
		case 'aPurpleDoubleRect':
		case 'aBlueDoubleRect':
			shapeInfo = getShapeApiKey(parent, 'doubleRectShape')
			console.log('shapeInfo', shapeInfo, parent)
			formatDoubleRectShape(shapeInfo as { subName: string; name: string }, parent, attrsSetting)
			break
		case 'aPurpleSingleRect':
		case 'aYellowSingleRect':
		case 'aGreySingleRect':
		case 'aBlueSingleRect':
			shapeInfo = getShapeApiKey(parent, 'singleRectShape')
			formatSingleRectShape(shapeInfo as { name: string }, parent, attrsSetting)
			break
		case 'dag-node':
			shapeInfo = getShapeApiKey(parent, 'singleRectShape')
			formatDagRectShape(shapeInfo as { name: string }, parent, attrsSetting)
			break
		default:
			shapeInfo = getShapeApiKey(parent, 'singleRectShape')
			console.log('shapeInfo', shapeInfo, parent)
			formatSingleRectShape(shapeInfo as { name: string }, parent, attrsSetting)
	}
}

const spellNodeID = (dataItem: Record<string, any>) => {
	const { table, name } = dataItem
	if (!table) return name
	const TABLE_SIGN = '**'
	return `${name}${TABLE_SIGN}`
}

export function LineageDataFormat(props: Pick<RelativePropsType, 'data' | 'typeKey' | 'showArrow' | 'attrsSetting'>): {
	data: Record<string, any>
	legendInfo: { label: string; color: string }[]
} {
	const { data, typeKey, attrsSetting, showArrow = true } = props

	if (!data || !typeKey) return { data: {}, legendInfo: [] }

	const ans = cloneDeep(data)
	const legendInfo: Record<string, string> = {}
	let edgeCnt = 1

	operationWithGetValueByPath('edges/source', ans, (parent) => {
		parent.id = 'e' + edgeCnt++
		if (parent.source.status || parent.target.status) {
			parent.shape = 'dagDefaultEdge'
		} else {
			parent.shape = showArrow ? 'defaultEdge' : 'noarrowDeaultEdge'
		}
	})

	operationWithGetValueByPath('edges/source/name', ans, (parent) => {
		parent.cell = spellNodeID(parent)
	})

	operationWithGetValueByPath('edges/target/name', ans, (parent) => {
		parent.cell = spellNodeID(parent)
	})

	operationWithGetValueByPath('nodes/height', ans, (parent) => {
		if (
			Object.hasOwnProperty.call(parent, 'table') &&
			Object.hasOwnProperty.call(parent, 'metricsType') &&
			parent.table
		) {
			parent.metricsType = 'metricsTable'
		}
		if (Object.hasOwnProperty.call(parent, 'name') && Object.hasOwnProperty.call(parent, 'status')) {
			parent.data = { ...parent }
		}
		const type = parent[typeKey]

		let label: any = ''
		const chooseApiEnumTypeShapeMapItem = ApiEnumTypeShapeMap.find((enumItem) => {
			const { include } = enumItem
			const includeItem = include.find((item) => item.type === type)
			label = includeItem?.label
			return !!includeItem
		})
		const { shape } = chooseApiEnumTypeShapeMapItem ?? { shape: 'defaultRect' }
		if (!shape) {
			console.warn('没有在ApiEnumTypeShapeMap上进行定义！')
		} else {
			legendInfo[chooseApiEnumTypeShapeMapItem?.legendColor || 0] = label
		}

		dataFormatByShape<typeof parent>(shape, parent, attrsSetting)
	})

	return {
		data: ans,
		legendInfo: Object.entries(legendInfo).map(([color, label]) => ({ color, label })),
	}
}
