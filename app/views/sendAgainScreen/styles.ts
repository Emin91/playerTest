import { StyleSheet } from "react-native";
import { config, Fonts } from "../../config/config";

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 12,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: config.white,
        paddingTop: 20,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 12,
        height: 50,
        borderWidth: 2,
        borderRadius: 8,
        fontSize: 14,
        color: config.mainColorDark,
        
        borderColor: config.mainColorDark
    },
    infoText: {
        fontSize: 18,
        textAlign: "center",
        color: config.mainColorDark,
        
    },
    button: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: config.mainColorDark
    },
    label: {
        fontSize: 18,
        color: config.white,
        
    },
    counter: {
        fontSize: 12,
        color: config.placeholder,
        textAlign: "right",
        marginTop: 2,
        
    },
});

export default styles;