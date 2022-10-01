import React, {FC, useEffect} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {navigationSplashScreen} from './saga/actions';
import {styles} from './styles';
import {PermissionsAndroid} from 'react-native';

interface Props {
    navigation: any
}


export const SplashScreen: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(navigationSplashScreen(navigation));
    }, []);

    return (
        <View style={styles.container}>
            <Image resizeMode='stretch' style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Azərbaycan Respublikası Qida Təhlükəsizliyi Agentliyi Avtomatlaşdırılmış Qida Təhlükəsizliyi
                    İnformasiya Sistemi - AQTİS
                </Text>
            </View>
        </View>
    );
};
