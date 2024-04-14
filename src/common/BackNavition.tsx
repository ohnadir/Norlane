/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */

import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';

const BackNavition = ( {link} : {link: string} ): React.JSX.Element => {
    return (
        <Pressable onPress={() =>console.log(link)}>
            <Icon 
                name="arrowleft" 
                size={24} 
                color="#545454"
            />
        </Pressable>
    );
};

export default BackNavition;