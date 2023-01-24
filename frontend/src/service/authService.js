import axios from "axios";
import { api, API_AUTH_URL } from "../http";

const register = (username, password) => {
  return axios.post(API_AUTH_URL + "signup", {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_AUTH_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        // console.log(localStorage.getItem("token"));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
  console.log("inside logout token is " + localStorage.getItem("token"));
};

export default { register, login, logout };
