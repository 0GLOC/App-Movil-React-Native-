import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

const ListHeader = ({ title }) => {
    return (
        <Text style={styles.title}>Notas</Text>
    )
}

export default ListHeader;