import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constants/themes/colors";
import { styles } from "./styles";

const formatDate = (time) => {

    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.containerDetail}>
                <View style={styles.detail}>
                    <Text style={styles.detailTotal}>Total: $ {item.total}</Text>
                </View>
                <View style={styles.detailTrash}>
                    <TouchableOpacity onPress={() => onDelete(item.id)}>
                        <Ionicons name="trash" size={30} color={colors.delete} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OrderItem;