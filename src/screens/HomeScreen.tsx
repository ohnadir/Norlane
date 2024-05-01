/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */


import { View, Text, Pressable, TextInput } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import tw from 'twrnc';
import { Image } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import Banner from '../components/Home/Banner';
import CategorySlider from '../components/Home/CategorySlider';
import EventSlider from '../components/Home/EventSlider';
// import DrawerNavigation from '../navigation/DrawerNavigation';

// const Drawer = createDrawerNavigator();
const HomeScreen = ():React.JSX.Element => {
    
    return (
        <View style={tw `bg-[#FFFFFF] h-[100%] `}>



            {/* <DrawerNavigation/> */}
            {/* header section start*/}
            <View style={tw `flex flex-row items-center justify-between pt-[20px] px-[20px]`}>

                <View style={tw `flex flex-row items-center gap-3`}>
                    <Image
                        style={tw `w-[50px] rounded-[100px] h-[50px] border-[2px] border-[#6C57EC]`}
                        source={{ uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph" }}
                    />
                    <View>
                        <Text style={{fontSize: 14}}>Good Morning</Text>
                        <Text style={{color: "#000834", fontSize: 16}}>Dube Jane</Text>
                    </View>
                </View>


                <View style={tw `flex flex-row items-center gap-3`}>
                    <Pressable>
                        <Feather name="bell" size={24} color="#6C6C6C" />
                    </Pressable>
                    <Pressable>
                        <Feather name="list" size={24} color="#6C6C6C" />
                    </Pressable>
                </View>
            </View>

            {/* filter section */}
            <View style={tw `flex flex-row items-center my-4 gap-3 px-[20px]`}>

                <View style={tw `w-[86%] shadow-2xl shadow-[#6C57EC]/75 bg-white rounded-[100px]  h-[38px] px-3 flex flex-row items-center`}>
                    <Feather name="search" size={18} color="#6C57EC" />
                    <TextInput
                        style={{
                            width: '100%',
                            paddingRight: 12
                        }}
                        placeholder="Search..."
                    />
                </View>

                <Pressable
                    style={{
                        width: "10%"
                    }}
                >
                    <LinearGradient
                        colors={['#9C8EEF', '#6C57EC', '#5443BB']}
                        style={tw ` w-[38px] h-[38px] flex items-center justify-center  rounded-full`}
                    >
                        
                        <Feather name="filter" size={20} color="white" />
                    </LinearGradient>
                </Pressable>
            </View>

            {/* banner section */}
            {/* <Banner/> */}

            {/* category section */}
            <View style={tw `flex flex-row items-center justify-between my-3 px-[20px]`}>
                <Text style={tw `text-[16px] leading-[24px] font-medium text-[#000834]`}>Category</Text>
                <Pressable onPress={()=> console.log("clicked")}>
                    <Text style={tw `text-[14px] leading-[21px] font-normal text-[#8670C6]`}>See All</Text>
                </Pressable>
            </View>
            <CategorySlider/>

            {/* Event section */}
            <View style={tw `flex flex-row items-center justify-between my-3 px-[20px]`}>
                <Text style={tw `text-[16px] leading-[24px] font-medium text-[#000834]`}>Events</Text>
                <Pressable onPress={()=> console.log("clicked")}>
                    <Text style={tw `text-[14px] leading-[21px] font-normal text-[#8670C6]`}>See All</Text>
                </Pressable>
            </View>
            <EventSlider/>
            
        </View>
    );
};

export default HomeScreen;