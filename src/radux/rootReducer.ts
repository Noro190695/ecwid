import { combineReducers } from 'redux';
import { galleryReducer } from './gallery/reducer';
import { loadingReducer } from './loading/reducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
    loading: loadingReducer
});
