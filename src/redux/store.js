import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { RegistrationReducer } from "./RegistrationReducer";

const rootReducer = combineReducers({
  registration: RegistrationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
