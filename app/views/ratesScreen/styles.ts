import { Dimensions, StyleSheet } from "react-native";
import { config } from "../../config/config";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.mainColor,
    },
    content: {
        height: 130,
        elevation: 3,
        borderRadius: 15,
        shadowRadius: 5,
        shadowOpacity: 0.5,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        paddingTop: 30,
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
        bottom: 30,
        paddingTop: 50,
        textAlign: 'center',
        marginHorizontal: 25,
        color: config.mainColor,
    },
    bottomTitle: {
        fontSize: 10,
        bottom: 30,
        textAlign: 'center',
        marginHorizontal: 25,
        position: 'absolute',
        color: config.mainColor,
    },
});

export default styles;