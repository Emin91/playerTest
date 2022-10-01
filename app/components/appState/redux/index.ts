import {ActionTypes} from "./types"

const initialState = {
    isGlobalModalShow: false,
    textModal: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_SHOW_GLOBAL_MODAL:
            return {
                ...state,
                isGlobalModalShow: action.data
            }
        case ActionTypes.SET_TEXT_GLOBAL_MODAL:
            return {
                ...state,
                textModal: action.data
            }
        default:
            return state

    }
}
