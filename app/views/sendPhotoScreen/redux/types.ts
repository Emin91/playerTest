import {Constants} from './constants';

export type InitialState = {
    imageUrl: string;
    headerText: string;
    descriptionText: string;
};


export type ResetAction = {
    type: typeof Constants.RESET_ACTION;
};

export type SetImageUrl = {
    type: typeof Constants.SET_IMAGE_URL;
    data: string;
};

export type SetDescriptionText = {
    type: typeof Constants.SET_DESCRIPTION_TEXT;
    data: string;
};

export type SetHeaderText = {
    type: typeof Constants.SET_HEADER_TEXT;
    data: string;
};


export type Action =
    | SetImageUrl
    | SetDescriptionText
    | SetHeaderText
    | ResetAction;
