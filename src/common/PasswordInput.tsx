/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { View, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '@rneui/base';

interface ValueProps {
    placeholder: string,
    onChange?: (event: string ) => void,
    label: string,
    customStyle: string | 'p-0' 
}

const PasswordInput = ( {placeholder, onChange, label, customStyle} : ValueProps ):React.JSX.Element => {
    const [open, setOpen] = useState(false);
    return (
        <View style={tw `${customStyle}`}>
            <Text style={tw `text-[#545454]  text-[16px] leading-[24px] mb-[8px]`}>{label}</Text>
            <View 
                style={tw `
                    w-[100%]
                    bg-white 
                    flex 
                    flex-row 
                    items-center
                    justify-between
                    rounded-[45px] 
                    px-4 
                `}
            >
                <TextInput
                    secureTextEntry={ open ? false : true}
                    style={tw `bg-transparent w-[92%] h-[48px]  text-[14px]`} 
                    placeholder={placeholder}
                    onChangeText={onChange}
                />
                <Pressable onPress={()=>setOpen(!open)}>
                    {
                        open
                        ?
                        <MaterialCommunityIcons
                            style={tw ``} 
                            name="eye-outline" 
                            size={20} 
                            color="#B5B5B5" 
                        />
                        :
                        <MaterialCommunityIcons
                            style={tw ``} 
                            name="eye-off-outline" 
                            size={20} 
                            color="#B5B5B5" 
                        />
                    }
                </Pressable>
            </View>
        </View>
    );
};

export default PasswordInput;