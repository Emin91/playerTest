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
    headerText: {
        fontSize: 20,
        marginBottom: 32,
        color: config.mainColorDark,
        
    },
    infoText: {
        fontSize: 16,
        color: config.textDark,
        
    },
    buttonWrapper: {
        paddingVertical: 14,
        paddingHorizontal: 50,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10,
        left: 0,
        right: 0,
        bottom: 0,
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
});

export default styles;