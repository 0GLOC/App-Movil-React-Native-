import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

const ProductDetailScreen = ({ navigation, route }) => {

    const product = route.params.product

    const { 
        id,
        name,
        image,
        price,
        descripcion,
        desarrollador,
     } = product;

    return (
        <View style={styles.container}>
            <ScrollView>
                    <Image
                    style={{ width: 400, height: 570,  }}
                    source={{ uri: image }}
                    />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>$ {price}</Text>
                    <Text style={styles.descripcion}>{descripcion}</Text>
                    <Text style={styles.desarrollador}>{desarrollador}</Text>
            </ScrollView>
        </View>
    )
}

export default ProductDetailScreen