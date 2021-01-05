const actions = {
   GET_DATA_LIST : 'GET_DATA_LIST',
   DATA_LIST : 'DATA_LIST',

   ADD_DATA_VIEW : 'ADD_DATA_VIEW',
   DATA_VIEW : 'DATA_VIEW',

   DELETE_DATA_VIEW : 'DELETE_DATA_VIEW',
   DELETE_DATA : 'DELETE_DATA',

   getDataList : payload => ({
      type : actions.GET_DATA_LIST,
      payload
   }),

   addDataView : payload =>({
      type : actions.ADD_DATA_VIEW,
      payload
   }),
   deleteDataView : payload =>({
      type : actions.DELETE_DATA_VIEW,
      payload
   })
}

export default actions
