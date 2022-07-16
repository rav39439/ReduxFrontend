// import React, { Component } from 'react'

// export class App extends Component {
// constructor(props){

//     super(props)
//     this.state={
// //isLoggedin:tiur
// count:0
//     }
// }

// increment(){


//     this.setState(prevstate=>({

//         count:prevstate.count+1
//     }))
// }

// incrementfive(){

//     this.increment()
//     this.increment()
//     this.increment()
//     this.increment()
//     this.increment()
// }

//   render() {



// //     let message;
// //     if(this.state.isLoggedin){
       



// //        message=     <div>

// // <h1>Hi lalloo</h1>

// //             </div>
          
// //     }
// //     else{
       
// //           message=  <h1>Welcome guest</h1>
        
// //     }

// //     return(

// //         <div>{message}</div>
// //     )
   
// return(

//     <div>
//         <h1>{this.state.count}</h1>
//         <button type="click"  onClick={()=>this.incrementfive()}>increment</button>
//     </div>
// )


//   }
// }

// export default App

import * as React from 'react';
import { CustomButton } from './component/Button';
import ClassComponent from './component/class/Counter';
//import { List } from './component/List';
import { Private } from './component/Private';
import { Profile } from './component/Profile';
import { Toast } from './component/Toast';
import { Text } from './component/Text';
import { RandomNumber } from './component/RandomNumbers';
import { NewCounter } from './component/Newcounter';
//------------------------------------------------js imports------------------------------------------------------


// //import {Atype} from './Atype'
// //import { UserContextProvider } from './Atype';
// //import { User } from './User';
// import FRParentInput from './component/FRParentInput';
// import { useState } from 'react'
// import Message from './Atype';
// import LifecycleA from './component/LIfeCycleA';
// import ParentComponent from './ParentComponent';
// import ParentComp from './component/ParentComp';
// import ClickCounter from './component/ClickCounter';
// import HoverCounter from './component/HoverCounter';
// import FocusInput from './component/FocusInput';
// import ClickCounterTwo from './component/ClickCounterTwo';
// import HoverCounterTwo from './component/HoverCounterTwo';
// import Counter from './component/Counter';
// import { UserConsumer } from './component/userContext';
// import { UserProvider } from './component/userContext';
// import ComponentF from './component/ComponentF';


//------------------------------------------------------------------------------------------------------
//type AuthUser={
 // name:string
 // email:string
  
//}


//------------------------------------------class componenet--------------------------------------------------
// type CounterProps={
//   message:string
// }
// type CounterState={
//   count:number
// }
//-------------------------------------------------------------------------------------------------

const App = () => {
//--------------------------------------useState-----------------------------------------------------------
// const[user,setuser]=useState<AuthUser | null>(null)
// const handleLogin=()=>{
//   setuser({
//     name:"american",
//     email:"Jaadu@gmail.com"
//   })
// }

// const handleLogout=()=>{

//   setuser(null)
// }

//---------------------------------------------------------------------------------------


  return (


//--------------------------------------props  list--------------------------------------------------------
    // <div className="App">
    //     <Atype items={['Batman','Superman','WonderWomen']}
    //     onClick={(item)=>console.log(item)}/>
        
    //     </div>




//-----------------------------------------------------------------------------------------------------



//-----------------------------------------------------data {greet}------------------------------------------------
    // <div>
      
    //   <Atype name={"ravish"} messageCount={4} isLoggedIn={true} />
    // </div>


//------------------------------------------------------------------------------------------------------


//-----------------------passing function and events-----------------------------------------------------
// <div className='App'>

//<Atype handleClick={(event,id)=>console.log("Button clicked",event,id)}/>

//</div> 

//---------------------------------------------------------------------------------------------------------





//-------------------------------------------------useState-----------------------------------------------
//<div>

//<button onClick={handleLogin}>Login</button>
//<button onClick={handleLogout}>Logout</button>

//<div>user name is {user?.name}</div>

//<div>user email is {user?.email}</div>
//</div>

//---------------------------------------------------------------------------------------------------------

//---------------------------------usecontext----------------------------------------------------------

//<div className='App'>
//<UserContextProvider><User/></UserContextProvider>
//</div>

//-------------------------------------------------------------------------------------------------------

//----------------------------------------------parent js example-------------------------------------------
//<LifecycleA />
//<ParentComp />
//<HoverCounter/>
//<ClickCounter/>
//<FRParentInput />
//<FocusInput/>

//---------------------------------------------------------------------------------------------------------




//------------------------------------------------js example-----------------------------------------------
//<Counter render={(count,incrementCount)=>(

//<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}
///>
//<Counter render={(count,incrementCount)=>(

//<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}/>

//<UserProvider value="Down the track Bebo">
//<ComponentF/>
  //</UserProvider>

///-----------------------------------------------------------------------------------------------------------


//<h3> React Typescript Examples</h3>


////<ClassComponent counter={6575}></ClassComponent>
//<Private isLoggedIn={true} component={Profile}/>




//---------------------------------------------passing list----------------------------------------------
//<List items={['Batman','Superman','WonderWomen']}

//onClick={(item)=>console.log(item)}/>

//</AuthUser>/List items ={[1,2,3]} onClick={(item)=>{console.log(item)}}/>
//
//<List items={
 // [
  //  {
  //  id:1,
  //  first:"wonder",
  //  last:"women",
  //  },
  //  {
//id=2,
//first:"super",
//last:"man",

//},
//{
//id=3,
//first:"American",
//last:"Raju",
//}

 //  ]
 //} 

//----------------------------------------------------------------------------------------------------------

//----------------------------------passing postion to text-------------------------------------------------
 //<Toast position='Center-bottom'/>


//---------------------------------------------------------------------------------------------------------

//--------------------------passing button type----------------------------------------------------------------
 //<CustomButton variant='primary' onClick={()=>console.log('clicked')}>
//Primary button
    //</CustomButton>
//-------------------------------------------------------------------------------------------------------

//----------------------------------------------- passing different sizes and colors with optionsNot worked-----------------------------------------
//<Text as='h2'size='lg'color='secondary'>Heading</Text> 
//<Text as='p'size='md'color='secondary'>paragraph</Text> 
//<Text as ='h1' size='sm' color='secondary'>label</Text> 

//----------------------------------------------------------------------------------------------------
//<RandomNumber  value={10} isNegative={true}/>

<div className="App">

<NewCounter />
</div>

  )
}

export default App