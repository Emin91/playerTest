// eslint-disable-next-line import/no-extraneous-dependencies
import {call, put, select, take, takeEvery} from '@redux-saga/core/effects';
import RNFS from 'react-native-fs';
import {ActionTypes} from './actionTypes';
import {
    getDescriptionText,
    getHeaderText,
    getImageUrl,
    getUserToken
} from "../../../modules/saga/selectors";
import GetLocation from "react-native-get-location";
import {AdditionURL, APP_URL} from "../../../config/urls";
import {sendRequestWithToken} from "../../../services/fetchRequests";

export function* watcherSendPhoto(): Generator {
    yield takeEvery(ActionTypes.SEND_PHOTO, workerSendPhoto);
}

export function* workerSendPhoto(): Generator {
    try {
        const userToken = yield select(getUserToken);
        const headerText = yield  select(getHeaderText);
        const descriptionText = yield select(getDescriptionText);
        const url = APP_URL.mainURL + AdditionURL.sendPhoto;
        // @ts-ignore
        const coordinates: { longitude, latitude } = yield call(getLocation);
        const imgPath = (yield select(getImageUrl)) as string;
        const imgBase64 = RNFS.readFile(imgPath, 'base64')
            .then(res => {
                console.log(res);
                return res;
            });
        const data = {
            Longitude: coordinates?.longitude,
            Latitude: coordinates?.latitude,
            Header: headerText,
            Description: descriptionText,
            Base64: imgBase64,
        };

        const response = yield call(
            sendRequestWithToken,
            userToken as string,
            url,
            data,
        );
        console.log(response);

    } catch (error) {
        console.warn(`Error in workerCheckIsUnique`, error);
    }
};


const getLocation = () => {
    const coordinates = {
        longitude: 0, latitude: 0
    };
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 5000,
    })
        .then(location => {
            coordinates.longitude = location.longitude;
            coordinates.latitude = location.latitude;
        })
        .catch(error => {
            const {code, message} = error;
            console.warn(code, message);
        });
    console.log(coordinates)
    return coordinates
};
