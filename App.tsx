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
// import UserOnboardingScreen from './src/screens/UserOnboardingScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import OTPScreen from './src/screens/OTPScreen';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <OTPScreen/>
    </SafeAreaView>
  );
}

export default App;
