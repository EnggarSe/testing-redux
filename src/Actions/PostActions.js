import axios from "axios";
export const GETDATAAPI = "GETDATAAPI";
export const GETAPISUCCESS = "GETAPISUCCESS";
export const GETAPIFAILED = "GETAPIFAILED";

export const getDataBegin = () => {
  return {
    type: GETDATAAPI,
  };
};
export const getDataSuccess = (result) => {
  return {
    type: GETAPISUCCESS,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GETAPIFAILED,
    error,
  };
};

export function getDataApi(search) {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .get('https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo')
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
}

export function postDataAPI(obj) {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .post('https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo', obj)
      .then((result) => dispatch(getDataApi()))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
}

export function deleteDataAPI(id) {
   return function (dispatch) {
     dispatch(getDataBegin());
     axios
       .delete(`https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo/${id}`)
       .then((result) => dispatch(getDataApi()))
       .catch((error) => dispatch(getDataFailed(error.message)));
   };
 }

 export function editDataAPI(id, obj) {
    console.log(obj,'obj');
    console.log(id, 'id');
    
    
   return function (dispatch) {
     dispatch(getDataBegin());
 
     axios
       .put(`https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo/${id}`, obj)
       .then((result) => dispatch(getDataApi()))
       .catch((error) => dispatch(getDataFailed(error.message)));
   };
 }
