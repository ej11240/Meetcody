/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import styles from './styles';
import MainTab1 from './MainTab1';

export default function MainScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [stations, setStations] = React.useState(null);
  const [showmessage1, setShowmessage1] = React.useState(true);
  const [currentTab, setCurrentTab]=React.useState(1);

  const showmessageFunc1 = () => {
    setShowmessage1(!showmessage1);
  };

  const imageFraudUrl =
    'https://s3-meetcody.s3.ap-northeast-2.amazonaws.com/fakecreateimage.png';
  const screenWidth = Dimensions.get('window').width;
  const androidBool = Platform.OS === 'android' ? true : false;
  const today = new Date();
  const date = today.getDate().toLocaleString();
  const month = (today.getMonth() + 1).toLocaleString();
  const day = today.getDay();
  let days = ['일', '월', '화', '수', '목', '금', '토'];
  const message1 ='좋은 아침이예요!\n오늘은 '+month+'월 '+date +'일 '+days[day]+'요일 입니다!';
  

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
        title={'Home'}
        titleStyle={{ color: '#000', textAlign: 'center', paddingBottom: 10 }}
        onLeftPress={() => navigation.openDrawer()}
        leftIconContainerStyle={{ marginTop: 22 }}
        rightIconContainerStyle={{ marginTop: 22 }}
        leftIconName={'menu'}
        rightIcons={[
          {
            image: require('../../asset/searchicon.png'),
            onPress: () => console.log('Right Phone !'),
            resizeMode: 'contain',
            width: 5,
          },
        ]}
        rightIconImageStyle={{ tintColor: '#000000', width: 10 }}
        leftIconImageStyle={{ tintColor: '#000000' }}
        disableShadows={true}
      />

      {showmessage1 ? (
        <View style={{ alignContent: 'center', height: 50, marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => showmessageFunc1()}
            style={styles.mainMeesageBox}>
            <Text
              style={{
                textAlignVertical: 'center',
                fontSize: 13,
                color: '#fff',
              }}>
              {message1}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      {currentTab===1?<MainTab1 navigation={navigation}></MainTab1>:<></>}

      <View style={{position:"absolute", bottom:0, height:70, flexDirection:"row", width:"100%", alignContent:"center"}}>
        <TouchableOpacity activeOpacity={1} onPress={()=>setCurrentTab(1)} style={{width:"50%", alignItems:"center",}}>
          <View style={{height:"100%"}}>
          <Image source={require('../../asset/meetcody_logo.png')} style={{width:50, resizeMode:"contain", height:30}} />
          <Text>일정 생성</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={()=>setCurrentTab(2)} style={{width:"50%", alignItems:"center",}}>
          <Text>일정조회</Text>
        </TouchableOpacity>
      
      </View>
    
    </SafeAreaView>
  );
}
