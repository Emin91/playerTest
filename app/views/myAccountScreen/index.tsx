import React, { FC } from 'react'
import { View, Text, Image } from 'react-native'
import MainHeader from '../../components/mainHeader'
import { config } from '../../config/config'
import styles from './styles'

interface Props {
    navigation: any;
};

export const MyAccountScreen: FC<Props> = ({ navigation }) => {
    const avatarUrl = ""

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: config.mainColor }}>
                <MainHeader onBackPress={navigation.goBack} title='Hesabım' />
                <View style={styles.contentWrapper}>
                    <View style={styles.imageWrapper}>
                        {avatarUrl
                            ? <Image style={styles.image} source={{ uri: avatarUrl }} />
                            : <Image style={styles.image} source={require('../../assets/images/avatar.png')} />
                        }
                        <View style={styles.itemWrapper}>
                            <Text style={styles.label} numberOfLines={1}>Subyektin adı</Text>
                            <Text style={styles.value} numberOfLines={1}>Mezahir Məmmədov</Text>
                        </View>
                        <View style={styles.itemWrapper}>
                            <Text style={styles.label} numberOfLines={1}>VÖEN</Text>
                            <Text style={styles.value} numberOfLines={1}>338261587</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}