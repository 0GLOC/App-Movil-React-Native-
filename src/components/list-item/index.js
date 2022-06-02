import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ListItem = ({ item, onPressItem }) => {
    return (
        <View style={styles.containerItem}>
        <Text style={styles.item}>{item.value}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onPressItem(item.id)}>
        <Text style={styles.deleteButtonText}>x</Text>
        </TouchableOpacity>
      </View>
    )
}

export default ListItem;