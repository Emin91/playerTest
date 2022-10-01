import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import LogoSVG from '../../../assets/svg/logoSVG';
import UserSVG from '../../../assets/svg/userSVG';
import QRSvg from '../../../assets/svg/qrSVG';
import styles from './styles';

export const NavigatorHeader: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{  paddingLeft: 15 }}>
                <UserSVG />
            </TouchableOpacity>
            <View style={{ ...styles.iconContainer, alignItems: 'center' }}>
                <LogoSVG />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('QRScanScreen')}
                style={{  alignItems: 'flex-end', paddingRight: 15 }}>
                <QRSvg />
            </TouchableOpacity>
        </View>
    )
}