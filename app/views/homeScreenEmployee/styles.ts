import { Dimensions, StyleSheet } from "react-native";
import { config } from "../../config/config";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.mainColor,
        justifyContent: 'space-evenly'
    },
    content: {
        height: 120,
        elevation: 3,
        borderRadius: 15,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.09,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        width: width / 2 - 20,
        justifyContent: 'center',
        shadowColor: config.black,
        backgroundColor: config.white,
    },
    scrollView: {
        flex: 0.9,
        paddingTop: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: config.white,
    },
    contentContainer: {
        flexWrap: 'wrap',
        paddingBottom: 35,
        flexDirection: 'row',
    },
    title: {
        fontSize: 10,
        paddingTop: 30,
        textAlign: 'center',
        marginHorizontal: 25,
        color: config.mainColor,
    },
});

export default styles;