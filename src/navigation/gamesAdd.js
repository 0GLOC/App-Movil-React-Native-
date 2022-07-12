import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddGames } from "../screens"; 
import { colors } from "../constants/themes/colors";

const Stack = createNativeStackNavigator();

const GamesAdd = () => {
    return (
        <Stack.Navigator 
        initialRouteName='addGames'
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.default
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
            name='addGames' 
            component={AddGames} 
            options={{
                title: 'Añadir Productos'
            }}
            />
        </Stack.Navigator>
    )
}

export default GamesAdd;