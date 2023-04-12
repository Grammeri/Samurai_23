import { Dispatch } from "redux";
import { authAPI } from "api/api";
import { stopSubmit } from "redux-form";
import { AppThunk } from "Redux/reduxStore";

const SET_USER_DATA = "samurai-network/auth/SET-USER-DATA";
//const UNFOLLOW = "UNFOLLOW";

type DataComponentsType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isFetching: boolean;
};

type DataType = {
  data: DataComponentsType;
};

export type InitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isFetching: boolean;
  isAuth: boolean;
};

export let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

export let authReducer = (
  state: InitialStateType = initialState,
  action: AuthReducerActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return <InitialStateType>{
        ...state,
        ...action.payload,
        isAuth: true,
      };
    default:
      return state;
  }
};

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>;
export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) =>
  ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } } as const);

/*export const getAuthUserData = () => {
  return (dispatch: Dispatch) => {
    return authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};*/
export const getAuthUserData = () => async (dispatch: Dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: any) => {
    //dispatch (stopSubmit("login", {_error: "Common Error!!!"}))

    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error!";
      dispatch(stopSubmit("login", { email: message }));
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export type AuthReducerActionsTypes = SetUserDataActionType;
