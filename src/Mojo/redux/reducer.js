import actions from './action'

const initialState = {
   viewList : '',
   loader : false,
   addDataMessage : '',
   dataView : '',
}

export default function ViewsReducer (state = initialState, action){
   console.log(action, 'CT');
   
   switch (action.type){
      case actions.GET_DATA_LIST:
         return{
            ...state,
           viewList : '',
           loader : true 
         }
      case actions.DATA_LIST:
         return{
            ...state,
           viewList : action.data,
           loader : false
         }
      case actions.ADD_DATA_VIEW:
         return{
            ...state,
            loader : true 
         }
      case actions.DATA_VIEW:
         return{
            ...state,
            viewList : action.data,
            loader : false
         }
      case actions.DELETE_DATA_VIEW:
      return{
         ...state,
         loader : true 
      }
      case actions.DELETE_DATA:
         return{
            ...state,
            viewList : action.data,
            loader : false
         }
      default:
         return state
   }
}