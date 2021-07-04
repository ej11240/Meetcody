import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Button, View, Text, SafeAreaView } from 'react-native';
import   ActionBar  from 'react-native-action-bar';
import styles from './styles';
import MainActionBar from './MainActionBar';

export default function FriendsListScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const androidBool = Platform.OS === 'android' ? true : false;
    return (
      <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'친구 목록 관리'} />
        <Text>친구 목록 관리</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
      </SafeAreaView>
    );
  }
  