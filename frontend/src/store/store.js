import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "../reducer/authReducer";
import messageReducer from "../reducer/messageReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import dataReducer from "../reducer/dataReducer";

const rootReducer = combineReducers({
  authReducer,
  messageReducer,
  dataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
