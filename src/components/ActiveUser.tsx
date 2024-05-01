/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';

interface IActiveUser{
    index: number;
    length: number;
    item:{
        name: string;
        image: any;
    }
}

const ActiveUser = ({index, item, length}: IActiveUser): React.JSX.Element  => {
    return (
        <View
            style={{
                paddingLeft: index === 0 ? 20 : 14,
                paddingRight: index === length - 1 ? 20 : 0,
                position: 'relative',
            }}
        >
            <Image 
                style={tailwind  `w-16 h-16 rounded-10`}
                source={item.image}
            />
            <View style={tailwind `w-4 h-4 bg-white flex items-center justify-center absolute top-1/2 right-0 rounded-full`}> 
                <View style={tailwind `w-3 h-3 bg-green-500  rounded-full`} />
            </View>
            <Text style={tailwind `text-center mt-[6px]`}>{item.name}</Text>
        </View>
    );
};

export default ActiveUser;