import { StyleSheet } from "react-native";
import { config } from "../../config/config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.mainColor,
    },
    logo: {
        width: 150,
        alignSelf: 'center',
    },
    buttonsContainer: {
        flex: 0.6,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
    },
    iconContainer: {
        paddingLeft: 25,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        marginRight: 30,
        textAlign: 'center',
        color:config.mainColor,
    },
    button: {
        backgroundColor: config.white,
        height: 60,
        width: 300,
        elevation: 20,
        borderRadius: 6,
        shadowRadius: 5,
        shadowOpacity: 0.5,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: config.black,
        justifyContent: 'space-evenly',
    },
});
export default styles;