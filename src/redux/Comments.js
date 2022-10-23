

import {GET_COMMENTS_FAILURE} from './Actions'
import {GET_COMMENTS_SUCCESS} from './Actions'
import {GET_COMMENTS_START} from './Actions'

import {COMMENTS} from '../components/shared/comments'
export default function Commentsreducer(state=COMMENTS, action){
   // console.log(state)
    switch (action.type) {
        case GET_COMMENTS_START:
          return {
            comments:[],
            //isFetching: true,
           // error: false,
          };
        case GET_COMMENTS_SUCCESS:
          return {
            comments: action.payload,
           // isFetching: false,
           // error: false,
          };
        case GET_COMMENTS_FAILURE:
          return {
            comments:[],
            //isFetching: false,
            //error: true,
          };
        
       
        // case "ADD_COMMENTS_START":
        //   return {
        //     ...state,
        //     isFetching: true,
        //     error: false,
        //   };
        case "ADD_COMMENTS_SUCCESS":
         
           var comment=action.payload
       comment.id=state.length
       comment.date=new Date
       
       return state.concat(comment)

       
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
    


    