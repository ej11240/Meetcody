import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import   ActionBar  from 'react-native-action-bar';

export default function MainScreen({ navigation }) {
  const myContext = useContext(AppContext);
    return (
  <SafeAreaView>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ActionBar
        titleContainerStyle={{tintColor:"000000"}}
              containerStyle={{height:50,alignSelf: 'center',paddingRight:20, paddingLeft:20}}
              backgroundColor={'#fff'}
              title={'Home'}
              titleStyle={{color:"#000", alignItems:"center", textAlign:"center"}}
              onLeftPress={()=>navigation.openDrawer()}
              leftIconContainerStyle={{marginTop:22}}
              rightIconContainerStyle={{marginTop:22}}
              leftIconName={'menu'}
              rightIcons={
                [
                  {
                    
                    image: require('../../asset/searchicon.png'),
                    onPress: () => console.log('Right Phone !'),
                    badge:'1',
                    width:40
                  }
                ]
              }
              rightIconImageStyle={{tintColor: '#000000', width:10}}
              leftIconImageStyle={{tintColor: '#000000'}}
              disableShadows={true}
        />
        <Text>Home</Text>
      </View>
      </SafeAreaView>
    );
  }
  