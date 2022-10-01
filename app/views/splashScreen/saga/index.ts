import {call, delay, takeEvery} from "redux-saga/effects";
import navigationActions from "../../../services/navigationService";
import {navigationSplashScreen} from "./actions";
import {ActionType} from "./types";
import {PermissionsAndroid} from "react-native";

const checkPermissions = async () => {
    const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
        {
            title: 'Background Location Permission',
            message:
                'We need access to your location ' +
                'so you can get live quality updates.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    ).then(res => res);
    return result;
};

export function* watcherNavigationSplashScreen(): Generator {
    yield takeEvery(ActionType.NAVIGATION_SPLASH_SCREEN, workerNavigationSplashScreen);
};

export function* workerNavigationSplashScreen(action: ReturnType<typeof navigationSplashScreen>): Generator {
    yield call(navigationActions.setNavigator, action.data);
    yield delay(3000);
    yield call(checkPermissions)
    yield call(navigationActions.reset, 0, 'AuthorizationScreen');
};
