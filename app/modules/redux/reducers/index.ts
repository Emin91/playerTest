import { combineReducers } from 'redux';
import sendPhotoReducer from '../../../views/sendPhotoScreen/redux';
import userData from './userData';
import appState from '../../../components/appState/redux'


const rootReducer = combineReducers({
    appState,
    sendPhotoReducer,
    userData,
});

export default rootReducer;
