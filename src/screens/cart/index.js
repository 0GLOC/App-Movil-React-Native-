import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import CartItem from "../../components/cart/cart-item";
import { cart } from "../../constants/data/cart";
import { styles } from "./styles";

const Cart = () => {

    const items = cart;
    const total = 66666;

    const onHandlerDeleteCart = (id) => {
        console.log(id);
    }

    const onHandlerConfirmCart = () => {
        console.log('confirm');
    }

    const renderItem = ({ item }) => <CartItem item={item} onDelete={onHandlerDeleteCart} />

    const BottomList = () => {
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={() => onHandlerConfirmCart()}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total</Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View styles={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<BottomList/>}
                />
            </View>
        </View>
    )
}

export default Cart;