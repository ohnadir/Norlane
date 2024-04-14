/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
import { View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Logo from '../assets/logo.png';

const SplashScreen = (): React.JSX.Element => {
    return (
        <View 
            style={tw `
                bg-[#6C57EC]
                w-[100%]
                h-[100%]
                m-auto 
            `}
        >
            <View  style={tw `m-auto `} >
                <Image source={Logo} />
            </View>
        </View>
    );
};

export default SplashScreen;