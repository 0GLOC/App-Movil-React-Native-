import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/themes/colors";
import MainNavigator from "./main";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator 
        initialRouteName="ShopTab"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}
        >
            <BottomTabs.Screen 
            name="CartTab" 
            component={CartNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={ focused ? 'cart' : 'cart-outline' } size={20} color={ focused ? colors.default : colors.aventuraColor}/>
                )
            }}
            />

            <BottomTabs.Screen 
            name="ShopTab" 
            component={MainNavigator} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={ focused ? 'game-controller' : 'game-controller-outline' } size={20} color={ focused ? colors.default : colors.aventuraColor}/>
                )
            }}
            />
            
            <BottomTabs.Screen 
            name="OrdersTab" 
            component={OrdersNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={ focused ? 'book' : 'book-outline' } size={20} color={ focused ? colors.default : colors.aventuraColor}/>
                )
            }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator;