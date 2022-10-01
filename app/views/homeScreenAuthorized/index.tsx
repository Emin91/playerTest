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
import ObyektlerSVG from "../../assets/svg/obytektler";
import IcraEtdiklerimSVG from "../../assets/svg/icraEtdiklerimSVG";
import DebtInfoSVG from "../../assets/svg/debtInfoSVG";
import LabInfoSVG from '../../assets/svg/LaboratoryInfoSVG';

interface Props {
    navigation: any;
}

export const SahibkarGirish: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch();

    const data = [
        {icon: <OnlinePaymentSVG/>, title: 'Onlayn ödenişlər', onPressFunc: () => navigation.navigate('OnlinePayment')},
        {
            icon: <ObyektlerSVG/>,
            title: 'Obyektler',
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
        {
            icon: <IcraEtdiklerimSVG/>,
            title: 'Icra Etdiklerim',
            onPressFunc: () => navigation.navigate('ElectronServices')
        },
        {icon: <DebtInfoSVG/>, title: 'Borc məlumatları', onPressFunc: () => navigation.navigate('RatesScreen')},
        {
            icon: <LabInfoSVG/>, title: 'Labaratoriya sənədləri', onPressFunc: () => {
                dispatch(setShowGlobalModal(true))
                dispatch(setTextGlobalModal('Səhifə hazırlanma mərhələsindədir. Təlimlər haqda məlumat əldə etmək üçün “elage nomresi lazimdi” ilə əlaqə yaratmağınız xahiş olunur.'))
            }
        },
        {
            icon: <InfoBaseSVG/>, title: 'İnfobaza', onPressFunc: () => {
                dispatch(setShowGlobalModal(true))
                dispatch(setTextGlobalModal('Hesabın izlənilməsi üçün daxil olmalısınız'))
            }
        },
        {
            icon: <BalanceSVG/>, title: 'Hesabım', onPressFunc: () => {
                dispatch(setShowGlobalModal(true))
                dispatch(setTextGlobalModal('Hesabın izlənilməsi üçün daxil olmalısınız'))
            }
        },
        {
            icon: <NotificationsSVG/>, title: 'Bildirişlər', onPressFunc: () => {
                dispatch(setShowGlobalModal(true))
                dispatch(setTextGlobalModal('Hesabın izlənilməsi üçün daxil olmalısınız'))
            }
        },
        {icon: <ImageSendSVG/>, title: 'Çək göndər', onPressFunc: () => navigation.navigate('SendPhoto')},
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
            <MainHeader title='Sahibkar Girish'/>
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
