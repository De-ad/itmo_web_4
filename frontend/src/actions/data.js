// action creators for data actions
import {
    ADD_DATA,
    REGISTER_FAIL,
    SET_R_CHANGE,
    SET_MESSAGE,
    GET_DATA,
    DELETE_ALL,
    GET_DATA_FAIL,
    CLEAR_MESSAGE
} from "./type";
import DataService from "../service/dataService";


export const setRChange = (R) => {
    return {
        type: SET_R_CHANGE,
        payload: R
    }
}

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
        type: SET_MESSAGE,
        payload: { message },
      });
      return Promise.reject();
    }
  );
};



export const deleteAllData = () => (dispatch) => {
    return DataService.deleteAllData().then(
        (response) => {
            dispatch({
                type: DELETE_ALL,
                payload: {},
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
                type: DELETE_ALL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: { message },
            });
            return Promise.reject();
        });
}

export const getAllData = () => (dispatch) => {
  return DataService.getData().then(
      (response) => {
        dispatch({
          type: GET_DATA,
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
        return Promise.reject();
      });

}
