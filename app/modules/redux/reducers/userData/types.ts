import {Constants} from './constants';

export type InitialState = {
    accessToken: string;
};


export type ResetAction = {
    type: typeof Constants.RESET_ACTION;
};

export type SetAccessToken = {
    type: typeof Constants.SET_USER_TOKEN;
    data: string;
};


export type Action =
    | SetAccessToken
    | ResetAction;
