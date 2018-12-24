import Router from "next/router";
import Axios from "axios";
import { API } from "../../config";
import { setCookie, removeCookie } from "../../utils/cookie";
import { AUTHENTICATE, DEAUTHENTICATE } from "../types";

// Lấy token từ api, rồi lưu nó vào store và cookie
const authenticate = ({ email, password }, type) => {
  if (type !== "signin" && type !== "signup") {
    throw new Error("Wrong API call");
  }
  return dispatch => {
    Axios.post(`${API}/${type}`, { email, password })
      .then(response => {
        setCookie("token", response.data.token);
        // Router.push('/');
        dispatch({ type: AUTHENTICATE, payload: response.data.token });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
};

// lưu token vào store
const reauthenticate = token => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, payload: token });
  };
};

// xóa token
const deauthenticate = () => {
  return dispatch => {
    removeCookie("token");
    Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  authenticate,
  reauthenticate,
  deauthenticate
};
