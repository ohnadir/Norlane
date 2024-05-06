/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Pressable, Image } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import Feather from 'react-native-vector-icons/Feather';
import Male from '../assets/one.jpg';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = ({navigation}: {navigation: any}):React.JSX.Element => {
    return (
        <View style={tailwind `bg-white h-[100%] p-[20px]`}>
            
            {/* action buttons */}
            <View style={tailwind `flex flex-row items-end justify-end gap-6 mb-6`}>
                <Pressable>
                    <Feather name="bell" size={24} color="#6C6C6C" />
                </Pressable>
                <Pressable onPress={()=>navigation.openDrawer()}>
                    <Feather name="list" size={24} color="#6C6C6C" />
                </Pressable>
            </View>

            <Image
                style={tailwind `w-[95px] mx-auto rounded-[100px] h-[95px] border-[2px] border-[#6C57EC]`}
                source={Male}
            />

            {/* user Name */}
            <Text style={tailwind `text-center my-2 text-[#545454] text-[16px] font-normal leading-[24px]`}>Nadir Hossain</Text>
            
            {/* user designation */}
            <Text style={tailwind `text-center mb-2 text-[#6C6C6C] text-[14px] font-normal leading-[18px]`}>Event Management Process Owner</Text>

            {/* user location */}
            <View style={tailwind `flex flex-row items-center justify-center`}>
                <EvilIcons name="location" color="#B5B5B5" size={25} />
                <Text style={tailwind ` text-[#B5B5B5] text-[14px] font-normal leading-[18px]`}>Stockton, New Hampshire</Text>
            </View>

            {/* user about and instagram links */}
            <View style={tailwind `flex flex-row items-center justify-center gap-4 mt-4 mb-[22px]`}>
                <Pressable style={tailwind `w-20 bg-white  shadow-lg h-[30px] flex items-center justify-center rounded-[90px]`}>
                    <Text>About</Text>
                </Pressable>
                <Pressable>
                    <LinearGradient
                        colors={['#515BD4', '#9510B8', '#E51804', '#FFBF00']}
                        style={ tailwind` w-8 h-8 flex items-center justify-center  rounded-full`}
                    >
                        <AntDesign name="instagram" color="#B5B5B5" size={20} />
                    </LinearGradient>
                </Pressable>
            </View>

            {/* user follower & following and wishlist also deal  */}
            <View style={tailwind `flex flex-row items-center justify-center border`}>
                <View style={tailwind `w-[33.3%] flex items-center justify-center`}>
                    <FontAwesome5 name="user-friends" color="#B5B5B5" size={23} />
                </View>
                <View style={tailwind `w-[33.3%] flex items-center justify-center`}>
                    <FontAwesome name="heart" color="#B5B5B5" size={23} />
                    {/* <FontAwesome name="heart-o" color="#B5B5B5" size={25} /> */}
                </View>
                <View style={tailwind `w-[33.3%] flex items-center justify-center`}>
                    <FontAwesome name="handshake-o" color="#B5B5B5" size={23} />
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;