import {LEADERS} from '../components/shared/Leaders'
import {GET_LEADERS_START} from './Actions'
import {GET_LEADERS_SUCCESS} from './Actions'
import {GET_LEADERS_FAILURE} from './Actions'

const INITIAL_STATE = {
  Leaders:[],
  isFetching: false,
  error: false,
};


export default function Leadersreducer(state=INITIAL_STATE, action){
   // console.log(state)
    switch (action.type) {
      case "GET_LEADERS_START":
        return {
          Leaders:[],
          isFetching: true,
          error: false,
        };
      case "GET_LEADERS_SUCCESS":
        return {
          Leaders: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_LEADERS_FAILURE":
        return {
          Leaders:[],
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
    


    