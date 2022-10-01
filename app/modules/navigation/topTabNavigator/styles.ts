import { StyleSheet } from "react-native";
import { config } from "../../../config/config";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        borderRadius: 10,
        borderColor: config.mainColorDark,
        borderWidth: 2,
        alignSelf: 'center',
        height: 40,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
})

export default styles;