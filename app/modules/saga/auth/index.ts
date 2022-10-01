// eslint-disable-next-line import/no-extraneous-dependencies
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { ActionTypes } from './actionTypes';
import { AdditionURL, APP_URL } from "../../../config/urls";
import { sendRequest } from "../../../services/fetchRequests";
import { setUserToken } from "../../redux/reducers/userData/actions";

export function* watcherAuth(): Generator {
    yield takeEvery(ActionTypes.AUTHORIZATION, workerAuthWithoutCred);
}

export function* workerAuthWithoutCred(): Generator {
    try {
        const url = APP_URL.mainURL + AdditionURL.token;

        const data = {
            grant_type: 'password',
            username: 'apiuser',
            password: 5599,
        };

        const response = (yield call(sendRequest, url, data, 'POST')) as { access_token: string };
        if (response?.hasOwnProperty('access_token')) {
            yield put(setUserToken(response?.access_token))
        }
        console.log('response is', response)
    } catch (error) {
        console.warn(`workerAuthWithoutCred ======>`, error);
    }
};
