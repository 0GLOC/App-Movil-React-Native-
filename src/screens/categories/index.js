import React from "react";
import { View, StatusBar } from "react-native";
import { Categories } from '../../components/index'
import { categories } from "../../constants/data/categories";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation, route }) => {

    const onHandleSelectedCategory = (item) => {
        navigation.navigate('Product', {
            categoryId: item.id,
            name: item.title,
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.default}/>
            <Categories
                data={categories}
                onSelected={onHandleSelectedCategory}
            />
        </View>
    )
}

export default CategoriesScreen