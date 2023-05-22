import { Graph, Shape, Path } from '@antv/x6'
import { PopoverTipComponent } from './template'
import { register } from '@antv/x6-react-shape'

import {
	DagreLayout,
	CircularLayout,
	GridLayout,
	DagreLayoutOptions,
	GridLayoutOptions,
	CircularLayoutOptions,
} from '@antv/layout'
import { LayoutConfType } from './interface'
import { doubleRectShape, singleRectShape } from './shapes'
import { DagCustomNode } from './template'

const LINE_HEIGHT = 32

/**
 * type - Graph.registerNode - node
 */
export const nodeRegisterMap = {
	aGreenDoubleRect: doubleRectShape({
		name: {
			fill: '#e8faef',
			stroke: '#00baad',
		},
		subName: {
			fill: '#fff',
			stroke: '#00baad',
		},
	}),
	aOrangeDoubleRect: doubleRectShape({
		name: {
			stroke: '#ff9830',
			fill: '#ffeedd',
		},
		subName: {
			stroke: '#ff9830',
			fill: '#fff',
		},
	}),
	aPurpleDoubleRect: doubleRectShape({
		name: {
			stroke: '#ac33c1',
			fill: '#f3e2f6',
		},
		subName: {
			stroke: '#ac33c1',
			fill: '#fff',
		},
	}),
	aBlueDoubleRect: doubleRectShape({
		name: {
			stroke: '#3a8de7',
			fill: '#c4e0ff',
		},
		subName: {
			stroke: '#3a8de7',
			fill: '#fff',
		},
	}),
	aBlueSingleRect: singleRectShape({
		name: {
			stroke: '#3a8de7',
			fill: '#c4e0ff',
		},
	}),
	aPurpleSingleRect: singleRectShape({
		name: {
			stroke: '#92a0e5',
			fill: '#f0f5ff',
		},
	}),
	aYellowSingleRect: singleRectShape({
		name: {
			stroke: '#faad14',
			fill: '#ffe58f',
		},
	}),
	aGreySingleRect: singleRectShape({
		name: {
			stroke: '#595959',
			fill: '#8c8c8c',
		},
	}),
	defaultLegend: {
		inherit: 'rect',
		markup: [
			{
				tagName: 'rect',
				selector: 'body',
			},
			{
				tagName: 'text',
				selector: 'label',
			},
		],
		attrs: {
			rect: {
				strokeWidth: 0,
				stroke: '#5F95FF',
				fill: '#5F95FF',
			},
			label: {
				fontWeight: 'bold',
				fill: '#ffffff',
				fontSize: 0,
			},
		},
		ports: {
			groups: {
				list: {
					markup: [
						{
							tagName: 'rect',
							selector: 'item',
						},
						{
							tagName: 'text',
							selector: 'itemText',
						},
						{
							tagName: 'rect',
							selector: 'itemIcon',
						},
					],
					attrs: {
						item: {
							width: 150,
							height: LINE_HEIGHT,
							strokeWidth: 1,
							stroke: '#aaa',
							fill: '#fff',
							magnet: true,
						},
						itemText: {
							ref: 'item',
							refX: 10,
							refY: 0.5,
							fontSize: 16,
							fill: '#232323',
							yAlign: 'middle',
						},
						itemIcon: {
							width: 12,
							height: 12,
							ref: 'item',
							refDx: -24,
							refY: 0.5,
							yAlign: 'middle',
						},
					},
					position: 'legendPortPosition',
				},
			},
		},
	},
}
export type NodeRegisterMapType = keyof typeof nodeRegisterMap | 'dag-node' | 'defaultRect'

/**
 * type - Graph.registerPortLayout - portlayout
 */

export const portLayoutRegisterMap = {
	legendPortPosition: (portsPositionArgs: any[]) => {
		return portsPositionArgs.map((_, index) => {
			return {
				position: {
					x: 0,
					// 这个y是多个port时应该如何进行定位
					y: (index + 1) * LINE_HEIGHT,
				},
				angle: 0,
			}
		})
	},
}

/**
 * type - Graph.registerEdge - edge
 */
export const edgeRegisterMap = {
	defaultEdge: {
		inhert: 'edge',
		router: {
			name: 'manhattan',
			padding: 20,
		},
		connector: {
			name: 'curveConnector',
		},
		attrs: {
			line: {
				stroke: '#aaa',
				strokeWidth: 2,
			},
		},
	},
	noarrowDeaultEdge: {
		inherit: 'defaultEdge',
		attrs: {
			line: {
				sourceMarker: {},
				targetMarker: {},
			},
		},
	},

	dagDefaultEdge: {
		inherit: 'edge',
		attrs: {
			line: {
				stroke: '#aaa',
				strokeWidth: 2,
				targetMarker: 'block',
			},
		},
	},
}

export const connecting = {
	router: {
		name: 'orth',
		args: {
			direction: 'H',
		},
	},
	createEdge: () => {
		return new Shape.Edge({
			attrs: {
				line: {
					stroke: '#8f8f8f',
					strokeWidth: 1,
				},
			},
		})
	},
}

export function registerGraphConf() {
	register({
		shape: 'popoverTip',
		effect: ['data'],
		component: PopoverTipComponent,
	})

	register({
		shape: 'dag-node',
		effect: ['data'],
		component: DagCustomNode,
	})

	Graph.registerConnector(
		'mindmap',
		(sourcePoint, nextPoints, routerPoints, options) => {
			const midX = sourcePoint.x + 10
			const midY = sourcePoint.y
			const ctrX = (nextPoints.x - midX) / 5 + midX
			const ctrY = nextPoints.y
			const pathData = `
     M ${sourcePoint.x} ${sourcePoint.y}
     L ${midX} ${midY}
     Q ${ctrX} ${ctrY} ${nextPoints.x} ${nextPoints.y}
    `
			return options.raw ? Path.parse(pathData) : pathData
		},
		true,
	)

	Graph.registerConnector(
		'curveConnector',
		(sourcePoint, targetPoints, routePoints) => {
			const path = new Path()
			const radius = 80
			const preParallelLong = 12
			const afterParallelLong = 16

			let x = sourcePoint.x
			let y = sourcePoint.y
			path.appendSegment(Path.createSegment('M', x, y))

			const nextsPointers = [...routePoints, targetPoints]
			for (let i = 0; i < nextsPointers.length; ++i) {
				const { x: nextX, y: nextY } = nextsPointers[i]
				if (y === nextY) {
					if (Math.abs(nextX - x) > radius) {
						path.appendSegment(Path.createSegment('L', nextX - radius, nextY))
						x = nextX - radius
					}
					continue
				} else {
					const hgap = Math.abs(x - nextX)
					path.appendSegment(Path.createSegment('L', x + preParallelLong, y))
					path.appendSegment(
						Path.createSegment(
							'C',
							x < nextX ? x + hgap / 2 : x - hgap / 2,
							y,
							x < nextX ? nextX - hgap / 2 : nextX + hgap / 2,
							nextY,

							nextX - afterParallelLong,
							nextY,
						),
					)
					path.appendSegment(Path.createSegment('L', nextX, nextY))
					x = nextX
					y = nextY
				}
			}
			path.appendSegment(Path.createSegment('L', targetPoints.x, targetPoints.y))
			return path.serialize()
		},
		true,
	)

	Object.entries(portLayoutRegisterMap).forEach((element: any) => {
		const [type, portLayout] = element
		Graph.registerPortLayout(type, portLayout, true)
	})

	Object.entries(nodeRegisterMap).forEach((element: any) => {
		const [type, node] = element
		Graph.registerNode(type, node, true)
	})

	Object.entries(edgeRegisterMap).forEach((element: any) => {
		const [type, edge] = element
		Graph.registerEdge(type, edge, true)
	})
}

// 布局类型

export function switchLayout(type: string, conf: LayoutConfType) {
	switch (type) {
		case 'dagre':
			return new DagreLayout(conf as DagreLayoutOptions)
		case 'grid':
			return new GridLayout(conf as GridLayoutOptions)
		case 'circular':
			return new CircularLayout(conf as CircularLayoutOptions)
		default:
			return new DagreLayout(conf as DagreLayoutOptions)
	}
}
