

import {GET_COMMENTS_FAILURE} from './Actions'
import {GET_COMMENTS_SUCCESS} from './Actions'
import {GET_COMMENTS_START} from './Actions'
import {GET_LEADERS_START} from './Actions'
import {GET_LEADERS_SUCCESS} from './Actions'
import {GET_LEADERS_FAILURE} from './Actions'










export const getcommentsStart = () => ({
    type: GET_COMMENTS_START,
  });
  export const getcommentsSuccess =(comments) => ({
    type: GET_COMMENTS_SUCCESS,
    payload:comments,
  });
  export const getcommentsFailure = () => ({
    type: GET_COMMENTS_FAILURE,
  });


  
// export const addcommentsStart = () => ({
//     type: "ADD_COMMENTS_START",
//   });



  export const addcommentsSuccess =(dishid,rating, author, comment) => ({
    type: "ADD_COMMENTS_SUCCESS",
    payload:{
      dishId:dishid,
      rating:rating,
      comment:comment,
      author:author
      
    },
  });




  export const getLeaders =()=>async(dispatch) => {
  dispatch(getLeadersStart());
  
    
    
      return fetch(
        "https://jsonplaceholder.typicode.com/users")
                    .then(res => res.json())
                    .then((Leaders) =>{

                    
                      dispatch(getLeadersSuccess(Leaders))

                    } )
   
   
  };


export const getLeadersStart = () => ({
    type:GET_LEADERS_START,
  });
  export const getLeadersSuccess =(Leaders) => ({
    type:GET_LEADERS_SUCCESS,
    payload:Leaders
  });
  // export const getLeadersFailure = () => ({
  //   type: GET_LEADERS_FAILURE,
  // });


export const postfeedback=(data1,data2,data3,data4)=>(dispatch)=>{

  var myfeedback={
    username:data1,
    views:data2,
    recommendation:data3,
    comment:data4
  }

console.log(myfeedback)

return fetch("http://localhost:3001",{
  crossDomain:true,
  method:'POST',
  body:JSON.stringify(myfeedback),
  headers:{'Content-Type':'application/json'},
  //credentials:'same-origin'

}).then(reponse=>{
  if(reponse.ok){
    return reponse
  }else{
    var error=new Error('Error' + reponse.status)
    error.reponse=reponse
    throw error
  }
},error=>{
  var errmess=new Error(error.message)
  throw errmess
}).then(response=>response.json)
.then(feeback=>dispatch(postfeedbackSuccess(feeback)))
.catch(error=>{dispatch(postfeedbackFailure(error.message))})

}






  export const postfeedbackStart = () => ({
    type: "POST_FEEDBACK_START",
  });
  export const postfeedbackSuccess =(feedback) => ({
    type: "POST_FEEDBACK_SUCCESS",
    payload:feedback,
  });
  export const postfeedbackFailure = (error) => ({
    type: "POST_FEEDBACK_FAILURE",
    payload:error
  });


  export const adddish =(name,image,category,label,price,description,comments) => ({
    type: "ADD_DISH_SUCCESS",
    payload:{
      
      name:name,
      image:image,
      category:category,
      label:label,
      price,price,
      description:description,
      comments:comments
      
    },
  });

 
  export const adddishfailure = () => ({
    type:"ADD_DISH_FAILURE",
  });


  export const updatedish =(id,name,image,category,label,price,description,comments) => ({
    type: "UPDATE_DISH_SUCCESS",
    payload:{
      
      id:id,
      name:name,
      image:image,
      category:category,
      label:label,
      price,price,
      description:description,
      comments:comments
      
    },
  });

 
  export const updatedishfailure = () => ({
    type:"UPDATE_DISH_FAILURE",
  });