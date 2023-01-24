// action creators for data actions

import dataService from "../service/dataService";
import { ADD_DATA, REGISTER_FAIL, SET_MESSAGE } from "./type";
import DataService from "../service/dataService";

export const getData = (x, y, r) => (dispatch) => {
  return DataService.sendData(x, y, r).then(
    (response) => {
      dispatch({
        type: ADD_DATA,
        payload: response.data,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: { message },
      });
      return Promise.reject();
    }
  );
};
