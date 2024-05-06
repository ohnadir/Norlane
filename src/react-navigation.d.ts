/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


import * as React from 'react';
import { StackActions, StackNavigationState, StackNavigator } from '@react-navigation/stack';

declare module '@react-navigation/native' {
    export function useNavigation<T>(): StackNavigator<T, StackNavigationState<T>, StackActions<T>>;
}