import {SET_R_CHANGE} from "../actions/type";

const initialState = "";

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_R_CHANGE:
            console.log("inside radius reducer", payload);
            return { rValue: payload };
        default:
            return state;
    }
}
