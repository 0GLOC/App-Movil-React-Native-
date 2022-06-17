import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Notes } from '../screens/index'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Notes' component={Notes} />
        </Stack.Navigator>
    )
}

export default MainNavigator