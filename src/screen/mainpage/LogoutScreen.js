import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Button, View, Text, SafeAreaView } from 'react-native';
import   ActionBar  from 'react-native-action-bar';
import styles from './styles';

export default function Logout({ navigation }) {
  const myContext = useContext(AppContext);
  const androidBool = Platform.OS === 'android' ? true : false;
    return (
      <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <ActionBar
        containerStyle={{
          height: 50,
          alignSelf: 'center',
          alignContent: 'center',
        }}
        backgroundColor={'#fff'}
        title={'로그아웃'}
        titleStyle={{ color: '#000', textAlign: 'center', paddingBottom: 10 }}
        onLeftPress={() => navigation.openDrawer()}
        leftIconContainerStyle={{ marginTop: 22 }}
        rightIconContainerStyle={{ marginTop: 22 }}
        leftIconName={'menu'}
        rightIcons={[
          {
            image: require('../../asset/searchicon.png'),
            onPress: () => console.log('돋보기 버튼 !'),
            resizeMode: 'contain',
            width: 5,
          },
        ]}
        rightIconImageStyle={{ tintColor: '#000000', width: 10 }}
        leftIconImageStyle={{ tintColor: '#000000' }}
        disableShadows={true}
      />
        <Text>로그아웃</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
      </SafeAreaView>
    );
  }
  