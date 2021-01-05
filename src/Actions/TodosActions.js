import axios from "axios";
export const GETDATABEGIN = "GETDATABEGIN";
export const GETDATASUCCES = "GETDATASUCCES";
export const GETDATAFAILED = "GETDATAFAILED";

export const getDataBegin = () => {
  return {
    type: GETDATABEGIN,
  };
};
export const getDataSuccess = (result) => {
  return {
    type: GETDATASUCCES,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GETDATAFAILED,
    error,
  };
};

export function getDataTodos(search) {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .get('https://5e8ecf49fe7f2a00165ee9ff.mockapi.io/todo')
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
}
