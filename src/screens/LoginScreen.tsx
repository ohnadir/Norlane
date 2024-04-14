/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
    return (
        <View style={tw `bg-[#EDF9F0] h-[100%] p-[20px]`}>
            <BackNavition link="onboarding" />

            <View style={tw `mt-6 mb-[90px]`}>
                <Text style={tw `text-[#231936] text-[24px] text-center font-bold leading-[36px] mb-[8px]`}>Welcome Back!</Text>
                <Text style={tw `text-[#919191] text-[14px] text-center  leading-[21px]`}>Please Enter Your Personal Data</Text>
            </View>

            <View style={tw `mb-4`}>
                <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>E-mail</Text>
                <TextInput
                    style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px]  text-[14px] px-4`} 
                    placeholder="Enter Your Email"
                />
            </View>

            <View style={tw `mb-4`}>
                <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>Enter Your Password</Text>
                <TextInput
                    style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px] text-[14px] px-4`} 
                    placeholder="Enter Your Password"
                />
            </View>

            <Pressable onPress={() =>console.log('link')}>
                <Text style={tw `text-[#8670C6] text-[12px] text-right underline  leading-[18px]`}>Forgot Password?</Text>
            </Pressable>

            <Pressable onPress={() =>console.log('done')}>
                <LinearGradient 
                    colors={['#8EE88E', '#80D180', '#6BAE6B']}
                    style={tw `
                        w-[100%]
                        h-[48px]
                        mx-auto 
                        text-center 
                        rounded-[90px]
                        my-6
                    `}
                >
                    <Text style={tw `text-center my-auto text-white`}>Get Started</Text>
                </LinearGradient>
            </Pressable>

            <View style={tw `flex flex-row items-center gap-[6px] mb-4`}>
                <View style={tw `w-[35%] h-[1px] bg-[#B5B5B5]`} />
                <Text style={tw `text-[12px] leading-[18px] p-0 m-0`}>or sign In with </Text>
                <View style={tw `w-[35%] h-[1px] bg-[#B5B5B5]`} />
            </View>

            <View style={tw `flex flex-row items-center gap-[45px] mx-auto`}>
                <Icon name="logo-facebook" size={30} color="#545454" />
                <Icon name="logo-apple" size={30} color="#545454" />
                <Icon name="logo-google" size={30} color="#545454" />
            </View>

            <View style={tw `flex flex-row items-center mx-auto gap-[6px] mt-auto`}>
                <Text style={tw `text-[13px] leading-[18px] text-[#6C6C6C]`}>Dont have any account?</Text>
                <Pressable onPress={() =>console.log('done')}>
                    <Text style={tw `text-[14px] font-semibold leading-[18px] text-[#0B002C]`}>Sign up</Text>
                </Pressable>
            </View>


        </View>
    );
};

export default LoginScreen;