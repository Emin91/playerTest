import React, { FC } from 'react'
import { View, Text } from 'react-native'
import MainHeader from '../../components/mainHeader'
import { config } from '../../config/config'

export const InfoScreen: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: config.mainColor }}>
            <MainHeader title='Qaimə məlumatları' onBackPress={navigation.goBack} />
            <View style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, backgroundColor: config.white, paddingTop: 50, flex: 1 }}>
                <Text>InfoScreen</Text>
            </View>
        </View>
    )
}