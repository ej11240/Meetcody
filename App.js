import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppContext from './src/context/AppContext';
import MainSideMenu from './src/screen/mainpage/MainSideMenu';
import GoogleLoginScreen from './src/screen/loginpage/GoogleLoginScreen';
import LoadContactScreen from './src/screen/loginpage/LoadContactScreen';
import NicknameScreen from './src/screen/loginpage/NicknameScreen';
import SplashScreen from './src/screen/SplashScreen';
// import AxiosTestScreen from './src/screen/loginpage/AxiosTestScreen';
// import tempScreen from './src/screen/loginpage/tempScreen';
import CreateMeetScreen from './src/screen/createpage/CreateMeetScreen';
import MainScreen from './src/screen/mainpage/MainScreen';
import DetailScreen from './src/screen/mainpage/DetailScreen';
import InviteFriendScreen from './src/screen/createpage/InviteFriendScreen';
import InviteAcceptScreen from './src/screen/inviteacceptpage/InviteAcceptScreen';

export default function App() {
  // 구글 로그인 완료 -> isSignIn = true 
  // -> 연락처 입력 완료 -> isContact = true 
  // -> 메인 화면
  const [isLoading, setIsLoading] = useState();
  const [userInfo, setUserInfo] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const userSettings = {
    isLoading: isLoading,
    userInfo: userInfo,
    isSignIn: isSignIn,
    setIsLoading,
    setUserInfo,
    setIsSignIn,
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
            ...(isSignIn? userScreens : authScreens),
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
  GoogleLogin: GoogleLoginScreen,
  LoadContact: LoadContactScreen,
  Nickname: NicknameScreen,
  // AxiosTest: AxiosTestScreen,
  // tempScreen: tempScreen,
};

const userScreens = {
  MainSideMenu: MainSideMenu,
  CreateMeet: CreateMeetScreen,
  MainScreen: MainScreen,
  DetailScreen: DetailScreen,
  InviteFriend: InviteFriendScreen,
  InviteAcceptScreen: InviteAcceptScreen,
};

const RootStack = createStackNavigator();
