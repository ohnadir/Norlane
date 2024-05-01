/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import { View, Image, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import Birthday from '../../assets/birthday.png';
import Wedding from '../../assets/wedding.png';
import Baby from '../../assets/baby.png';
import Annual from '../../assets/annual.png';
import Corporate from '../../assets/corporate.png';
import tw from 'twrnc';

type ItemData = {
    id: number;
    image: React.JSX.Element;
    name: string;
};

const EventSlider = () => {

    const data: ItemData[] = [
        {   
            id: 1,
            image: Wedding,
            name: 'Wedding', 

        },
        {
            id: 2,
            image: Birthday,
            name: 'Birthday',
        },
        {
            id: 3,
            image: Baby,
            name: 'Baby Shower',
        },
        {
            id: 4,
            image: Annual,
            name: 'Annual Function',
        },
        {
            id: 5,
            image: Corporate,
            name: 'Corporate Event',
        },
    ];

    const sliderWidth = Dimensions.get('window').width;
    const itemWidth = sliderWidth / 20;

    const Item = ({item, index}: {item: any, index: number}) => {
        return (
            <View 
                key={index} 
                style={{
                    marginRight: index === 4 ? 0 : 12,
                    paddingLeft: index === 0 ? 20 : 0,
                    paddingRight: index === 4 ? 20 : 0,
                }}
            >
                <Image style={tw ` ${`w-[${itemWidth}]`} mx-auto rounded-[16px] h-[80px]`} resizeMode="contain" source={item.image}/>
                <Text style={tw `text-center text-[13px] mx-auto mt-[10px]`}>{item.name}</Text>
            </View>
        );
    };
    
    return (
        <View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={({item, index}: {item : ItemData, index: number}) => <Item item={item} index={index} />}
                keyExtractor={(item: ItemData) => item.id.toString()}
            />
        </View>
    );
};

export default EventSlider;