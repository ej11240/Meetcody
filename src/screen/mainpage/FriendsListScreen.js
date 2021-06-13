import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Button, View, Text } from 'react-native';
import   ActionBar  from 'react-native-action-bar';

export default function FriendsListScreen({ navigation }) {
  const myContext = useContext(AppContext);
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <ActionBar
              containerStyle={{height:100,alignSelf: 'center',paddingRight:20, paddingLeft:20}}
              backgroundColor={'#fff'}
              title={'친구 목록 관리'}
              titleStyle={{color:"#000", alignItems:"center", textAlign:"center", marginTop:25}}
              onLeftPress={()=>navigation.openDrawer()}
              leftIconContainerStyle={{marginTop:22}}
              rightIconContainerStyle={{marginTop:22}}
              leftIconName={'menu'}
              rightIconname={'plus'}
              rightIconImageStyle={{tintColor: '#000000'}}
              leftIconImageStyle={{tintColor: '#000000'}}
              
        />
        <Text>친구 목록 관리</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
      </View>
    );
  }
  