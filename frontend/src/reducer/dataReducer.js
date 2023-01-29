import {ADD_DATA, DELETE_ALL, GET_DATA} from "../actions/type";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DATA:
      console.log("add data");
      return {payload};
    case GET_DATA:
      console.log("get data");
      return {payload};
    case DELETE_ALL:
      return {};
    default:
      return state;
  }
}
