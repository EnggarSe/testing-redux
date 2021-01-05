import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Todos from "./Reducers/TodosReducers";
import Post from "./Reducers/PostReducers";

export default createStore(
  combineReducers({ Todos: Todos, Post: Post }),
  applyMiddleware(thunk)
);
