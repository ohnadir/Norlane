/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

const RegisterScreen = () => {
    const [ open , setOpen] = useState(false);
    return (
        <View style={tw `bg-[#F0EEFD] h-[100%] p-[20px]`}>
            <BackNavition link="onboarding" />

            <View style={tw `mt-6 mb-[90px]`}>
                <Text style={tw `text-[#231936] text-[24px] text-center font-bold leading-[36px] mb-[8px]`}>Welcome Back!</Text>
                <Text style={tw `text-[#919191] text-[14px] text-center  leading-[21px]`}>Please Enter Your Personal Data</Text>
            </View>

            <View style={{ display: open ? 'none' : 'block'}}>

                <View style={tw `mb-4`}>
                    <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>Full Name</Text>
                    <TextInput
                        style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px]  text-[14px] px-4`} 
                        placeholder="Enter Your Full Name"
                    />
                </View>

                <View style={tw `mb-10`}>
                    <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>Email</Text>
                    <TextInput
                        style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px] text-[14px] px-4`} 
                        placeholder="Enter Your Email"
                    />
                </View>

                <Pressable onPress={() =>setOpen(true)}>
                    <LinearGradient 
                        colors={['#8EE88E', '#80D180', '#6BAE6B']}
                        style={tw `
                            w-[100%]
                            h-[48px]
                            mx-auto 
                            text-center 
                            rounded-[90px]
                            mb-6
                            flex flex-row items-center justify-center gap-2
                        `}
                    >
                        <Text style={tw `text-center my-auto text-white`}>Next</Text>
                        <Icon 
                            name="arrowright" 
                            size={16} 
                            color="#ffffff"
                        />
                    </LinearGradient>
                </Pressable>
            </View>

            <View style={{ display: open ? 'block' : 'none'}}>
                <View style={tw `mb-4`}>
                    <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>Password</Text>
                    <TextInput
                        style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px]  text-[14px] px-4`} 
                        placeholder="!@#$%^&*"
                    />
                </View>

                <View style={tw `mb-10`}>
                    <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>Confirm Password</Text>
                    <TextInput
                        style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px] text-[14px] px-4`} 
                        placeholder="!@#$%^&*"
                    />
                </View>

                <Pressable onPress={() =>console.log('done')}>
                    <LinearGradient 
                        colors={['#8EE88E', '#80D180', '#6BAE6B']}
                        style={tw `
                            w-[100%]
                            h-[48px]
                            mx-auto 
                            text-center 
                            rounded-[90px]
                        `}
                    >
                        <Text style={tw `text-center my-auto text-white`}>Sign Up</Text>
                    </LinearGradient>
                </Pressable>
            </View>

            

            <View style={tw `flex flex-row items-center mx-auto gap-[6px] mt-auto`}>
                <Text style={tw `text-[13px] leading-[18px] text-[#6C6C6C]`}>Already have an account?</Text>
                <Pressable onPress={() =>console.log('done')}>
                    <Text style={tw `text-[14px] font-semibold leading-[18px] text-[#0B002C]`}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default RegisterScreen;