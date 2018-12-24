import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
export const initStore = (initState = {}) => {
  return createStore(reducer, initState, applyMiddleware(thunk));
};
