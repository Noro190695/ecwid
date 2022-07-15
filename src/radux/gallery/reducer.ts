import { IAction } from '../../interfaces/redux';
import { types } from './types';

export interface IGallery {
    url: string
    width: number
    height: number
    big: boolean
    id: number
}
const initialState: IGallery[] = []

export const galleryReducer = (state = initialState, action: IAction<any>) => {
    switch(action.type){
        case types.ADD_IMAGES:
            return [...state, ...action.payload!]
        case types.REMOVE_IMAGES:
            return state.filter((item: IGallery):any => item.id !== action.payload as any)
        default:
            return state
    }
}