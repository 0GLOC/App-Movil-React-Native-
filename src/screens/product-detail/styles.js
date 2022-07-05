import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.defaultLight,
    },
    name: {
        fontFamily: 'Kdam',
        textAlign: 'center',
        fontSize: 25,
        backgroundColor: colors.default,
        color: colors.white
    },
    descripcion: {
        padding: 15,
        textAlign: 'center',
        fontFamily: 'Kdam',
        fontSize: 16,
        marginTop: 10,
        color: colors.white,
        textShadowRadius: 10,
    },
    desarrollador: {
        marginVertical: 5,
        fontFamily: 'Kdam',
        textAlign: 'right',
        paddingRight: 20,
        color: colors.white,
        textShadowRadius: 10,
    },
    button: {
        backgroundColor: colors.default,
        borderRadius: 5,
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textButton: {
        fontFamily: 'Kdam',
        textAlign: 'center',
        fontSize: 16,
        color: colors.white,
    },
    price: {
        fontFamily: 'Kdam',
        fontSize: 16,
        textAlign: 'center',
        color: colors.white,
    },
})