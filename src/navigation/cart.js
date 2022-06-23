import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from '../screens/index'
import { isAndroid } from "../constants/utils";
import { colors } from '../constants/themes/colors'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Categorias'
        screenOptions={{
            headerStyle: {
                backgroundColor: isAndroid ? colors.default : colors.aventuraColor
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
                fontFamily: 'Kdam',
                fontSize: 25,
            },
            headerTitleAlign: 'center'
        }}
        >
            <Stack.Screen 
            name='Cart' 
            component={Cart} 
            options={{
                title: 'Carrito'
            }}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;