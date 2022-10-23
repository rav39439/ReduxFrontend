import * as React from 'react'
import { Component } from 'react'

type ButtonProps={
    variant: 'primary' | 'secondary'

children:string
} & Omit <React.ComponentProps<'button'>,'children'>

export const CustomButton =({variant, children, ...rest}:ButtonProps)=>{
    return <button className={`class-with-${variant}`} {...rest}>L
    {children}
    </button>
}