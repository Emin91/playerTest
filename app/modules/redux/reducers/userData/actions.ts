import {Constants} from './constants';
import {SetAccessToken} from "./types";

export const setUserToken = (data: any): SetAccessToken => ({
    type: Constants.SET_USER_TOKEN,
    data,
});

