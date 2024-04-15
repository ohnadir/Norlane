/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import Photo from '../assets/SUBS.jpg';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import Icon from 'react-native-vector-icons/EvilIcons';
import CustomButton from '../common/CustomButton';

const SubscriptionDetails = () => {
    const Item = ({feature}: {feature: string}) => (
        <View style={tw `flex flex-row items-center gap-2 mb-[13px] `}>
            <Icon name="check" size={20} style={tw ``} color="#ffffff" />
            <Text style={tw `text-[14px] p-0 m-0 leading-[21px] text-white`}>{feature}</Text>
        </View>
    );
    const data = [
        {
            id: 1,
            feature: 'Ther is Feature 1, for User.',
        },
        {
            id: 2,
            feature: 'Ther is Feature 1, for User.',
        },
        {
            id: 3,
            feature: 'Ther is Feature 1, for User.',
        },
        {
            id: 4,
            feature: 'Ther is Feature 1, for User.',
        },
    ];
    return (
        <View style={tw `bg-white p-[20px] h-[100%]`}>
            <BackNavition link="Home" />
            <Text style={tw `leading-[36px] text-black text-center text-[24px] font-medium mb-4 mt-6`}>Basic</Text>
            <Text style={tw `leading-[17px] text-[14px] text-center font-normal mb-[38px]`}>Monthly Package</Text>
            <ImageBackground
                source={Photo}
                resizeMode="cover"
                style={tw `p-[20px] h-[500px]`}
            >
                <Text style={tw `text-center text-white font-bold text-[48px] my-2 leading-[52px]`}>$200</Text>
                <View style={tw `w-full h-[1px] mt-[11px] mb-[22px] bg-white`}/>
                <View style={tw `mb-[48px]`}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => <Item feature={item.feature} />}
                        keyExtractor={item => item.id}
                    />
                </View>

                <Text style={tw  `text-white text-center mb-[21px] leading-[21px]`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nomy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</Text>
                <CustomButton
                    label="Purchase"
                    colours={['#ffffff', '#ffffff', '#ffffff']}
                    customStyle="w-[100%] h-[48px] mx-auto text-center rounded-[90px]"
                    textColor="#ECA16B"
                    onPress={()=> console.log('done')}
                />
            </ImageBackground>
        </View>
    );
};

export default SubscriptionDetails;