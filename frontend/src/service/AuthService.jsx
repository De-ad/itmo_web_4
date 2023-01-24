import axios from "axios";
import { api, API_URL } from "../http";

export default class AuthService {
  static async login(username, password) {
    return api.post("/login", { username, password });
  }

  // static async register = (username, password) => {
  //     return axios.post(API_URL + "signup" , {
  //         username,
  //         password
  //     })
  // }
}
