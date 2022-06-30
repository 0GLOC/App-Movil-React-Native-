import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { OrderItem } from "../../components";
import { getOrders, deleteOrder } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";

const Orders = () => {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);

    const onDeleteOrder = (id) => {
        dispatch(deleteOrder(id));
    }

    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDeleteOrder} />

    useEffect(() => {
        dispatch(getOrders());
    }), [];

    return (
        <View styles={styles.container}>
            <View style={styles.orderList}>
                <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Orders;