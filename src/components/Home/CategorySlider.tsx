/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */


import { View, Image, FlatList } from 'react-native';
import React from 'react';
import asthetic from '../../assets/asthetic.png';
import cuisine from '../../assets/cuisine.png';
import decoration from '../../assets/decoration.png';
import entertainment from '../../assets/entertainment.png';
import fashon from '../../assets/fashon.png';


type ItemData = {
    id: number;
    image: any;
};

const CategorySlider = () => {
    
    const data: ItemData[] = [
        {
            id: 1,
            image: asthetic,

        },
        {
            id: 2,
            image: cuisine,
        },
        {
            id: 3,
            image: decoration,
        },
        {
            id: 4,
            image: entertainment,
        },
        {
            id: 5,
            image: fashon,
        },
    ];

    const Item = ({title, index}: {title: any, index: number}) => (
        <View
            style={{
                paddingLeft: index === 0 ? 20 : 0,
                paddingRight: index === 4 ? 20 : 0,
            }}
        >
            <Image source={title.image}/>
        </View>
    );

    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={({item, index}) => <Item title={item} index={index} />}
                keyExtractor={(item: ItemData) => item.id.toString()}
            />
        </View>
    );
};

export default CategorySlider;