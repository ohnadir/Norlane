/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import male1 from '../assets/one.jpg';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
const MessageScreen = ():React.JSX.Element => {
    const {name, image} = useRoute().params as {name: string, image: any};
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('Drawer');
    };
    return (
        <>
            <View style={tailwind `p-5 bg-black h-full`}>
                {/* reveiver profile section */}
                <View style={tailwind `flex flex-row items-center justify-between`}>
                    <View style={tailwind `flex flex-row items-center gap-3`}>
                        <Pressable onPress={handleNavigate}>
                            <MaterialIcons name="arrow-back-ios-new" size={24} color={'#dfdfdf'} />
                        </Pressable>
                        <Image 
                            style={tailwind  `w-10 h-10 rounded-10`}
                            source={image ? image : male1}
                        />
                        <View>
                            <Text style={tailwind `text-white`}>{name}</Text>
                            <Text style={tailwind `text-white text-[12px] text-gray-200`}>Active Now</Text>
                        </View>
                    </View>
                    <View style={tailwind `flex flex-row items-center gap-3`}>
                        <Pressable>
                            <Ionicons name="call" size={24} color={'#dfdfdf'} />
                        </Pressable>
                        <Pressable>
                            <FontAwesome6 name="video" size={24} color={'#dfdfdf'} />
                        </Pressable>
                    </View>
                </View>

                {/* chat list section */}
                    <View style={tailwind `border`}>
                        <Text style={tailwind `text-white`}>Hello</Text>
                    </View>
            </View>
        </>
    );
};

export default MessageScreen;