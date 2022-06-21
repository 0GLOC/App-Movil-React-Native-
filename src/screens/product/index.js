import React from "react";
import { View } from "react-native";
import { products } from "../../constants/data/products";
import { Products } from "../../components/index";
import { styles } from "./styles";

const ProductScreen = ({ navigation, route }) => {

  const filteredProducts = products.filter(item => item.categoryId === route.params.categoryId)

  const onHandleSelectedProduct = (item) => {
    navigation.navigate('ProductDetail', {
      product: item,
      name: item.title
    })
  }

    return (
        <View style={styles.container}>
          <Products
            data={filteredProducts}
            onSelected={onHandleSelectedProduct}
          />
        </View>
    )
}

export default ProductScreen