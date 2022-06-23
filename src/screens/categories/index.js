import React from "react";
import { View, StatusBar } from "react-native";
import { Categories } from '../../components/index'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from "../../store/action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation, route }) => {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.categories)

    const onHandleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Product', {
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