/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
import Avatar from '../assets/forgot.png';
import { View, Text, Image} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import PasswordInput from '../common/PasswordInput';
import CustomButton from '../common/CustomButton';

const ResetPasswordScreen = (): React.JSX.Element => {
    const [auth, setAuth] = useState({});

    const handleChange = (event: string, name: string)=>{
        setAuth(prev => ({...prev, [name]: event}));
    };

    const handleSubmit = ()=>{
        console.log(auth);
    };
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

            <PasswordInput
                customStyle="mb-4 pl-[20px] mt-[28px]"
                label="New Password"
                placeholder="Enter New Password"
                onChange={(event)=> handleChange(event, 'new_password')}
            />

            <PasswordInput
                customStyle="mb-10 pl-[20px]"
                label="Confirm Password"
                placeholder="Enter Confirm Password"
                onChange={(event)=> handleChange(event, 'confirm_password')}
            />

            <View style={tw `px-[20px]`}>
                <CustomButton
                    label="Continue"
                    colours={['#8EE88E', '#80D180', '#6BAE6B']}
                    onPress={handleSubmit}
                    customStyle="w-[100%] h-[48px]  text-center  rounded-[90px]"
                />
            </View>
        </View>
    );
};

export default ResetPasswordScreen;