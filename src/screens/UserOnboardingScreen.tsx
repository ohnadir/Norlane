/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Image } from 'react-native';
import Slider1 from '../assets/slider2.png';
import BackNavition from '../common/BackNavition';
import CustomButton from '../common/CustomButton';

const UserOnboardingScreen = (): React.JSX.Element => {
    return (
        <View style={tw `bg-[#F0EEFD] h-[100%] p-[20px]`}>
            <BackNavition link="onboarding" />
            
            <View style={tw `mt-10`}>
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
                <CustomButton
                    label="User"
                    onPress={()=>console.log('done')}
                    colours={['#8EE88E', '#80D180', '#6BAE6B']}
                    customStyle="w-[125px] h-[48px] mx-auto text-center rounded-[90px]"
                />
                
                <CustomButton
                    label="Artist"
                    onPress={()=>console.log('done')}
                    colours={['#9C8EEF', '#6C57EC', '#5443BB']}
                    customStyle="w-[125px] h-[48px] mx-auto text-center rounded-[90px]"
                />
            </View>
        </View>
    );
};

export default UserOnboardingScreen;