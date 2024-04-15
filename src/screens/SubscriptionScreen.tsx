/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native';
import React from 'react';
import Package1 from '../assets/package1.png';
import Package2 from '../assets/package2.png';
import Package3 from '../assets/package3.png';
import tw from 'twrnc';
import BackNavition from '../common/BackNavition';
import Subscription from '../components/Subscription';
import Icon from 'react-native-vector-icons/AntDesign';

const data = [
    {
        name: 'Basic',
        price: '200',
        image: Package1,
        featues: ['Do', 'Or', 'Die'],
        descriptions: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nomy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
    },
    {
        name: 'Essential',
        image: Package2,
        price: '400',
        featues:  ['Do', 'Or', 'Die'],
        descriptions: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nomy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
    },
    {
        name: 'Essential Pro',
        price: '600',
        image: Package3,
        featues:  ['Do', 'Or', 'Die'],
        descriptions: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nomy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
    },
];
const SubscriptionScreen = () => {
    return (
        <ScrollView 
            showsHorizontalScrollIndicator={false} 
            style={tw `bg-white p-[20px] h-[100%]`}
        >
            <BackNavition link="Home" />

            <Text style={tw `mt-6 leading-[21px]`}>Dear User, established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
            <Text style={tw `my-4 font-semibold text-[16px] text-[#545454]`}>Subscription to unlock all features</Text>

            <FlatList
                data={data}
                renderItem={({item}) => 
                    <Subscription 
                        name={item.name} 
                        price={item.price} 
                        featues={item.featues} 
                        image={item.image} 
                    />
                }
                keyExtractor={index => index.price}
            />

            <Pressable onPress={()=> console.log('clicked')}>
                <View style={tw `pb-10 flex flex-row items-end justify-end text-black gap-2`}>
                    <Text style={tw `text-[12px] text-right`}>Skip</Text>
                    <Icon name="arrowright" size={12} color="black" />
                </View>
            </Pressable>
        </ScrollView>
    );
};
export default SubscriptionScreen;