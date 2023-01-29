import axios from "axios";
import { api, API_AUTH_URL } from "../http";

async function register(username, password){
  return await axios.post(API_AUTH_URL + "signup", {
    username,
    password,
  });
};


async function login(username, password){
  return await axios
    .post(API_AUTH_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
  console.log("inside logout token is " + localStorage.getItem("token"));
};

export default { register, login, logout };
