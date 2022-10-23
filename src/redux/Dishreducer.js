import {DISHES} from '../components/shared/Dishes'
export default function Dishreducer(state=DISHES, action){
    switch (action.type) {
      
     
        case "ADD_DISH_FAILURE":
          return {
            dishes:DISHES,
           
          };
        
        case "ADD_DISH_SUCCESS":
         
        var dish=action.payload
       dish.id=state.length
      
       
       return state.concat(dish)


        case "UPDATE_DISH_FAILURE":
          return {
            dishes:DISHES,
           
          };
        
        case "UPDATE_DISH_SUCCESS":
         
       
      // DISHES=state.map((elem)=>elem.id==action.payload.id&&action.payload)

       return state.map((elem) => {
        if (elem.id === action.payload.id) {
          return action.payload;
        } else {
          return elem;
        }

      })



        default:
          return state;
       
        
      }
    };