import React, { FC } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import MainHeader from '../../components/mainHeader'
import { config } from '../../config/config'
import styles from './styles'

interface Props {
    navigation: any;
};

export const DebtInfoScreen: FC<Props> = ({ navigation }) => {

    const infoItems = [
        [
            [
                { label: "Subyektin adı", value: "Samed Memmedov" },
                { label: "VÖEN", value: "872364587" },
                { label: "Müraciət nömrəsi", value: "2651" },
                { label: "Müraciət tarixi", value: "02.05.2021" },
                { label: "Məbləğ", value: "103 AZN" },
            ],
        ],
        [
            [
                { label: "Subyektin adı", value: "Samed Memmedov" },
                { label: "VÖEN", value: "872364587" },
                { label: "Müraciət nömrəsi", value: "2651" },
                { label: "Müraciət tarixi", value: "02.05.2021" },
                { label: "Məbləğ", value: "103 AZN" },
            ],
        ],
    ]

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: config.mainColor }}>
                <MainHeader onBackPress={navigation.goBack} title='Borc məlumat' />
                <View style={styles.contentWrapper}>
                    <ScrollView>
                    {infoItems.map((item, index) => (
                        <View>
                            <Text style={[styles.headerText, {marginTop: index !== 0 ? 10 : 0}]} numberOfLines={1}>{index == 0 ? 'Əsas məlumat' : 'Əlavə məlumat'}</Text>
                            {item.map((el, idx) => (
                                <View style={styles.infoLabel}>
                                    {el.map((e, i) => (
                                        <View style={styles.itemRow}>
                                            <Text style={styles.title} numberOfLines={1}>{e.label}</Text>
                                            <Text style={styles.value} numberOfLines={1}>{e.value}</Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    )
                    )}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}