
 import * as React from 'react';
import { Component } from 'react';
import { createContext,useState } from 'react';
// type ListProps={

//     items:string[] 
//     onClick:(value:string)=>void
    
// }
// export const Atype=({items,onClick}:ListProps)=>{

//     return(
       


//--------------------------------------------------------pasing lists as props---------------------------
//         <div>

//             <h2>List of Items</h2>
//             {
//                 items.map((item,index)=>{
//                     return(
//                     <div key={index} onClick={()=> onClick(item)}>

//                         {item}
//                        </div>
//                     )
//                 })
//             }
//         </div>
    
//     )
// }

//-----------------------------------------------------------------------------------------------------




//------------------------------------------------------greet-------------------------------------------
// type GreetProps={
//     name:string
//     messageCount?:number
//     isLoggedIn:boolean
// }





// export const Atype=(props:GreetProps)=>{

//     const {messageCount=0}=props
//     return(
//         <div>

//             <h2>

//                 {
//                 props.isLoggedIn? `welcome ${props.name}! You have ${messageCount} unread messages`:`welcome guest`
                
//                 }
//             </h2>
//         </div>

//     )
// }


//--------------------------------------------------------------------------------------------------------



//---------------------------------------------passing event functions--------------------------------

// // type ButtonProps={
// //     handleClick:( event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
// // }

// export const Atype=(props: ButtonProps)=>{
//     return <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
// }
//--------------------------------------------------------------------------------------------------------------
//----------------------------------useContext-------------------------------------------------
// export type AuthUser={
//     name:string
//     email:string
// }

// type UserContextType={
//     user:AuthUser | null
//     setuser: React.Dispatch<React.SetStateAction<AuthUser | null>>
// }
// type UserContextProviderProps = {
//     children:React.ReactNode
// }

// export const UserContext=createContext<UserContextType | null>(null)

// export const UserContextProvider=({children}: UserContextProviderProps)=>{

//     const [user,setuser]=useState<AuthUser| null>(null)


//     return <UserContext.Provider value={{user,setuser}}>{children}</UserContext.Provider>

//--------------------------------------------------------------------------------------
    


// type CounterProps={
//     message:string
//   }
//   type CounterState={
//     count:number
//   }

  

//-----------------------------------------------class------------------------------------------------
//export class Atype extends Component {
// state={
//     count:0,
// }

// handleClick=()=>{
//     this.setState((prevState)=>({
//         count:prevState.count+1
//     }))
// }



// return(


//)




//import React, { Component } from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message
  //------------------------------------------------------------------------------------------------------
