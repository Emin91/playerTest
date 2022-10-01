import { Dimensions, StyleSheet } from "react-native";
import { config } from "../../config/config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.mainColor,
    },
    title: {
        fontSize: 18,
        marginTop: 20,
        color: '#00777E',
    },
});

export default styles;