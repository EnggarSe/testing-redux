const actions = {
   GET_DATA_LIST : 'GET_DATA_LIST',
   DATA_LIST : 'DATA_LIST',

   getDataList : payload => ({
      type : actions.GET_DATA_LIST,
      payload
   }),
}

export default actions
