import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthorizationScreen from '../../views/authorizationScreen';
import {CheckpointQRScanComponent} from '../../views/QRScreen';
import {SplashScreen} from '../../views/splashScreen';
import {HomeScreen} from '../../views/homeScreen';
import {NavigatorHeader} from './header';
import {OnlinePayment} from '../../views/onlinePaymentScreen';
import {SendPhoto} from '../../views/sendPhotoScreen';
import {ElectronServices} from '../../views/electronServicesScreen';
import {CameraComponent} from '../../components/cameraComponent';
import {RatesScreen} from '../../views/ratesScreen';
import {InfoScreen} from '../../views/infoScreen';
import {StatusOfDocComponent} from "../../views/statusOfDocumentScreen";
import {SahibkarGirish} from "../../views/homeScreenAuthorized";
import {HomeScreenEmployee} from "../../views/homeScreenEmployee";
import { InfobaseScreen } from '../../views/infobaseScreen';
import { WriteToUsScreen } from '../../views/writeToUsScreen';
import { SendAgainScreen } from '../../views/sendAgainScreen';
import { MyAccountScreen } from '../../views/myAccountScreen';
import { DebtInfoScreen } from '../../views/debtInfoScreen';
import { WhatIDidScreen } from '../../views/whatIDidScreen';

const Stack = createNativeStackNavigator();
const StackUnAuth = createNativeStackNavigator();
const StackEmployee = createNativeStackNavigator();
const StackAuth = createNativeStackNavigator();


export const RootNavigator: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SplashScreen">
                <Stack.Screen
                    options={{headerShown: false}}
                    name="AuthorizationScreen"
                    component={AuthorizationScreen}
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="SplashScreen"
                    component={SplashScreen}
                />
                <Stack.Screen name="UnAuthEntrance" component={UnAuthEntrance} options={{headerShown: false}}/>
                <Stack.Screen name="AuthEntrance" component={AuthEntrance} options={{headerShown: false}}/>
                <Stack.Screen name="EmployeeEntrance" component={EmployeeEntrance} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export const UnAuthEntrance = () => {
    return (
        <StackUnAuth.Navigator
            screenOptions={{header: NavigatorHeader}}
            initialRouteName="HomeScreen">
            <StackUnAuth.Screen
                options={{headerShown: false}}
                name="QRScanScreen"
                component={CheckpointQRScanComponent}
            />
            <StackUnAuth.Screen name="OnlinePayment" component={OnlinePayment} options={{headerShown: false}}
            />
            <StackUnAuth.Screen name="ElectronServices" component={ElectronServices}/>
            <StackUnAuth.Screen name="SendPhoto" component={SendPhoto}/>
            <StackUnAuth.Screen name="HomeScreen" component={HomeScreen}/>
            <StackUnAuth.Screen name="CameraScreen" component={CameraComponent}/>
            <StackUnAuth.Screen name="InfoScreen" component={InfoScreen}/>
            <StackUnAuth.Screen name="RatesScreen" component={RatesScreen}/>
            <StackUnAuth.Screen name="StatusOfDocument" component={StatusOfDocComponent}/>
        </StackUnAuth.Navigator>
    )
};


export const AuthEntrance = () => {
    return (
        <StackAuth.Navigator
            screenOptions={{header: NavigatorHeader}}
            initialRouteName="SahibkarGirish">
            <StackAuth.Screen
                options={{headerShown: false}}
                name="QRScanScreen"
                component={CheckpointQRScanComponent}
            />
            <StackAuth.Screen name="OnlinePayment" component={OnlinePayment}/>
            <StackAuth.Screen name="ElectronServices" component={ElectronServices}/>
            <StackAuth.Screen name="SendPhoto" component={SendPhoto}/>
            <StackAuth.Screen name="SahibkarGirish" component={SahibkarGirish}/>
            <StackAuth.Screen name="CameraScreen" component={CameraComponent}/>
            <StackAuth.Screen name="InfoScreen" component={InfoScreen}/>
            <StackAuth.Screen name="RatesScreen" component={RatesScreen}/>
            <StackAuth.Screen name="StatusOfDocument" component={StatusOfDocComponent}/>
        </StackAuth.Navigator>
    )
};

export const EmployeeEntrance = () => {
    return (
        <StackEmployee.Navigator
            screenOptions={{header: NavigatorHeader}}
            initialRouteName="HomeScreenEmployee">
            <StackEmployee.Screen
                options={{headerShown: false}}
                name="QRScanScreen"
                component={CheckpointQRScanComponent}
            />
            <StackEmployee.Screen name="OnlinePayment" component={OnlinePayment}/>
            <StackEmployee.Screen name="ElectronServices" component={ElectronServices}/>
            <StackEmployee.Screen name="SendPhoto" component={SendPhoto}/>
            <StackEmployee.Screen name="HomeScreenEmployee" component={HomeScreenEmployee}/>
            <StackEmployee.Screen name="CameraScreen" component={CameraComponent}/>
            <StackEmployee.Screen name="InfoScreen" component={InfoScreen}/>
            <StackEmployee.Screen name="RatesScreen" component={RatesScreen}/>
            <StackEmployee.Screen name="StatusOfDocument" component={StatusOfDocComponent}/>
            <StackEmployee.Screen name="InfobaseScreen" component={InfobaseScreen}/>
            <StackEmployee.Screen name="WriteToUsScreen" component={WriteToUsScreen}/>
            <StackEmployee.Screen name="MyAccountScreen" component={MyAccountScreen}/>
            <StackEmployee.Screen name="SendAgainScreen" component={SendAgainScreen}/>
            <StackEmployee.Screen name="DebtInfoScreen" component={DebtInfoScreen}/>
            <StackEmployee.Screen name="WhatIDidScreen" component={WhatIDidScreen}/>
        </StackEmployee.Navigator>
    )
};

