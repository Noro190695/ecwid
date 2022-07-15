import { IAction } from "../../interfaces/redux";
import { types } from "./types";

interface ILoading {
  loading: boolean;
}
const initialState: ILoading = {
  loading: false,
};

export const loadingReducer = (state = initialState, action: IAction<null>) => {
  switch (action.type) {
    case types.ENABLE_LOADING:
      return { loading: true };
    case types.DISABLE_LOADING:
      return { loading: false };
    default:
      return state;
  }
};
