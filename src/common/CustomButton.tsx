/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { Text, Pressable } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';

interface ButtonProps {
    label: string,
    onPress?: () => void,
    colours: string[],
    customStyle: string | 'p-0',
    icon?: React.JSX.Element,
    textColor?: string
}


const CustomButton = ({label, onPress, colours, customStyle, icon, textColor}: ButtonProps) => {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient
                colors={colours} // '#8EE88E', '#80D180', '#6BAE6B'
                style={tw `${customStyle}`} // w-[100%] h-[48px] mx-auto text-center rounded-[90px] my-6
            >
                <Text style={tw `text-center my-auto ${textColor ?  `text-[${textColor}]` : 'text-white'} `}>{label}</Text>
                {icon}
            </LinearGradient>
        </Pressable>
    );
};

export default CustomButton;