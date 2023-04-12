import { Dispatch } from "redux";
import { getAuthUserData } from "Redux/authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

export type InitialStateType = {
  initialized: boolean;
};

export let initialState: InitialStateType = {
  initialized: false,
};

export let appReducer = (
  state: InitialStateType = initialState,
  action: AppReducerActionsTypes
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return <InitialStateType>{
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export type isInitializedActionType = ReturnType<typeof initializedSuccess>;

export const initializedSuccess = () =>
  ({ type: INITIALIZED_SUCCESS } as const);

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  //debugger
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export type AppReducerActionsTypes = isInitializedActionType;
