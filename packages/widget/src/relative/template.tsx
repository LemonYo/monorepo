import React from 'react'
import { CheckCircleOutlined, CloseCircleOutlined, RedoOutlined, CloseOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import { Node } from '@antv/x6'
import './dag.less'
import './relative.less'

export const DagCustomNode = ({ node }: { node: Node }) => {
	const data = node?.getData()
	const { name, status = 'default' } = data

	return (
		<div className={`node-dag ${status}`}>
			<span className='label'>{name}</span>
			<span className='status'>
				{status === 'finished' && <CheckCircleOutlined style={{ color: '#52c41a' }} />}
				{status === 'error' && <CloseCircleOutlined style={{ color: '#ff4d4f' }} />}
				{status === 'running' && <RedoOutlined style={{ color: '#8c8c8c' }} spin />}
			</span>
		</div>
	)
}

export const PopoverTipComponent = ({ node }: { node: Node }) => {
	const data = node.getData()
	if (!data) return null
	const { detail, parent } = data
	if (!detail || detail.length === 0) return null
	return (
		<>
			<div className='reltivePopover'>
				<div className='relativePopoverArrow'></div>
				<CloseOutlined
					style={{
						position: 'absolute',
						right: 10,
						top: 10,
					}}
					onClick={() => {
						node.remove()
						parent.setAttrs({
							name: { isOpen: false },
						})
					}}
				/>
				<div className='relativePopoverContent'>
					{detail.map((item: [string, string], index: number) => {
						const [title, info] = item
						return (
							<div key={index}>
								<Divider plain>{title}</Divider>
								<p>{info}</p>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
