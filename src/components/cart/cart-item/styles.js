import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.default,
    },
    header: {
        fontSize: 16,
        fontFamily: 'Kdam',
        color: colors.white,
        position: 'absolute'
    },
    containerDetail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        color: colors.white,
        position: 'absolute',
        top: '35%',
        left: '60%',
    },
    detail: {
        marginRight: 40,
    },
    detailQty: {
        fontSize: 14,
        fontFamily: 'Kdam',
    },
    detailPrice: {
        fontSize: 15,
        fontFamily: 'Kdam',
    },
})