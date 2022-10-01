import React, { FC } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { TopTabNavigator } from '../../modules/navigation/topTabNavigator'
import MainHeader from '../../components/mainHeader'
import { config } from '../../config/config'

interface Props {
    navigation: any;
};

const { height } = Dimensions.get('window')

export const OnlinePayment: FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ height }} >
            <View style={{ flex: 1, backgroundColor: config.mainColor }}>
                <MainHeader onBackPress={navigation.goBack} title='Onlayn ödənişlər' />
                <View style={{ flex: 0.5, borderTopLeftRadius: 16, borderTopRightRadius: 16, backgroundColor: config.white, paddingTop: 50 }}>
                    <TopTabNavigator />
                </View>
                <View style={{ flex: 0.5, justifyContent: 'flex-end', paddingBottom: 20, backgroundColor: config.white }}>
                    <Text style={{ color: config.mainColor, fontSize: 14, marginHorizontal: 20 }}>Hökumət Ödəniş Portalı (HÖP) – ölkə iqtisadiyyatında nağdsız hesablaşmaların genişləndirilməsi və bütün regionlarda maliyyə xidmətlərinə çıxış imkanlarının artırılması məqsədilə Azərbaycan Respublikası Mərkəzi Bankı tərəfindən yaradılmışdır.</Text>
                </View>
            </View>
        </ScrollView>
    )
}