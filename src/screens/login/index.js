import React from "react";
import { Button, View } from "react-native";
import { styles } from './styles'

const Login = ({ navigation, route }) => {
    return (
        <View style={styles.buttonRouteContainer}>
            <Button color = '#8814AB' title="Iniciar" onPress={() => navigation.navigate('Notes')}/>
        </View>
    )
}

export default Login