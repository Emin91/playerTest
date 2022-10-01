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
    imageWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 190,
        height: 190,
        marginBottom: 60,
        borderRadius: 200,
    },
    itemWrapper: {
        width: "100%",
        marginTop: 6,
        borderBottomWidth: 1,
        borderBottomColor: config.placeholder
    },
    label: {
        fontSize: 14,
        color: config.label,
        
    },
    value: {
        fontSize: 16,
        marginTop: 4,
        color: config.mainColorDark,
        
    },
});

export default styles;