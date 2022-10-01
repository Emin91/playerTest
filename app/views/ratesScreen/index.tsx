import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { FC, useMemo } from 'react';
import styles from './styles';
import MainHeader from '../../components/mainHeader';
import BaytarligSVG from '../../assets/svg/baytarligSVG';
import PhotoSanitarSVG from '../../assets/svg/photoSanitarSVG';
import FoodsSVG from '../../assets/svg/foodsSVG';
import Duties from '../../assets/svg/dutiesSVG';

export const RatesScreen: FC<{ navigation: any; }> = ({ navigation }) => {
    const data = [
        { icon: <BaytarligSVG />, title: 'Baytarlıq sahəsi', routeName: '' },
        { icon: <PhotoSanitarSVG />, title: 'Fitosanitar sahəsi', routeName: '' },
        { icon: <FoodsSVG />, title: 'Qida sahəsi', routeName: '' },
        { icon: <Duties />, title: 'Dövlət rüsumları', routeName: '' },
    ];
    const renderItem = useMemo(() => data.map((item: any, index: number) =>
        <TouchableOpacity
            key={`${item} + ${index}`}
            style={styles.content}
            onPress={() => navigation.navigate(item.routeName)}>
            <View>
                {item.icon}
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    ), []);

    return (
        <View style={styles.container}>
            <MainHeader title='Tariflər' />
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                style={styles.scrollView}>
                {renderItem}
            </ScrollView>
            <Text style={styles.bottomTitle}>Azərbaycan Respublikası Qida Təhlükəsizliyi Agentliyi Avtomatlaşdırılmış Qida Təhlükəsizliyi İnformasiya Sistemi - AQTİS</Text>
        </View>
    );
};
