import axios from "axios";
import { API_DATA_URL } from "../http";
import authHeader from "./auth-header";

async function sendData (x, y, r){
  x = parseFloat(x);
  y = parseFloat(y);
  r = parseFloat(r);
  const token = authHeader();
  return await axios.post(API_DATA_URL + "add", {
    x,
    y,
    r,
    token,
  });
};

// returns message
async function deleteAllData (){
  const token = authHeader();
  return axios.post(API_DATA_URL + "delete_all", {
    token
  });
}


async function getData(){
  const token = authHeader();
  return await axios.post(API_DATA_URL + "get_all", {
    token
  });
}

export default { sendData, deleteAllData, getData };
