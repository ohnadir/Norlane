/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
import Avatar from '../assets/forgot.png';
import { 
    View, 
    Text, 
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, 
} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import TextCustomInput from '../common/TextCustomInput';
import CustomButton from '../common/CustomButton';

const ForgotPasswordScreen = (): React.JSX.Element => {
    const [email, setEmail] = useState('');
    console.log(email);
    return (
        <SafeAreaView>
            <View style={tw `bg-[#EDF9F0] h-[100%]`}>
                <View style={tw `p-[20px]`}>
                    <BackNavition link="link"/>
                </View>
                
                <Image
                    style={tw `mt-[41px] mx-auto`} 
                    source={Avatar}
                />

                <KeyboardAvoidingView 
                    style = {{ flex: 1 }} 
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    keyboardVerticalOffset={600}
                    enabled
                >

                    <View 
                        style={tw `
                            border-t-[1px] 
                            border-l-[1px] 
                            border-r-[1px] 
                            border-gray-500 
                            p-[20px] 
                            rounded-t-6
                        `}
                    >
                        <Text 
                            style={tw `
                                text-[#545454] 
                                text-[24px] 
                                text-center 
                                font-bold 
                                leading-[36px] 
                                mb-[8px]
                            `}
                        >
                            Forgot Password
                        </Text>
                        <Text 
                            style={tw `
                                text-[#919191] 
                                text-[14px] 
                                text-center  
                                leading-[21px]
                            `}
                        >
                            Enter Your email of phone no for verification.
                        </Text>
                    </View>

                    <TextCustomInput
                        placeholder="Enter Your Email"
                        label="Email"
                        onChange={(text)=>setEmail(text)}
                        customStyle="mb-4 px-[20px] my-10"

                    />

                    <View style={tw `px-[20px]`}>
                        <CustomButton
                            label="Continue"
                            onPress={()=>console.log('clicked')}
                            colours={['#8EE88E', '#80D180', '#6BAE6B']}
                            customStyle="w-[100%] h-[48px] mx-auto text-center  rounded-[90px]"
                        />
                    </View>
                </KeyboardAvoidingView>

            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;