/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable eol-last */


import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LinearGradient from 'react-native-linear-gradient';
import ChatScreen from './ChatScreen';
import { useRoute } from '@react-navigation/native';

const BottomTabScreen = () => {
    const Tab = createBottomTabNavigator();
    const route = useRoute();
    console.log(route.name);
    return (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle:{
              position: 'absolute',
              left: 16,
              right: 16,
              bottom: 16,
              height: 60,
              paddingBottom: 10,
              borderRadius: 100,
              overflow: 'hidden',
            },
            tabBarBackground: () => (
              <LinearGradient
                colors={['#FDFDFD', '#EEE6E8', '#EBE2EC', '#F2FBFC']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
          }}
        >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: { marginTop: -8 },
                        tabBarIcon: ({ focused }) =>
                        focused 
                        ? 
                        <Octicons  name="home" size={24} color="#6C57EC" />
                        : 
                        <Octicons name="home" size={24} color="#919191" />
                    }}
                />

                <Tab.Screen
                    name="Videos"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Videos",
                        tabBarLabelStyle: { color: "#008E97", marginTop: -8 },
                        tabBarIcon: ({ focused }) =>
                        focused 
                        ? 
                        <Octicons name="video" size={24} color="#6C57EC" />
                        : 
                        <Octicons name="video" size={24} color="#919191" />
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarLabelStyle: { marginTop: -8 },
                        tabBarIcon: ({ focused }) =>
                        focused
                        ?
                        <Ionicons name="person" size={24} color="#6C57EC" />
                        :
                        <Ionicons name="person-outline" size={24} color="#919191" />
                    }}
                />

                <Tab.Screen
                    name="Inbox"
                    component={ChatScreen}
                    options={{
                      // tabBarStyle: {display: "none"},
                        tabBarLabel: "Inbox",
                        tabBarLabelStyle: { marginTop: -8 },
                        tabBarIcon: ({ focused }) =>
                        focused
                        ?
                        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#6C57EC" />
                        :
                        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#919191" />
                    }}
                />
            </Tab.Navigator>
    );
};



export default BottomTabScreen;