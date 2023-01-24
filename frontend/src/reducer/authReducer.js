import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/type";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = token
  ? { isLoggedIn: true, token }
  : { isLoggedIn: false, token: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, isLoggedIn: false };
    case REGISTER_FAIL:
      return { ...state, isLoggedIn: false };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
