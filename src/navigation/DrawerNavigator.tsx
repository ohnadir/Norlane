/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
