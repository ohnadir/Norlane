/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Banner1 from '../../assets/Banner1.png';
import Banner2 from '../../assets/Banner2.png';
import Banner3 from '../../assets/Banner3.png';

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const data = [
        {
            image: Banner1,

        },
        {
            image: Banner2,
        },
        {
            image: Banner3,
        },
    ];

    const _renderItem = ({item, index}: {item: any, index: number}) => {
        return (
            <View key={index} >
                <Image source={item.image}/>
            </View>
        );
    };

    const sliderWidth = Dimensions.get('window').width;
    const itemWidth = 330;

    const pagination = ()=> {
        return (
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={{ marginVertical: -20 }}
                dotStyle={{
                    width: 42,
                    height: 9,
                    borderRadius: 10,
                    marginHorizontal: 0,
                    backgroundColor: '#D1CBF9',
                }}
                inactiveDotStyle={{
                    width: 11,
                    height: 11,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: '#D1CBF9',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={1}
            />
        );
    };
    
    return (
        <View>
            <Carousel
                layout={'default'}
                // ref={(c) => { c; }}
                data={data}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                onSnapToItem={(index) => setActiveSlide(index )}
                loop={true}
                autoplay={true}
                autoplayDelay={300}
                autoplayInterval={2000}
            />
            { pagination() }
        </View>
    );
};

export default Banner;