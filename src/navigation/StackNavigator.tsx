/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabScreen from '../screens/BottomTabScreen';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/MessageScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from '../screens/EditProfile';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const DrawerNavigator = () => {
        return (
            <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="HomeNav" component={BottomTabScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Edit Profile" component={EditProfile} options={{ headerShown: false }}/>
            </Drawer.Navigator>
        );
    };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Message" component={MessageScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;