import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer"
import messengerReducer from "./messengerReducer"
import sideBarReducer from "./sideBarReducer"
import usersReducer from "./usersReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
});

let store = legacy_createStore (reducers);

export default store;