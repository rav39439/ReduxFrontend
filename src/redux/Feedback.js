import {LEADERS} from '../components/shared/Leaders'
import {GET_LEADERS_START} from './Actions'
import {GET_LEADERS_SUCCESS} from './Actions'
import {GET_LEADERS_FAILURE} from './Actions'

const INITIAL_STATE = {
  Feedback:[],
  isFetching: false,
  error: false,
};


export default function Feedbackreducer(state=INITIAL_STATE, action){
   // console.log(state)
    switch (action.type) {
      case "POST_FEEDBACK_START":
        return {
          Feedback:[],
          isFetching: true,
          error: false,
        };
      case "POST_FEEDBACK_SUCCESS":
        return {
          Feedback: action.payload,
          isFetching: false,
          error: false,
        };
      case "POST_FEEDBACK_FAILURE":
        return {
          Feedback:[],
          isFetching: false,
          error: true,
        };
      
        
       
        // case "ADD_COMMENTS_START":
        //   return {
        //     ...state,
        //     isFetching: true,
        //     error: false,
        //   };
       
       
        // case "ADD_COMMENTS_FAILURE":
        //   return {
        //     ...state,
        //    // isFetching: false,
        //     error: true,
        //   };
        
        default:
          return state;
       
        
      }
    };
    
