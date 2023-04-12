import { profileReducer, ProfileReducerActionsTypes } from "./profileReducer";
import { dialogsReducer, DialogsReducerActionsTypes } from "./dialogReducer";
import { sideBarReducer, SideBarReducerActionsTypes } from "./sidebarReducer";
import { usersReducer, UsersReducerActionsTypes } from "./usersReducer";
import { authReducer, AuthReducerActionsTypes } from "./authReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import { appReducer, AppReducerActionsTypes } from "Redux/appReducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootReducerType = ReturnType<typeof rootReducer>;

export type AppActionsType =
  | UsersReducerActionsTypes
  | ProfileReducerActionsTypes
  | SideBarReducerActionsTypes
  | AuthReducerActionsTypes
  | DialogsReducerActionsTypes
  | AppReducerActionsTypes;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootReducerType,
  unknown,
  AppActionsType
>;

export type StoreType = typeof store;
// @ts-ignore
window.store = store;

export default store;
