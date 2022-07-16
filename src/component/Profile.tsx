import React from 'react'

export type ProfileProps={
    name:string
}
export const Profile = ({name}:ProfileProps)=>{
    return <div>private profile Component. Name is {name}</div>
}