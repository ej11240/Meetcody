import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppContext from './src/context/AppContext';
import MainSideMenu from './src/screen/mainpage/MainSideMenu';
import SignInScreen from './src/screen/loginpage/SignInScreen';
import SplashScreen from './src/screen/SplashScreen';
import SignUpScreen from './src/screen/loginpage/SignUpScreen';
import ResetPasswordScreen from './src/screen/loginpage/ResetPasswordScreen';
import AxiosTestScreen from './src/screen/loginpage/AxiosTestScreen';
import tempScreen from './src/screen/loginpage/tempScreen';
import CreateMeetScreen from './src/screen/createpage/CreateMeetScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState();
  const [userToken, setUserToken] = useState('유저토큰!!');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userSettings = {
    isLoading: isLoading,
    isLoggedIn: isLoggedIn,
    userToken: userToken,
    setIsLoading,
    setUserToken,
    setIsLoggedIn,
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <RootStack.Navigator mode="card">
          {Object.entries({
            //  평범하게 스크린 사용하기
            ...commonScreens,
            // 조건부 스크린 사용하기
            ...(isLoggedIn ? userScreens : authScreens),
          }).map(([name, component]) => (
            <RootStack.Screen
              name={name}
              component={component}
              options={{headerShown: false}}
            />
          ))}
        </RootStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const commonScreens = {};

const authScreens = {
  SignUp: SignUpScreen,
  ResetPassword: ResetPasswordScreen,
  SignIn: SignInScreen,
  AxiosTest: AxiosTestScreen,
  tempScreen: tempScreen,
};

const userScreens = {
  MainSideMenu: MainSideMenu,
  CreateMeet: CreateMeetScreen,
};

const RootStack = createStackNavigator();
