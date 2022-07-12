import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    formContainer: {
    },
    form: {
        borderBottomWidth: 1,
        borderBottomColor: colors.default,
        margin: 5,
        marginHorizontal: 20,
    },
    text: {
        fontFamily: 'Kdam',
        color: colors.default,
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
    textCategoriesTitle: {
        fontFamily: 'Kdam',
        color: colors.default,
        textAlign: 'center',
        fontSize: 15,
        paddingTop: 10
    },
    categories: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 10,
    },
    buttonsCategories: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: colors.aventuraColor,
        height: 32,
    },
    textCategories:{
        textAlign: 'center',
        fontFamily: 'Kdam',
        fontSize: 12,
        color: colors.white,
        padding: 5
    },
    buttonADDItem: {
        padding: 9,
        marginHorizontal: 25,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: colors.confirm,
        height: 40,
    },
    textButton: {
        color: colors.white,
        fontFamily: 'Kdam',
        fontSize: 16,
        textAlign: 'center',
    },
});