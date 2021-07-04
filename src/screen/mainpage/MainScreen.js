import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
import axios from 'axios';
import styles from './styles';
import MainTab1 from './MainTab1';
import MainActionBar from './MainActionBar';


export default function MainScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [stations, setStations] = React.useState(null);
  const [showmessage1, setShowmessage1] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState(1);

  const showmessageFunc1 = () => {
    setShowmessage1(!showmessage1);
  };


  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const androidBool = Platform.OS === 'android' ? true : false;
  const bottomBar = Platform.OS === 'android' ? 70 : 10 + 70;
  const bottomBarPadding = Platform.OS === 'android' ? 0 : 20;

  const today = new Date();
  const date = today.getDate().toLocaleString();
  const month = (today.getMonth() + 1).toLocaleString();
  const day = today.getDay();
  let days = ['일', '월', '화', '수', '목', '금', '토'];
  const message1 = '좋은 아침이예요!\n오늘은 ' + month + '월 ' + date + '일 ' + days[day] + '요일 입니다!';

  const iosStatusBarHeight = Platform.OS === 'android' ? 0 : getStatusBarHeight();

  const confirmheight = Platform.OS === 'android' ? screenHeight - StatusBar.currentHeight - 50 - (showmessage1 === true ? 60 : 0) - 170 - 10 - bottomBar : screenHeight - iosStatusBarHeight - 50 - (showmessage1 === true ? 60 : 0) - 170 - 10 - bottomBar;



  return (
    <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'Home'} />


      {showmessage1 ? (
        <View style={{ alignContent: 'center', height: 50, marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => showmessageFunc1()}
            style={styles.mainMeesageBox}>
            <Text style={styles.mainMessageText}>
              {message1}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      {currentTab === 1 ? <MainTab1 navigation={navigation} confirmheight={confirmheight} ></MainTab1> : <></>}

      <View style={[styles.mainTabView, { height: bottomBar }]}>
        <TouchableOpacity activeOpacity={1} onPress={() => setCurrentTab(1)} style={{ width: "50%", justifyContent: 'center', paddingBottom: bottomBarPadding, }}  >
          <View style={[styles.mainTabTwoView, { marginRight: 0, marginLeft: 30 }]}>
            <Image source={require('../../asset/meetcody_logo.png')} style={{ width: 50, resizeMode: "contain", height: 40, }} />
            <Text>일정 생성</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => setCurrentTab(2)} style={{ width: "50%", justifyContent: 'center', paddingBottom: bottomBarPadding }}>
          <View style={styles.mainTabTwoView}>
            <View style={{ width: 60, height: 50, alignSelf: 'center', position: 'absolute' }}>
              <Entypo name="calendar" size={40} style={{ textAlign: 'center' }} />
              <Text style={{ textAlign: 'center' }}>일정조회</Text>
            </View>
            <View style={{ width: 60, marginTop: 20, alignSelf: 'center', justifyContent: 'center' }}>

              <Text style={{ textAlign: 'center' }}>{date}</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}
