import React, { useEffect, useRef } from 'react'
import { Graph } from '@antv/x6'
import { registerGraphConf, switchLayout } from './dataConf'
import { RelativePropsType } from './interface'
import { debounce } from 'lodash-es'
import { MiniMap } from '@antv/x6-plugin-minimap'
import { LineageDataFormat } from './shapes'
import './relative.less'
import util from '../utils'

// register node type config
registerGraphConf()

// fetch Graph
function fetchGraph(graph: Graph) {
	graph.centerContent()
	graph.zoomToFit({ padding: 20, maxScale: 1 })
}

// Ralative Component
const Relative = function (props: RelativePropsType) {
	const {
		data,
		popoverTipParams,
		showMiniMap = true,
		typeKey,
		attrsSetting,
		layout = 'dagre',
		layoutConf,
		legend,
		showArrow,
		miniMapSize = {},
		onNodeClick,
	} = props
	const { data: RelativeData, legendInfo } = LineageDataFormat({
		data,
		typeKey,
		attrsSetting,
		showArrow,
	})
	const el = useRef<any>(null)
	const miniMapEl = useRef<any>(undefined)

	useEffect(() => {
		const graph = new Graph({
			container: el.current,
			interacting: false,
			autoResize: true,
			panning: true,
			virtual: false,
			scaling: {
				min: 0.1,
				max: 6,
			},
			background: {
				color: '#f7f7ff',
			},
			grid: {
				visible: true,
			},
		})

		// use miniMap plugin
		showMiniMap &&
			graph.use(
				new MiniMap({
					container: miniMapEl.current,
					width: (miniMapSize as { width: number; height: number }).width ?? 120,
					height: (miniMapSize as { height: number; width: number }).height ?? 100,
				}),
			)

		// layout
		const dagreLayout = switchLayout(layout, layoutConf)

		const model = dagreLayout.layout(RelativeData as never)

		graph.fromJSON(model)

		// add legend
		if (legend && legendInfo && legendInfo.length !== 0) {
			graph.addNode({
				shape: 'defaultLegend',
				x: -120,
				y: 0,
				ports: legendInfo.map(({ color, label }) => {
					return {
						group: 'list',
						attrs: {
							itemText: {
								text: label,
							},
							itemIcon: {
								fill: color,
							},
						},
					}
				}),
			})
		}

		fetchGraph(graph)

		// add click listen to display more information by adding 'popoverTip' node
		graph.on('node:click', ({ e, x, y, node }) => {
			e.stopPropagation()
			onNodeClick && onNodeClick(node)
			if (popoverTipParams) {
				const attrs = node.getAttrs()
				if (!attrs) return
				const { name: nameAttr } = attrs
				if (!nameAttr) return

				const { needOpen, isOpen } = nameAttr
				if (!needOpen || isOpen) return
				const { data: nodeData } = node.store
				if (!data) return

				graph.addNode({
					shape: 'popoverTip',
					x,
					y,
					data: {
						detail: Object.entries(popoverTipParams).map(([key, rename]) => {
							return [rename, nodeData[key]]
						}),
						parent: node,
					},
				})
				node.setAttrs({
					name: { isOpen: true },
				})
			}
		})

		const debounedFetch = debounce(() => {
			if (graph) {
				fetchGraph(graph)
			}
		}, 200)

		window.addEventListener('resize', debounedFetch)

		return () => {
			graph.dispose()
			window.removeEventListener('resize', debounedFetch)
		}
	}, [el.current, data])

	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				position: 'relative',
			}}
		>
			<div
				style={{
					height: '100%',
				}}
				ref={el}
			></div>
			{showMiniMap && (
				<div className='relativeMiniMap' key={util.getUnitId()}>
					<div ref={miniMapEl}></div>
				</div>
			)}
		</div>
	)
}
export default Relative
