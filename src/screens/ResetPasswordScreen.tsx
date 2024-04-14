/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
import Avatar from '../assets/forgot.png';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import LinearGradient from 'react-native-linear-gradient';

const ResetPasswordScreen = (): React.JSX.Element => {
    return (
        <View style={tw `bg-[#EDF9F0] h-[100%]`}>
            <View style={tw `p-[20px]`}>
                <BackNavition link="link"/>
            </View>

            <Image
                style={tw ` mx-auto`} 
                source={Avatar}
            />

            <View 
                style={tw `
                    border-t-[1px] 
                    border-l-[1px] 
                    border-r-[1px] 
                    border-gray-500 
                    pl-[20px] 
                    pt-[20px] 
                    pr-[20px] 
                    rounded-t-6
                `}
            >
                <Text style={tw `text-[#545454] text-[24px] text-center font-bold leading-[36px] mb-[8px]`}>Reset Password</Text>
                <Text style={tw `text-[#919191] text-[14px] text-center  leading-[21px]`}>Set the new password for your account so you can login and access all the features.</Text>
            </View>

            <View style={tw `mb-4 pl-[20px] mt-[28px]`}>
                <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>New Password</Text>
                <TextInput
                    style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px]  text-[14px] px-4`} 
                    placeholder="Enter New Password"
                />
            </View>

            <View style={tw `mb-10 pl-[20px]`}>
                <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>Confirm Password</Text>
                <TextInput
                    style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px]  text-[14px] px-4`} 
                    placeholder="Confirm Password"
                />
            </View>

            <Pressable onPress={() =>console.log('done')} style={tw `px-[20px]`}>
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
                    <Text style={tw `text-center my-auto text-white`}>Continue</Text>
                </LinearGradient>
            </Pressable>



        </View>
    );
};

export default ResetPasswordScreen;