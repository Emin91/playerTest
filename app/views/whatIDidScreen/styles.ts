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
        fontSize: 16,
        marginBottom: 6,
        color: config.mainColorDark,
        
    },
    infoLabel: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: config.mainColorDark
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 14,
        marginBottom: 4,
        color: config.white,
        
    },
    value: {
        fontSize: 14,
        marginBottom: 4,
        color: config.value,
        
    },
});

export default styles;