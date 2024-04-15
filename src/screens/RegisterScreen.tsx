/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import Icon from 'react-native-vector-icons/AntDesign';
import TextCustomInput from '../common/TextCustomInput';
import CustomButton from '../common/CustomButton';
import PasswordInput from '../common/PasswordInput';

const RegisterScreen = () => {
    const [ open , setOpen] = useState(false);
    const [ auth , setAuth] = useState({});
    const handleChange = (event:string, name: string)=>{
        setAuth(prev=> ({...prev, [name] : event }));
    };

    const handleSubmit = ()=>{
        console.log(auth);
    };

    return (
        <View style={tw `bg-[#F0EEFD] h-[100%] p-[20px]`}>
            <BackNavition link="onboarding" />

            <View style={tw `mt-6 mb-[90px]`}>
                <Text style={tw `text-[#231936] text-[24px] text-center font-bold leading-[36px] mb-[8px]`}>Welcome Back!</Text>
                <Text style={tw `text-[#919191] text-[14px] text-center  leading-[21px]`}>Please Enter Your Personal Data</Text>
            </View>

            <View style={tw `${open ? 'hidden' : 'flex' }`}>
                <TextCustomInput
                    label="Full Name"
                    onChange={(event)=>handleChange(event, 'name')}
                    placeholder="Enter Your Full Name"
                    customStyle="mb-4"
                />

                <TextCustomInput
                    label="Email"
                    onChange={(event)=>handleChange(event, 'email')}
                    placeholder="Enter Your Email"
                    customStyle="mb-10"
                />

                <CustomButton
                    label="Next"
                    onPress={()=>setOpen(true)}
                    colours={['#8EE88E', '#80D180', '#6BAE6B']}
                    customStyle="w-[100%] h-[48px] mx-auto text-center rounded-[90px] mb-6 flex flex-row items-center justify-center gap-2"
                    icon={<Icon name="arrowright" size={16} color="#ffffff" />}
                />
            </View>

            <View style={tw `${open ? 'flex' : 'hidden' }`}>
                <PasswordInput
                    label="Password"
                    onChange={(event)=>handleChange(event, 'password')}
                    placeholder="Enter Password"
                    customStyle="mb-4"
                />

                <PasswordInput
                    label="Confirm Password"
                    onChange={(event)=>handleChange(event, 'confirm_password')}
                    placeholder="Enter Confirm Password"
                    customStyle="mb-10"
                />

                <CustomButton
                    label="Sign Up"
                    onPress={handleSubmit}
                    colours={['#8EE88E', '#80D180', '#6BAE6B']}
                    customStyle=" w-[100%] h-[48px] mx-auto text-center rounded-[90px] mb-6"
                />
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