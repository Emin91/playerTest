import {AppStateType} from "../../config/configUseSelectorTs";

export const getIsGlobalModalShow = (state) => state.appState.isGlobalModalShow;
export const getTextGlobalModalShow = (state) => state.appState.textModal;

export const getImageUrl = (state: AppStateType) => state.sendPhotoReducer.imageUrl;
export const getHeaderText = (state: AppStateType) => state.sendPhotoReducer.headerText;
export const getDescriptionText = (state: AppStateType) => state.sendPhotoReducer.descriptionText;

export const getUserToken = (state: AppStateType) => state.userData.accessToken;
