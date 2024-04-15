/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import Icon from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../common/PasswordInput';
import TextCustomInput from '../common/TextCustomInput';
import CustomButton from '../common/CustomButton';

const LoginScreen = () => {
    const [auth, setAuth] = useState({
        email: '',
        password: '',
    });
    const handleChange = (event : string, name: string)  =>{
        setAuth(prevForm => ({...prevForm, [name] : event }));
    };

    const handleSubmit = ()=>{
        console.log(auth);
    };

    return (
        <View style={tw `bg-[#EDF9F0] h-[100%] p-[20px]`}>
            <BackNavition link="onboarding" />

            <View style={tw `mt-6 mb-[90px]`}>
                <Text style={tw `text-[#231936] text-[24px] text-center font-bold leading-[36px] mb-[8px]`}>Welcome Back!</Text>
                <Text style={tw `text-[#919191] text-[14px] text-center  leading-[21px]`}>Please Enter Your Personal Data</Text>
            </View>

            <TextCustomInput
                placeholder="Enter Your Email"
                label="Email"
                onChange={(event)=> handleChange(event, 'email')}
                customStyle="mb-4"
            />
            
            <PasswordInput
                placeholder="Enter Your Password"
                onChange={(event)=>handleChange(event, 'password')}
                label="Password"
                customStyle="mb-4"
            />

            <Pressable onPress={() =>console.log('link')}>
                <Text style={tw `text-[#8670C6] text-[12px] text-right underline  leading-[18px]`}>Forgot Password?</Text>
            </Pressable>

            <CustomButton
                label="Log in"
                onPress={handleSubmit}
                colours={['#8EE88E', '#80D180', '#6BAE6B']}
                customStyle="w-[100%] h-[48px] mx-auto text-center rounded-[90px] my-6"
            />

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
