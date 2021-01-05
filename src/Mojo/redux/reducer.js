import actions from './action'

const initialState = {
   viewList : '',
   loader : false
}

export default function ViewsReducer (state = initialState, action){
   console.log(action, 'CT');
   
   switch (action.type){
      case actions.GET_DATA_LIST:
         console.log("hallooo");
         
         return{
            ...state,
           viewList : '',
           loader : true 
         }
      case actions.DATA_LIST:
         return{
            ...state,
           viewList : action.data,
           loader : true
         }
      default:
         console.log("hallooo default");
         return state
   }
}