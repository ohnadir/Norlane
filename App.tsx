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
// import OnboadingScreen from './src/screens/OnboadingScreen';
import UserOnboardingScreen from './src/screens/UserOnboardingScreen';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <UserOnboardingScreen/>
    </SafeAreaView>
  );
}

export default App;
