/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Platform} from 'react-native';
// import BottomTabScreen from '../screens/BottomTabScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const drawerIcon = ({focused, size}: {focused: any, size: any}, name: any) => {
        return (
        <Icon
            name={name}
            size={size}
            color={focused ? Colors.active : Colors.inactive}
        />
        );
    };
    return (
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: Colors.transparent,
            drawerInactiveBackgroundColor: Colors.transparent,
            drawerActiveTintColor: Colors.active,
            drawerInactiveTintColor: Colors.inactive,
            drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
            overlayColor: Colors.transparent,
            drawerStyle: {
                backgroundColor: Colors.bg,
                width: '60%',
            },
            sceneContainerStyle: {
                backgroundColor: Colors.bg,
            },
        }}>
        <Drawer.Screen
            name="Main"
            component={LoginScreen}
            options={{
            drawerIcon: options => drawerIcon(options, 'home-outline'),
            }}
        />
        <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
            drawerIcon: options => drawerIcon(options, 'heart-outline'),
            }}
        />
        <Drawer.Screen
            name="Cart"
            component={CartScreen}
            options={{
            drawerIcon: options => drawerIcon(options, 'history'),
            }}
        />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

const Colors = {
    bg: '#009688',
    active: '#fff',
    inactive: '#eee',
    transparent: 'transparent',
};
