import * as React from 'react'
import as from 'react'
import { Component } from 'react'

type TextProps={
    size?:'sm' | 'md' | 'lg'
    color?:'primary' | 'secondary'
    children:React.ReactNode
    as?: React.ElementType
}


export const Text=({size,color,children}:TextProps)=>{
    //const  Component = as || 'div'
    return 
    (
    < Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}