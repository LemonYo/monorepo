import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from './interface'
import './style/index.less'

function CustomButton(props: ButtonProps) {
    const {
        name = '',
        ...other
    } = props

    return (
        <Button {...other}>{props.children}</Button>
    )
}

export default CustomButton