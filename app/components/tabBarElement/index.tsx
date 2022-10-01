import React, { FC, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import navigationActions from '../../services/navigationService';
import { setShowGlobalModal } from '../appState/redux/actions';
import { config } from '../../config/config'
import { useDispatch } from 'react-redux';

export const TabBarElement: FC<{ name: string }> = ({ name }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();
    const handleSearch = () => {
        inputValue === '5'
            ? dispatch(setShowGlobalModal(true))
            : navigationActions.navigate('InfoScreen')
    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', backgroundColor: config.white }}>
            <TextInput
                placeholderTextColor={'#CBCBCB'}
                placeholder={`${name}${name === 'Sənəd nömrəsi' ? '-ni' : '-i'} daxil edin`}
                onChangeText={setInputValue}
                style={{ width: '75%', height: 42, borderRadius: 8, borderWidth: 1, borderColor: config.mainColor, alignSelf: 'center', color: config.mainColorDark, paddingHorizontal: 10 }} />
            <TouchableOpacity
                onPress={handleSearch}
                disabled={!!!inputValue}
                style={{ width: '75%', height: 42, backgroundColor: !!inputValue ? config.mainColor : config.shadowMainColor, borderRadius: 8, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: config.white, fontSize: 18 }}>AXTAR</Text>
            </TouchableOpacity>
        </View>
    )
}