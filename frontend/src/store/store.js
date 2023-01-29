import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "../reducer/authReducer";
import messageReducer from "../reducer/messageReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import dataReducer from "../reducer/dataReducer";
import radiusReducer from "../reducer/radiusReducer";

const rootReducer = combineReducers({
  authReducer,
  messageReducer,
  dataReducer,
  radiusReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
