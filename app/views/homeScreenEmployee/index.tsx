import React, {FC, useMemo} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import BalanceSVG from '../../assets/svg/balanceSVG';
import CheckPermissionSVG from '../../assets/svg/checkPermissionSVG';
import DocumentStatusSVG from '../../assets/svg/documentStatusSVG';
import EServicesSVG from '../../assets/svg/eServisesSVG';
import ImageSendSVG from '../../assets/svg/imageSendSVG';
import InfoBaseSVG from '../../assets/svg/infoBaseSVG';
import NotificationsSVG from '../../assets/svg/notificationsSVG';
import OnboardingSVG from '../../assets/svg/onboardingSVG';
import OnlinePaymentSVG from '../../assets/svg/onlinePayment';
import TaxiesSVG from '../../assets/svg/taxiesSVG';
import MainHeader from '../../components/mainHeader';
import styles from './styles';
import {useDispatch} from "react-redux";
import {setShowGlobalModal, setTextGlobalModal} from "../../components/appState/redux/actions";

interface Props {
    navigation: any;
}

export const HomeScreenEmployee: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch();

    const data = [
        {icon: <OnlinePaymentSVG/>, title: 'Onlayn ödenişlər', onPressFunc: () => navigation.navigate('OnlinePayment')},
        {
            icon: <CheckPermissionSVG/>,
            title: 'İcazə sənədini yoxla',
            onPressFunc: () => {
                dispatch(setShowGlobalModal(true));
                dispatch(setTextGlobalModal('Hesabın izlənilməsi üçün daxil olmalısınız'));
            }
        },
        {
            icon: <DocumentStatusSVG/>,
            title: 'Sənəd statusu',
            onPressFunc: () => navigation.navigate('StatusOfDocument')
        },
        {icon: <EServicesSVG/>, title: 'E-xidmətlər', onPressFunc: () => navigation.navigate('ElectronServices')},
        {icon: <TaxiesSVG/>, title: 'Tariflər', onPressFunc: () => navigation.navigate('RatesScreen')},
        {
            icon: <OnboardingSVG/>, title: 'Icra etdiklərim', onPressFunc: () => navigation.navigate('WhatIDidScreen')
        },
        {
            icon: <InfoBaseSVG/>, title: 'İnfobaza', onPressFunc: () => navigation.navigate('InfobaseScreen')
        },
        {
            icon: <NotificationsSVG/>, title: 'Borc məlumat', onPressFunc: () => navigation.navigate('DebtInfoScreen')
        },
        {icon: <ImageSendSVG/>, title: 'Çək göndər', onPressFunc: () => navigation.navigate('SendPhoto')},
        {icon: <ImageSendSVG/>, title: 'Bizə yazın', onPressFunc: () => navigation.navigate('WriteToUsScreen')},
        {
            icon: <BalanceSVG/>, title: 'Hesabım', onPressFunc: () => navigation.navigate('MyAccountScreen')
        },
    ];

    const renderItem = useMemo(() => data.map((item: any, index: number) =>
        <TouchableOpacity
            key={`${item} + ${index}`}
            style={styles.content}
            onPress={() => item.onPressFunc()}>
            {item.icon}
            <Text style={{...styles.title, paddingTop: 10}}>{item.title}</Text>
        </TouchableOpacity>
    ), []);


    return (
        <View style={styles.container}>
            <MainHeader title='Əsas menu'/>
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                style={styles.scrollView}>
                {renderItem}
                <Text style={styles.title}>Azərbaycan Respublikası Qida Təhlükəsizliyi Agentliyi Avtomatlaşdırılmış Qida
                    Təhlükəsizliyi İnformasiya Sistemi - AQTİS</Text>
            </ScrollView>
        </View>
    )
}
