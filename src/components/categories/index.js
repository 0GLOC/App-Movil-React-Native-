import React from "react";
import { FlatList } from "react-native";
import CategoryItem from "./category-items";

const Categories = ({ data, onSelected }) => {

    const renderItem = ({ item }) => {
        return (
            <CategoryItem item={item} onSelected={onSelected}/>
        )
    }

    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        />
    )
}

export default Categories;