import React, { FC } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { MessageIcon } from '../../assets/svg/messageIcon'
import MainHeader from '../../components/mainHeader'
import { config } from '../../config/config'
import styles from './styles'

interface Props {
    navigation: any;
};

const text = "Uğurla göndərildi. Yaxın zamanda sorğunuz cavablandırılacaq."
export const SendAgainScreen: FC<Props> = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: config.mainColor }}>
                <MainHeader onBackPress={navigation.goBack} title='Bizə yazın' />
                <View style={styles.contentWrapper}>
                    <View style={styles.content}>
                        <MessageIcon />
                        <Text style={styles.infoText}>{text}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("HomeScreenEmployee")}
                        style={styles.button}>
                        <Text style={styles.label}>BAĞLA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}