import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

const AboutUs = () => {

    return (
        <View>
            <Text 
            style={styles.textAboutUs}>
            Has excedido el número máximo de notas
            </Text>
        </View>
    )
};

export default AboutUs;