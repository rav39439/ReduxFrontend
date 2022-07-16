import { useReducer } from "react";
import * as React from 'react'
const initialState={count :0}

type  CounterState ={
    count:number
}

type UpdateAction ={
    type:'increment' | 'decrement'
    payload: number
}
type ResetAction ={
    type: 'Reset'
}
type CounterAction =UpdateAction | ResetAction

function reducer(state:CounterState, action:CounterAction){
    switch(action.type){
        case 'increment':
        return {count:state.count + action.payload}
        case 'decrement':
            return {count:state.count - action.payload}
            case 'Reset':
                return initialState
            default :
            return state
    }
}
export const NewCounter =()=>{
    const [state , dispatch]=useReducer(reducer,initialState)

    return (

        <>
        count :{state.count}
        <button onClick={()=>dispatch({type:'increment',payload:10})}>increment 10</button>
        
        <button onClick={()=>dispatch({type:'decrement',payload:10})}>decrement 10</button>
        <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
        
        </>
    )
}