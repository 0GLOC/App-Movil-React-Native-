import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerDetail: {
        
    },
    name: {
        fontFamily: 'Kdam',
        textAlign: 'center',
        fontSize: 25,
        backgroundColor: colors.default,
        color: colors.white
    },
    price: {
        marginTop: 14,
        fontFamily: 'Kdam',
        fontSize: 18,
        textAlign: 'center',
    },
    descripcion: {
        padding: 15,
        textAlign: 'center',
        fontFamily: 'Kdam',
        fontSize: 16,
    },
    desarrollador: {
        marginVertical: 10,
        paddingRight: 15,
        fontFamily: 'Kdam',
        textAlign: 'right',
    },
})