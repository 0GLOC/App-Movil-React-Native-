import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetailScreen, ProductScreen, CategoriesScreen } from '../screens/index'
import { isAndroid } from "../constants/utils";
import { colors } from '../constants/themes/colors'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Categorias'
        screenOptions={{
            headerStyle: {
                backgroundColor: isAndroid ? colors.default : colors.default
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
            name='Categories' 
            component={CategoriesScreen} 
            options={{
                title: 'Categorias'
            }}
            />
            <Stack.Screen 
            name='Product' 
            component={ProductScreen}
            options={({ route }) => ({
                title: route.params.name,
            })} 
            />
            <Stack.Screen 
            name='ProductDetail' 
            component={ProductDetailScreen}
            options={{
                title: 'Detalles'
            }} 
            />
        </Stack.Navigator>
    )
}

export default MainNavigator