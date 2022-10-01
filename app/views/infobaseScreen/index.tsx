import React, { FC } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import MainHeader from '../../components/mainHeader'
import { config } from '../../config/config'
import styles from './styles'

interface Props {
    navigation: any;
};

const headerText = "Ölkəyə idxal olunmuş pestisid məhsulunda uyğunsuzluq aşkarlanıb";
const contentText = "Azərbaycan Respublikasının Qida Təhlükəsizliyi Agentliyi (AQTA) ölkəyə idxal olunan bitki mühafizə vasitələri və aqrokimyəvi maddələrə fitosanitar nəzarət tədbirlərini davam etdirir.Azərbaycan Respublikasının Qida Təhlükəsizliyi Agentliyi (AQTA) ölkəyə idxal olunan bitki mühafizə vasitələri və aqrokimyəvi maddələrə fitosanitar nəzarət tədbirlərini davam etdirir. Fiziki şəxs Atakişiyev Məhərrəm Əmirxəlil oğlu tərəfindən Çin Xalq Respublikasından idxal olunan, ümumi çəkisi 3500 kq “TİTAN 350 SC” adlı pestisid məhsuluna Agentlik əməkdaşları tərəfindən keçirilən baxış zamanı götürülmüş nümunələrin Azərbaycan Qida Təhlükəsizliyi İnstitutunun müvafiq laboratoriyasında müayinəsi nəticəsində məhsulun saxtalaşdırıldığı, etiket məlumatları ilə tərkibinin uyğunsuz olduğu müəyyən edilib. Aşkar olunmuş uyğunsuzluqla əlaqədar pestisidin istifadə təyinatı üzrə tətbiqinə icazə verilməyib. Təqdim olunan sənədlərin həqiqiliyinə dair şübhələr yarandığından, məsələnin araşdırılması məqsədilə idxalçı ölkənin aidiyyəti qurumuna sorğu göndərilib. Müraciət əsasında, preparata dair mənşə sertifikatının verildiyi Çin Xalq Respublikasının Beynəlxalq Ticarətin Təşviqi üzrə Çin Şurası (China Council for Promotion of International Trade) tərəfindən göndərilmiş cavab məktubunda sertifikatın saxta olduğu bildirilib. Faktla bağlı qanunvericiliyin tələbləri çərçivəsində müvafiq tədbirlər görülməsi üçün aidiyyəti dövlət qurumlarına məlumat verilib.";
export const InfobaseScreen: FC<Props> = ({ navigation }) => {
    const link = "https" 

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: config.mainColor }}>
                <MainHeader onBackPress={navigation.goBack} title='Infobaza' />
                <View style={styles.contentWrapper}>
                    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                        <Text style={styles.headerText}>{headerText}</Text>
                        <Text style={styles.infoText}>{contentText}</Text>
                    </ScrollView>
                    {link ?<View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.label}>Keçid</Text>
                        </TouchableOpacity>
                    </View> : null}
                </View>
            </View>
        </View>
    )
}