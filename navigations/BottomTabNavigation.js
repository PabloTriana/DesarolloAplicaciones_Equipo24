import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import PokemonesScreen from "../screens/PokemonesScreen"
import Ionicons from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Pokemons List' component={PokemonesScreen} options={{ headerShown: false}} />
        </Tab.Navigator>
    )
}