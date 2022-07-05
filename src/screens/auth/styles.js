import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: colors.default,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 16,
        fontFamily: "Kdam",
        marginBottom: 12,
        textAlign: "center",
        color: colors.default,
    },
    label: {
        fontSize: 14,
        fontFamily: "Kdam",
        marginVertical: 10,
        color: colors.default,
    },
    input: {
        height: 40,
        borderBottomColor: colors.default,
        borderBottomWidth: 1,
        width: "90%",
        fontFamily: "Kdam",
    },
    prompt: {
        paddingVertical: 20,
        alignItems: "center",
    },
    promptMessage: {
        fontSize: 14,
        fontFamily: "Kdam",
        color: colors.gray,
    },
    propmtButton: {
        fontSize: 14,
        fontFamily: "Kdam",
        color: colors.default,
        textAlign: "center",
    },
    button: {
        marginTop: 20,
    },
})