import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from '../screens/index'
import { isAndroid } from "../constants/utils";
import { colors } from '../constants/themes/colors'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Orders'
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
            name='Orders' 
            component={Orders} 
            options={{
                title: 'Ordenes'
            }}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator;