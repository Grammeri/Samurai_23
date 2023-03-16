const SET_USER_DATA = "SET-USER-DATA";
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
  isAuth: boolean
};

export let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth:false
};

export let authReducer = (
  state: InitialStateType = initialState,
  action: AuthReducerActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return <InitialStateType>{
        ...state,
        ...action.data,
        isAuth:true
      };
    default:
      return state;
  }
};

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>;
export const setAuthUserData = (userId: number, email: string, login: string) =>
  ({ type: SET_USER_DATA, data: { userId, email, login } } as const);

export type AuthReducerActionsTypes = SetUserDataActionType;