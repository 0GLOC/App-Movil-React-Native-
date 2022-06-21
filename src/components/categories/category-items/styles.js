import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";

export const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        borderRadius: 10,
        margin: 20,
        height: 120,
    },
    item: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
    },
    title: {
        fontFamily: 'Kdam',
        color: colors.white,
    }
})