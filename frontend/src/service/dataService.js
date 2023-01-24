import axios from "axios";
import { API_DATA_URL } from "../http";
import authHeader from "./auth-header";

const sendData = (x, y, r) => {
  x = parseInt(x);
  y = parseInt(y);
  r = parseInt(r);
  const token = authHeader();
  return axios.post(API_DATA_URL + "add", {
    x,
    y,
    r,
    token,
  });
};

// returns message
const deleteAllData = () => {
  return axios.post(API_DATA_URL + "delete_all");
};

export default { sendData, deleteAllData };
