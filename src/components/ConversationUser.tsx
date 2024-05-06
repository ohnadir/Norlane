/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import { useNavigation } from '@react-navigation/native';

interface IConversationUser{
    item:{
        name: string;
        image: any;
    }
}

const ConversationUser = ({ item }: IConversationUser): React.JSX.Element  => {
    const navigation = useNavigation();

    const handleNavigate = ()=>{
        navigation.navigate('Message', item);
    };
    return (
        <Pressable onPress={handleNavigate}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                    paddingHorizontal: 20,
                    marginBottom: 16,
                }}
            >
                <View style={tailwind `relative`}>
                    <Image 
                        style={tailwind  `w-16 h-16 rounded-10`}
                        source={item.image}
                    />
                    <View style={tailwind `w-4 h-4 bg-white flex items-center justify-center absolute top-1/2 -right-[6px] rounded-full`}> 
                        <View style={tailwind `w-3 h-3 bg-green-500  rounded-full`} />
                    </View>
                </View>
                
                <View>
                    <Text>{item.name}</Text>
                    <Text>{'last Message'}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default ConversationUser;