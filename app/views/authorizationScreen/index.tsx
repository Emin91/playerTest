import React, {FC} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import LogoIconSVG from '../../assets/svg/logoIconSVG';
import OwnerAuthSVG from '../../assets/svg/ownerAuthSVG';
import WithoutAuthSVG from '../../assets/svg/withoutAuthSVG';
import styles from './styles';
import {useDispatch} from "react-redux";
import {sendDataForAuth} from "../../modules/saga/auth/actions";

const AuthorizationScreen: FC<{ navigation: any }> = ({navigation}) => {

    const Button = ({title, route, logo}) => {
        const dispatch = useDispatch();

        const onPressFunc = () => {
            dispatch(sendDataForAuth());
            navigation.navigate(route);
        }
        return (
            <TouchableOpacity onPress={() => onPressFunc()} style={styles.button}>
                <View style={styles.iconContainer}>
                    {logo}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableOpacity>)
    }

    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <View style={styles.buttonsContainer}>
                <Button title={'QEYDİYYATSIZ GİRİŞ'} route={'UnAuthEntrance'} logo={<WithoutAuthSVG/>}/>
                <Button title={'SAHİBKAR GİRİŞ'} route={'AuthEntrance'} logo={<OwnerAuthSVG/>}/>
                <Button title={'AQTA GİRİŞ'} route={'EmployeeEntrance'} logo={<LogoIconSVG/>}/>
            </View>
        </View>
    )
}
export default AuthorizationScreen;
