import { StyleSheet } from "react-native";
import { config } from "../../config/config";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.mainColor,
    },
    logo: {
        marginTop: '40%',
        alignSelf: 'center',
    },
    textContainer: {
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
    },
    text: {
        fontSize: 10,
        textAlign:'center',
        color: config.white,
    },
})