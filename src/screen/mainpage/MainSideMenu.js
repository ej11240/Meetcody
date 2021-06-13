import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './MainScreen';
import LogoutScreen from './LogoutScreen';
import FriendsListScreen from './FriendsListScreen';

const Drawer = createDrawerNavigator();

export default function MainSideMenu() {
  const myContext = useContext(AppContext);
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="친구 목록 관리" component={FriendsListScreen} />
        <Drawer.Screen name="로그아웃" component={LogoutScreen}/>
      </Drawer.Navigator>
  );
}