import React from "react";
import { View, FlatList } from "react-native";
import { OrderItem } from "../../components";
import { orders } from "../../constants/data/index";
import { styles } from "./styles";

const Orders = () => {

    const items = orders;

    const onSelectedOrder = (item) => {
        console.log(item);
    }

    const renderItem = ({ item }) => <OrderItem item={item} onSelected={onSelectedOrder} />

    return (
        <View styles={styles.container}>
            <View style={styles.orderList}>
                <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Orders;