import React from "react";
import { Relative } from '@dipeak/widget'
import {message} from 'antd'


export default function Page() {

    const data = {
        edges: [
            {
                source: {
                    name: 'POD1',
                    status: 'finished',
                },
                target: {
                    name: 'POD2',
                    status: 'finished',
                },
            },
            {
                source: {
                    name: 'POD1',
                    status: 'finished',
                },
                target: {
                    name: 'POD3',
                    status: 'finished',
                },
            },
            {
                source: {
                    name: 'POD2',
                    status: 'finished',
                },
                target: {
                    name: 'POD4',
                    status: 'finished',
                },
            },
        ],
        nodes: [
            {
                name: 'POD1',
                status: 'finished',
            },
            {
                name: 'POD2',
                status: 'running',
            },
            {
                name: 'POD3',
                status: 'error',
            },
            {
                name: 'POD4',
                status: 'unstart',
            },
        ],
    }

    function onNodeClick(e: any) {
        message.info({
            content: JSON.stringify(e)
        })
    }

    return (
        <div style={{width: '100%', height: '300px'}}>
            <Relative
                data={data}
                typeKey='status'
                layout='dagre'
                layoutConf={{
                    type: 'dagre',
                    rankdir: 'TB',
                    controlPoints: true,
                    nodesepFunc: (node: Record<string, any>) => {
                        return node.width * 0.5
                    },
                    ranksepFunc: (node: Record<string, any>) => {
                        return node.height * 0.5
                    },
                }}
                legend={true}
                // popoverTipParams={{ name: 'name', columnExpression: 'detail' }}
                onNodeClick={onNodeClick}

            />
        </div>
    )
}