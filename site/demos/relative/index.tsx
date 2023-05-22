import React from "react";
import { Relative } from '@dipeak/widget'


export default function Page() {

    const data = {
        edges: [
            {
                source: {
                    table: true,
                    name: 'table5',
                    columnExpression: 'column8',
                },
                target: {
                    table: true,
                    name: 'table4',
                    columnExpression: 'column7',
                },
            },
            {
                source: {
                    table: true,
                    name: 'table6',
                    columnExpression: 'column9',
                },
                target: {
                    table: true,
                    name: 'table4',
                    columnExpression: 'column7',
                },
            },
            {
                source: {
                    table: true,
                    name: 'table7',
                    columnExpression: 'column10',
                },
                target: {
                    table: true,
                    name: 'table4',
                    columnExpression: 'column7',
                },
            },
            {
                source: {
                    table: true,
                    name: 'table2',
                    columnExpression: 'column5',
                },
                target: {
                    table: true,
                    name: 'table1',
                    columnExpression: 'column4',
                },
            },
            {
                source: {
                    table: true,
                    name: 'table3',
                    columnExpression: 'column6',
                },
                target: {
                    table: true,
                    name: 'table1',
                    columnExpression: 'column4',
                },
            },
            {
                source: {
                    table: true,
                    name: 'table1',
                    columnExpression: 'column4',
                },
                target: {
                    table: false,
                    name: 'metrics-3',
                    columnExpression: 'column3',
                },
            },
            {
                source: {
                    table: true,
                    name: 'table4',
                    columnExpression: 'column4',
                },
                target: {
                    table: false,
                    name: 'metrics-2',
                    columnExpression: 'column2',
                },
            },
            {
                source: {
                    table: false,
                    name: 'metrics-2',
                    columnExpression: 'column2',
                },
                target: {
                    table: false,
                    name: 'metrics-1',
                    columnExpression: 'column1',
                },
            },
            {
                source: {
                    table: false,
                    name: 'metrics-3',
                    columnExpression: 'column3',
                },
                target: {
                    table: false,
                    name: 'metrics-1',
                    columnExpression: 'column1',
                },
            },
        ],
        nodes: [
            {
                table: false,
                metricsType: 'atomic',
                name: 'metrics-1',
                columnExpression: 'column1',
            },
            {
                table: false,
                metricsType: 'composite',
                name: 'metrics-2',
                columnExpression: 'column2',
            },
            {
                table: false,
                metricsType: 'derived',
                name: 'metrics-3',
                columnExpression: 'column3',
            },
            {
                table: true,
                metricsType: '',
                name: 'table1',
                columnExpression: 'column4',
            },
            {
                table: true,
                metricsType: '',
                name: 'table2',
                columnExpression: 'column5',
            },
            {
                table: true,
                metricsType: '',
                name: 'table3',
                columnExpression: 'column6',
            },
            {
                table: true,
                metricsType: '',
                name: 'table4',
                columnExpression: 'column7',
            },
            {
                table: true,
                metricsType: '',
                name: 'table5',
                columnExpression: 'column8',
            },
            {
                table: true,
                metricsType: '',
                name: 'table6',
                columnExpression: 'column9',
            },
            {
                table: true,
                metricsType: '',
                name: 'table7',
                columnExpression: 'column10',
            },
        ],
    }

    function onNodeClick(e: any) {
        console.log(e)
    }

    return (
        <div style={{width: '100%', height: '300px'}}>
            <Relative
                miniMapSize={{ height: 100, width: 120 }}
                data={data}
                typeKey='metricsType'
                layout='dagre'
                layoutConf={{
                    type: 'dagre',
                    rankdir: 'LR',
                    controlPoints: true,
                    nodesepFunc: (node: Record<string, any>) => {
                        return node.height * 0.2
                    },
                    ranksepFunc: (node: Record<string, any>) => {
                        return node.width * 0.5
                    },
                }}
                showArrow={true}
                legend={true}
                popoverTipParams={{ name: 'name', columnExpression: 'detail' }}

            />
        </div>
    )
}