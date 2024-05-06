/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';

function App(): React.JSX.Element {

  return (
    <>
      <StackNavigator/>
    </>
  );
}

export default App;
