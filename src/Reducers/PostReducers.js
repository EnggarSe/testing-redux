import {
  GETDATAAPI,
  GETAPISUCCESS,
  GETAPIFAILED,
} from "../Actions/PostActions";

const initState = {
  name: [],
  isLoading: false,
  error: null,
};

const Todos = (state = initState, action) => {
  switch (action.type) {
    case GETDATAAPI:
      return {
        ...state,
        isLoading: true,
      };

    case GETAPISUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.result,
      };

    case GETAPIFAILED:
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
