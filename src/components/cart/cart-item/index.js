import React from "react";
import { TouchableOpacity, View, Text, Image, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constants/themes/colors";
import { styles } from "./styles";

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    style={{ 
                    resizeMode: "cover",
                    position: 'relative',
                    height: 100,
                    width: 200 }}
                    source={{ uri: item.image }}/>
            </View>
            <View style={styles.containerDetail}>
                <View style={styles.detail}>
                    <Text style={styles.detailQty}>Cantidad: {item.quantity}</Text>
                    <Text style={styles.detailPrice}>$ {item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={30} color={colors.delete} />
                </TouchableOpacity>
            </View>    
        </View>
    )
}

export default CartItem;