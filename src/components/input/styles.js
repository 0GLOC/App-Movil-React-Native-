import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
    },
    input: {
      height: 40,
      borderBottomColor: colors.defaultLight,
      borderBottomWidth: 1,
      width: "90%",
      fontFamily: "Kdam",
    },
    message: {
      paddingVertical: 5,
    },
    helperText: {
      fontFamily: 'Kdam',
      fontSize: 14,
      color: colors.delete,
    },
  });