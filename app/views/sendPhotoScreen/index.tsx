import {
    View,
    ScrollView,
    TextInput,
    Text,
    TouchableOpacity, Image,
} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import MainHeader from '../../components/mainHeader';
import CameraIconSVG from '../../assets/svg/CameraIcon';
import UploadFromPhoneIcon from '../../assets/svg/uploadFromPhoneIcon';
import FruitIcon from '../../assets/svg/fruitsIcon';
import styles from './styles';
import {useSelectorTs} from "../../config/configUseSelectorTs";
import {getImageUrl} from "../../modules/saga/selectors";
import {shallowEqual, useDispatch} from "react-redux";
import {setDescriptionText, setHeaderText} from "./redux/actions";

interface Props {
    navigation: any;
}

export const SendPhoto: FC<Props> = ({navigation}) => {
    const [headerValue, setHeaderValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [counter, setCounter] = useState(0);
    const imageUrl = useSelectorTs(getImageUrl, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        setCounter(messageValue.length);
    }, [messageValue]);

    return (
        <View style={styles.container}>
            <MainHeader title="Çək göndər" isBack={true}/>
            <ScrollView
                style={{flex: 1}}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}>
                <View style={styles.photoContainer}>
                    <View style={styles.imageContainer}>
                        {imageUrl ?
                            <Image source={{uri: imageUrl}} style={{width: '100%', height: '100%', borderRadius: 10}}
                                   resizeMode={'stretch'}/> :
                            <FruitIcon/>
                        }
                    </View>
                    <View style={styles.bottomButtonsContainer}>
                        <TouchableOpacity
                            style={styles.photoButtonsContainer}
                            onPress={() => navigation.navigate('CameraScreen')}>
                            <CameraIconSVG/>
                        </TouchableOpacity>
                        <View style={styles.horizontalSeparator}/>
                        <TouchableOpacity style={styles.photoButtonsContainer}>
                            <UploadFromPhoneIcon/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput
                    style={styles.headerInput}
                    value={headerValue}
                    onChangeText={text => setHeaderValue(text)}
                    onEndEditing={() => dispatch(setHeaderText(headerValue))}
                    placeholder={'Başlıq'}
                    maxLength={50}
                    placeholderTextColor={'#CBCBCB'}></TextInput>
                <TextInput
                    style={styles.messageInput}
                    maxLength={150}
                    multiline={true}
                    value={messageValue}
                    onChangeText={text => setMessageValue(text)}
                    onEndEditing={() => dispatch(setDescriptionText(messageValue))}
                    placeholder={'Təsvir...'}
                    placeholderTextColor={'#CBCBCB'}></TextInput>
                <Text style={styles.charCounter}>{counter}/150</Text>
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendText}>GÖNDƏR</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
