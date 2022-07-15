import { IAction } from "../../interfaces/redux";
import { IGallery } from "./reducer";
import { types } from "./types";

export const addImages= (data: IGallery[]): IAction<IGallery[]> =>  {
    return {
        type: types.ADD_IMAGES,
        payload: data
    }
}

export const removeImage = (id: number): IAction<number> =>  {
    return {
        type: types.REMOVE_IMAGES,
        payload: id
    }
}