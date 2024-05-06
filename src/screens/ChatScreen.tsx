/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, TextInput, FlatList, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Feather from 'react-native-vector-icons/Feather';
import ActiveUser from '../components/ActiveUser';
// import asthetic from '../../assets/asthetic.png';
import male1 from '../assets/one.jpg';
import male2 from '../assets/two.jpg';
import male3 from '../assets/three.jpg';
import male4 from '../assets/four.jpg';
import male5 from '../assets/five.jpg';
import male6 from '../assets/six.jpg';
import tailwind from 'twrnc';
import ConversationUser from '../components/ConversationUser';
import { ScrollView } from 'react-native';

type IActiveUser = {
    name: string;
    image: any;
};

const ChatScreen = () => {
    const user: IActiveUser[] = [
        {
            name: 'Asad',
            image: male1
        },
        {
            name: 'Fahim',
            image: male2
        },
        {
            name: 'Tushar',
            image: male3
        },
        {
            name: 'Khusi',
            image: male5
        },
        {
            name: 'Rafsan',
            image: male4
        },
        {
            name: 'Shanto',
            image: male3
        },
        {
            name: 'Jusef',
            image: male2
        },
        {
            name: 'Rahman',
            image: male6
        },
        {
            name: 'Masum',
            image: male1
        },
    ];

    

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={tailwind `mb-16`}>

                {/* Chatted User Search  */}
                <View style={tw `px-5 pt-5`}>
                    <View 
                        style={tw `
                            w-full  bg-white 
                            rounded-[8px]  h-[42px] 
                            px-3 
                            flex flex-row items-center
                        `}
                    >
                        <Feather style={{marginRight: 5}} name="search" size={18} color="#6C57EC" />
                        <TextInput
                            placeholder="Search..."
                        />
                    </View>
                </View>

                <View style={tailwind `my-6`}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={user}
                        renderItem={({item, index}) => <ActiveUser item={item} length={user?.length} index={index} />}
                        keyExtractor={(item:IActiveUser) => item.name.toString()}
                    />
                </View>

                <View style={tailwind `flex flex-row items-center justify-between px-5 mb-6`}>
                    <Text style={tailwind `bg-[#808080] px-5 py-1 rounded-[3px]`}>Home</Text>
                    <Text style={tailwind `bg-[#808080] px-5 py-1 rounded-[3px]`}>Group</Text>
                </View>

                
                    <View>
                        {
                            user?.map((item, index)=>{
                                return (
                                    <View key={index}>
                                        <ConversationUser item={item}/>
                                    </View>
                                );
                            })
                        }
                        
                    </View>

            </View>
        </ScrollView>
    );
};

export default ChatScreen;