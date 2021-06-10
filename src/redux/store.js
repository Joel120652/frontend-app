import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { RegistrationReducer } from "./RegistrationReducer";
import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
  registration: RegistrationReducer,
  user: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
