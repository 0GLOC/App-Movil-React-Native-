import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";

export const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        padding: 10,
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.default,
        height: 100
    },
    item: {
        flex: 1,
        justifyContent: "space-around",
    },
    title: {
        fontFamily: 'Kdam',
        color: colors.white,
        fontSize: 18
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 28,
        color: colors.white,
    },
    price: {
        color: colors.white,
        fontFamily: 'Kdam',
        fontSize: 15,
    },
    desarrollador: {
        color: colors.white,
        fontFamily: 'Kdam',
        fontSize: 15,
    },
})