import {spawn} from 'redux-saga/effects';
import {watcherNavigationSplashScreen} from '../../views/splashScreen/saga';
import {watcherSendPhoto} from "../../views/sendPhotoScreen/saga";
import {watcherAuth} from "./auth";


export default function* rootSaga(): Generator {
    try {
        yield spawn(watcherNavigationSplashScreen);
        yield spawn(watcherSendPhoto);
        yield spawn(watcherAuth);
    } catch (error) {
        console.log('error in rootSaga ', error);
    }
}
