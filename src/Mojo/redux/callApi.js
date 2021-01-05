import axios from 'axios'

const getViewData = async(payload) => {
   try{
      const url = 'https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo'
      return await axios.get(url)
   }catch(error){
      return error.messages
   }
}

const addDataView = async(payload) => {
   console.log(payload, 'CALL API');
   
   try{
      const url = 'https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo'
      return await axios.post(url, payload.payload)
   }catch(error){
      return error.messages
   }
}

const deleteDataView = async(payload) => {
   console.log(payload, 'CALL API');
   
   try{
      const url = 'https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo'
      return await axios.delete(`https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo/${payload.payload}`)
   }catch(error){
      return error.messages
   }
}

const editDataView = async(payload) => {
   console.log(payload.payload.id, 'CALL API');
   console.log(payload.do, 'CALL API');
   
   
   try{
      const url = 'https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo'
      return await axios.put(`https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo/${payload.payload.id}`, payload.payload)
   }catch(error){
      return error.messages
   }
}
export default{
   getViewData,
   addDataView,
   deleteDataView,
   editDataView
}