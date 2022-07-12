import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonADD: {
        padding: 10,
        marginHorizontal: 25,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: colors.default,
        height: 50,
    },
    textButton: {
        color: colors.white,
        fontFamily: 'Kdam',
        fontSize: 16,
        textAlign: 'center',
    },
});