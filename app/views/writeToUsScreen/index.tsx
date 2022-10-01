import React, { FC, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import MainHeader from '../../components/mainHeader'
import { config } from '../../config/config'
import styles from './styles'

interface Props {
    navigation: any;
};

export const WriteToUsScreen: FC<Props> = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const isEnbaled = title.trim().length && content.trim().length

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: config.mainColor }}>
                <MainHeader onBackPress={navigation.goBack} title='Bizə yazın' />
                <View style={styles.contentWrapper}>
                    <View style={{ flex: 1 }}>
                        <TextInput onChangeText={text => setTitle(text)} style={styles.input} placeholder={'Başlıq'} placeholderTextColor={config.placeholder} />
                        <TextInput onChangeText={text => setContent(text)} maxLength={150} style={[styles.input, styles.textArea]} multiline placeholder={'Təsvir...'} placeholderTextColor={config.placeholder} />
                        <Text style={styles.counter}>{content.length}/150</Text>
                    </View>
                    <TouchableOpacity
                        disabled={!isEnbaled}
                        onPress={() => navigation.navigate("SendAgainScreen")}
                        style={[styles.button, { backgroundColor: !isEnbaled ? config.mainColor : config.mainColorDark }]}>
                        <Text style={styles.label}>GÖNDƏR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}