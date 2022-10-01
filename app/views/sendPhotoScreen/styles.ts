import {Dimensions, StyleSheet} from "react-native";
import {config} from "../../config/config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.mainColor,
    },
    content: {
        minHeight: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: config.white,
        paddingTop: 35
    },
    photoContainer: {
        height: 230,
        justifyContent: 'center',
        maxWidth: '90%',
        borderRadius: 14,
        marginHorizontal: 20,
        backgroundColor: "#00777E",
    },
    imageContainer: {
        flex: 0.8,
        width: '100%',
        backgroundColor: "#12ADB7",
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButtonsContainer: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    photoButtonsContainer: {
        flex: 0.45,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    horizontalSeparator: {
        width: 2,
        height: '80%',
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    headerInput: {
        width: "90%",
        marginTop: 30,
        alignSelf: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: "#00777E",
        borderRadius: 8,
        paddingLeft: 13
    },
    messageInput: {
        width: "90%",
        marginTop: 14,
        paddingLeft: 13,
        alignSelf: 'center',
        height: 160,
        borderWidth: 1,
        borderColor: "#00777E",
        borderRadius: 8,
        textAlignVertical: 'top'
    },
    charCounter: {
        width: '90%',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 17,
        textAlign: 'right',
    },
    sendButton: {
        height: 45,
        width: '90%',
        borderRadius: 8,
        marginVertical: 15,
        alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#88D5DA'
    },
    sendText: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 22,
        textAlign: 'center',
        color: 'white'
    }
});

export default styles;