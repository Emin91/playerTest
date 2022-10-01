import {Constants} from './constants';
import {
    ResetAction, SetDescriptionText, SetHeaderText, SetImageUrl,
} from './types';

export const setImageUrl = (data: string): SetImageUrl => ({
    type: Constants.SET_IMAGE_URL,
    data,
});
export const setDescriptionText = (data: string): SetDescriptionText => ({
    type: Constants.SET_DESCRIPTION_TEXT,
    data,
});
export const setHeaderText = (data: string): SetHeaderText => ({
    type: Constants.SET_HEADER_TEXT,
    data,
});

export const resetAction = (): ResetAction => ({
    type: Constants.RESET_ACTION,
});
