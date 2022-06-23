import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { Products } from "../../components/index";
import { selectProduct, filteredProducts } from "../../store/action";
import { styles } from "./styles";

const ProductScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const selectedCategory = useSelector(state => state.category.selected)
  const categoryProducts = useSelector(state => state.products.filteredProducts)

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id))
  }, [])

  const onHandleSelectedProduct = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate('ProductDetail', {
      name: item.title
    })
  }

  return (
      <View style={styles.container}>
        <Products
          data={categoryProducts}
          onSelected={onHandleSelectedProduct}
        />
      </View>
  )
}

export default ProductScreen