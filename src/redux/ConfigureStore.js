import Commentsreducer from './Comments'
import Leadersreducer from './Leaders'
import Feedbackreducer from './Feedback';
import Dishreducer from './Dishreducer';
import {configureStore, combineReducers} from "@reduxjs/toolkit";


console.log("ths is store")
//const ConfigureStore=()=>{





const reducer = combineReducers({
    commentsreducer:Commentsreducer,
     leadersreducer:Leadersreducer,
     feedbackreducer:Feedbackreducer,
     dishreducer:Dishreducer
  })
  const store = configureStore({
    reducer
  })
  export default store;
 
