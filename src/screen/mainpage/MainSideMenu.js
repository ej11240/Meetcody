import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import   ActionBar  from 'react-native-action-bar';
// import { Badge } from 'react-native-paper';
import { Badge, Icon, withBadge }  from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
// import TabNavigator from 'react-native-tab-navigator';

const BadgedIcon = withBadge(1)(Icon);

function HomeScreen({ navigation }) {
  //     const [sidebar, setSidebar] = React.useState(false);
//     const showSidebar = () => { setSidebar(!sidebar) ; console.log(sidebar);};
//     const [onMenuItemSelected, setOnMenuItemSelected]=React.useState([setSidebar,'About']);
//     const menu = <Menu onItemSelected={onMenuItemSelected} />;
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

function Logout({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ActionBar
            containerStyle={{height:100,alignSelf: 'center',paddingRight:20, paddingLeft:20}}
            backgroundColor={'#fff'}
            title={'로그아웃'}
            titleStyle={{color:"#000", alignItems:"center", textAlign:"center"}}
            onLeftPress={()=>navigation.openDrawer()}
            leftIconContainerStyle={{marginTop:22}}
            rightIconContainerStyle={{marginTop:22}}
            leftIconName={'menu'}
            rightIconname={'plus'}
            rightIconImageStyle={{tintColor: '#000000'}}
            leftIconImageStyle={{tintColor: '#000000'}}
      />
      <Text>로그아웃</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
    </View>
  );
}


function friend_list_setting({ navigation }) {
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

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function MainSideMenu() {
  
  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="친구 목록 관리" component={friend_list_setting} />
        <Drawer.Screen name="로그아웃" component={Logout}/>
      </Drawer.Navigator>
    </>
  );
}