import axios from 'axios'

const getViewData = async(payload) => {
   try{
      const url = 'https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo'
      return await axios.get(url)
   }catch(error){
      error.response
   }
}

export default{
   getViewData,
}