
import * as React from 'react'

type HorrizontalPosition='left' | 'Center' | 'right'
type VerticalPosition='top' | 'center' | 'bottom'
type ToastProps={
    position: | Exclude< `${HorrizontalPosition}-${VerticalPosition}`,'center-center'> |'center'
}
export const Toast = ({position}: ToastProps)=>{
    return <div>Toast Notification Position -{position}</div>
}