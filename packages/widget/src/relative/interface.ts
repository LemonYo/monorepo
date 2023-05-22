import { DagreLayoutOptions, GridLayoutOptions, CircularLayoutOptions } from '@antv/layout'
import { ShapeAttrSettingType } from './shapes'

export type LayoutConfType = DagreLayoutOptions | GridLayoutOptions | CircularLayoutOptions

type LayoutType = 'dagre' | 'grid' | 'circular' | undefined

interface RelativeDataType {
	edges: {
		source: {
			name: string
			[key: string]: any
		}
		target: {
			name: string
			[key: string]: any
		}
	}[]
	nodes: {
		name: string
		[key: string]: any
	}[]
}
export interface RelativePropsType {
	data: RelativeDataType
	typeKey: string
	showArrow?: boolean
	showMiniMap?: boolean
	miniMapSize?: { width: number; height: number }
	legend?: boolean
	attrsSetting?: ShapeAttrSettingType
	layout: LayoutType
	layoutConf: LayoutConfType
	popoverTipParams?: Record<string, string>
	onNodeClick?: (e: any) => void
}
