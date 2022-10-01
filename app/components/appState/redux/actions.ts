import {ActionTypes} from "./types";

export const setShowGlobalModal = (data: boolean) => ({
    type: ActionTypes.SET_SHOW_GLOBAL_MODAL, data
})
export const setTextGlobalModal = (data: string) => ({
    type: ActionTypes.SET_TEXT_GLOBAL_MODAL, data
})
