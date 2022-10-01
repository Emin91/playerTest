import {Constants} from './constants';
import {Action, InitialState} from './types';

export const initState: InitialState = {
    accessToken: "",
};

export default (state = initState, action: Action): InitialState => {
    switch (action.type) {
        case Constants.SET_USER_TOKEN:
            console.log(action.data);
            return {
                ...state,
                accessToken: action.data,
            };
        case Constants.RESET_ACTION:
            return initState;
        default: {
            return state;
        }
    }
};
