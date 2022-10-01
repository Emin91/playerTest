import React, {FC} from 'react'
import {View, Text, TouchableOpacity, Modal} from 'react-native'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import ErrorSVG from '../../assets/svg/errorSVG'
import {config} from '../../config/config'
import {getIsGlobalModalShow, getTextGlobalModalShow} from '../../modules/saga/selectors'
import {setShowGlobalModal} from '../appState/redux/actions'
import {useSelectorTs} from "../../config/configUseSelectorTs";

export const GlobalModal: FC = () => {
    const isVisible = useSelector(getIsGlobalModalShow, shallowEqual);
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setShowGlobalModal(false))
    };
    const modalText = useSelectorTs(getTextGlobalModalShow, shallowEqual);


    return (
        <Modal visible={isVisible} transparent>
            <View style={{
                width: 286,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: config.white,
                borderRadius: 6,
                alignSelf: 'center',
                top: '40%',
                marginLeft: 10,
                shadowRadius: 5.46,
                elevation: 6,
                shadowOpacity: 0.32,
                shadowColor: config.black,
                shadowOffset: {
                    height: 4,
                    width: 0
                },
            }}>
                <View style={{minHeight: 128, justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <ErrorSVG/>
                    <Text style={{color: config.mainColorDark, fontSize: 12}}>{modalText}</Text>
                    <TouchableOpacity style={{
                        width: 124,
                        height: 28,
                        backgroundColor: config.mainColorDark,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 6
                    }} onPress={handleClose}>
                        <Text>Bağla</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
