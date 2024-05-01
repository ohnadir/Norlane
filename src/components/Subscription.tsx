/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/EvilIcons';



interface SubscriptionProps {
    name: string,
    price : string,
    featues?: string[],
    image?: React.JSX.Element | undefined
}
const Subscription = ({name, price, featues, image}: SubscriptionProps): React.JSX.Element => {
    const Item = ({title}: {title: string}) => (
        <View style={tw `flex flex-row items-center gap-2 mb-1`}>
            <Icon name="check" size={18} color="#ffffff" />
            <Text style={tw `text-[12px] text-white`}>{title}</Text>
        </View>
    );
    return (
        <View>
            <ImageBackground
                source={image}
                style={tw `px-6 py-3 h-[176px] mb-4 shadow-md shadow-gray-500`}
            >

                <Text style={tw `text-center text-white`}>{name}</Text>
                <Text style={tw `text-center text-white font-semibold text-2xl my-2 leading-[30px]`}>${price}</Text>
                <Text style={tw `text-center text-white`}>Monthly Package</Text>
                <View style={tw `w-full h-[1px] mt-1 mb-2 bg-white`}/>
                <FlatList
                    data={featues}
                    renderItem={({item}) => <Item title={item} />}
                    keyExtractor={index => index}
                />
            </ImageBackground>
        </View>
    );
};

export default Subscription;