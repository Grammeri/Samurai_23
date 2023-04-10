import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogReducer";
import { sideBarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import {appReducer} from "Redux/appReducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

export type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type StoreType = typeof store;
// @ts-ignore
window.store = store;
//checking

export default store;
