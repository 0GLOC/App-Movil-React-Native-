import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import CartItem from "../../components/cart/cart-item";
import { useSelector, useDispatch } from "react-redux";
import { confirmCart, removeItem } from "../../store/action";
import { styles } from "./styles";

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const onHandlerDeleteCart = (id) => {
        dispatch(removeItem(id))
    }

    const onHandlerConfirmCart = () => {
        dispatch(confirmCart(cart, total))
    }

    const renderItem = ({ item }) => <CartItem item={item} onDelete={onHandlerDeleteCart} />

    const BottomList = () => {
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={() => onHandlerConfirmCart()}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                    <Text style={styles.total}>${total}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View styles={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<BottomList/>}
                />
            </View>
        </View>
    )
}

export default Cart;