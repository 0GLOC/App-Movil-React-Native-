import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        padding: 5,
    },
    buttonConfirm: {
        backgroundColor: colors.default,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Kdam',
    },
    totalContainer: {
        flex: 0.35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalTitle: {
        fontSize: 14,
        fontFamily: 'Kdam',
    },
    total: {
        fontSize: 15,
        fontFamily: 'Kdam',
    },
})