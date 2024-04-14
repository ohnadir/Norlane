/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
import OnboadingScreen from './src/screens/OnboadingScreen';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <OnboadingScreen/>
    </SafeAreaView>
  );
}

export default App;
