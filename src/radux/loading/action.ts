import { IAction } from "../../interfaces/redux";
import { types } from "./types";

export const enableLoading = (): IAction<undefined> => {
    return {
        type: types.ENABLE_LOADING
    }
}
export const disableLoading = (): IAction<undefined> => {
    return {
        type: types.DISABLE_LOADING
    }
}