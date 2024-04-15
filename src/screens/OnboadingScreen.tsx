/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { View, Text, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Slider from '../assets/slider1.png';
import Slider1 from '../assets/slider2.png';
import tw from 'twrnc';
import CustomButton from '../common/CustomButton';

const OnboadingScreen = (): React.JSX.Element => {
    const [activeSlide, setActiveSlide] = useState(0);

    const data = [
        {
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            image: Slider,

        },
        {
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            image: Slider1,
        },
    ];

    const _renderItem = ({item, index}: {item: any, index: number}) => {
        return (
            <View key={index}>
                <Image style={tw `mx-auto`} source={item.image}/>
                <Text 
                    style={tw `
                        w-[334px] 
                        mx-auto 
                        text-[#919191] 
                        mt-3 
                        text-center 
                        leading-[21px]
                    `}
                >
                    { item.text }
                </Text>
            </View>
        );
    };

    const sliderWidth = Dimensions.get('window').width;
    const itemWidth = Dimensions.get('window').width;

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
        <View style={tw `bg-[#F0EEFD] h-[100%]`}>
            <Text 
                style={tw `
                    text-[#0B002C] 
                    text-[24px] 
                    text-center 
                    mt-[68px] mb-[18px] 
                    font-bold
                `}
            >
                Access Specialized Care
            </Text>
            
            <View>
                <Carousel
                    ref={(c) => { c; }}
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
            <CustomButton
                label="Get Started"
                onPress={()=>console.log('done')}
                colours={['#9C8EEF', '#6C57EC', '#5443BB']}
                customStyle="w-[168px] h-[48px]  mx-auto  mt-3 text-center  rounded-[90px]"
            />
        </View>
    );
};

export default OnboadingScreen;