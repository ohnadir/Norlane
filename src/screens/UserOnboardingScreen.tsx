/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';
import Slider1 from '../assets/slider2.png';
import BackNavition from '../common/BackNavition';

const UserOnboardingScreen = (): React.JSX.Element => {
    return (
        <View style={tw `bg-[#F0EEFD] h-[100%]`}>
            <BackNavition link="onboarding" />
            
            <View>
                <Image style={tw `mx-auto`} source={Slider1}/>
                <Text
                    style={tw `
                        w-[334px] 
                        mx-auto 
                        text-[#919191] 
                        mt-3 
                        text-center 
                        leading-[21px]
                    `}
                >
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Text>
            </View>

            <View style={tw `flex flex-row items-center justify-center gap-5 mt-10`}>
                <Pressable onPress={() =>console.log('done')}>
                    <LinearGradient 
                        colors={['#8EE88E', '#80D180', '#6BAE6B']}
                        style={tw `
                            w-[125px]
                            h-[48px] 
                            mx-auto 
                            text-center 
                            rounded-[90px]
                        `}
                    >
                        <Text style={tw `text-center my-auto text-white`}>Get Started</Text>
                    </LinearGradient>
                </Pressable>

                <Pressable onPress={() =>console.log('done')}>
                    <LinearGradient 
                        colors={['#9C8EEF', '#6C57EC', '#5443BB']}
                        style={tw `
                            w-[125px]
                            h-[48px] 
                            mx-auto 
                            text-center 
                            rounded-[90px]
                        `}
                    >
                        <Text style={tw `text-center my-auto text-white`}>Get Started</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </View>
    );
};

export default UserOnboardingScreen;