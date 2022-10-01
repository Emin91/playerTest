import {Constants} from './constants';
import {Action, InitialState} from './types';

export const initState: InitialState = {
    imageUrl: '',
    descriptionText: '',
    headerText: '',
};

export default (state = initState, action: Action): InitialState => {
    switch (action.type) {
        case Constants.SET_IMAGE_URL:
            return {
                ...state,
                imageUrl: action.data,
            };
        case Constants.SET_HEADER_TEXT:
            return {
                ...state,
                headerText: action.data,
            };
        case Constants.SET_DESCRIPTION_TEXT:
            return {
                ...state,
                descriptionText: action.data,
            };
        case Constants.RESET_ACTION:
            return initState;
        default: {
            return state;
        }
    }
};
