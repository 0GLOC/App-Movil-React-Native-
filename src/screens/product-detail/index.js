import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../store/action";
import { styles } from "./styles";

const ProductDetailScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selected)
    const { 
        name,
        fullImage,
        image,
        price,
        descripcion,
        desarrollador,
    } = product;

    const onHandlerAddToCart = (item) => {
        dispatch(addToCart(item))
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                    <Image
                    style={{ width: 400, height: 570,  }}
                    source={{ uri: fullImage }}
                    />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.descripcion}>{descripcion}</Text>
                    <Text style={styles.desarrollador}>{desarrollador}</Text>
            </ScrollView>
            <View style={styles.containerDetail}>
                        <TouchableOpacity 
                        style={styles.button}
                        onPress={() => onHandlerAddToCart(product)}>
                            <Text style={styles.textButton}>Agregar al carrito</Text>
                            <Text style={styles.price}>$ {price}</Text>
                        </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetailScreen