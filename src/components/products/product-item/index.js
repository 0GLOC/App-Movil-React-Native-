import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity 
        style={styles.containerItem}
        onPress={() => onSelected(item)}
        >
            <View styles={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.price}>$ {item.price}</Text>
                <Text style={styles.desarrollador}>{item.desarrollador}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem;