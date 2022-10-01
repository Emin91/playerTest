import { StyleSheet } from "react-native";
import { config } from "../../../config/config";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: config.mainColor,
    },
    iconContainer: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});
export default styles;