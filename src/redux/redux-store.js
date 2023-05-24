import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer"
import messengerReducer from "./messengerReducer"
import sideBarReducer from "./sideBarReducer"
import usersReducer from "./usersReducer"
import authReducers from "./authReducer"
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducers
});

let store = legacy_createStore (reducers, applyMiddleware(thunkMiddleware));

export default store;