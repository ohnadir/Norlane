/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { View, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Text } from '@rneui/base';

interface ValueProps {
    placeholder: string,
    onChange?: (event: string ) => void,
    label: string,
    customStyle: string | 'p-0'
}

const TextCustomInput = ( {placeholder, onChange, label, customStyle} : ValueProps ):React.JSX.Element => {
    return (
        <View style={tw `${customStyle}`}>
            <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>{label}</Text>
            <TextInput
                style={tw `bg-[#FEFEFE] h-[48px] rounded-[45px]  text-[14px] px-4`}
                placeholder={placeholder}
                onChangeText={onChange}
            />
        </View>
    );
};

export default TextCustomInput;