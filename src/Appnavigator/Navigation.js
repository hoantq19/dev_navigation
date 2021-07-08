import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screen/Profile';
import Home from '../screen/Home';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function TabBar() {
    <Tab.Navigator headerMode='none'>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
}

function MyStack() {
    // return (
    //     <Stack.Navigator headerMode='none'>
    //         <Stack.Screen name='Home' component={Home} />
    //         <Stack.Screen name='Profile' component={Profile} />
    //     </Stack.Navigator>
    // )
}
export default function Navigation() {
    <NavigationContainer>
        <Drawer.Screen component={TabBar} name='TabBar' />
    </NavigationContainer>
}
