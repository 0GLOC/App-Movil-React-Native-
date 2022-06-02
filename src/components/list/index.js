import React from "react";
import { FlatList } from "react-native";
import ListHeader from "../list-header";
import ListItem from "../list-item";
import { styles } from "./styles";

const List = ({ saveTask, onPressItem }) => {

    const ListHeaderComponent = () => {
        return saveTask.length > 0 && <ListHeader title='Task List'/>
    };

    const renderItem = ({ item }) => <ListItem item={item} onPressItem={onPressItem}/>

    const keyExtractor= (item) => item.id.toString();

    return (
        <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={saveTask}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
    )
}

export default List;