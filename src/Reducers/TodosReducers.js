import {
  GETDATABEGIN,
  GETDATASUCCES,
  GETDATAFAILED,
} from "../Actions/TodosActions";

const initState = {
  data: [],
  isLoading: false,
  error: null,
};

const Todos = (state = initState, action) => {
  switch (action.type) {
    case GETDATABEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case GETDATASUCCES:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };

    case GETDATAFAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default Todos;
