/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import {
  View,
  Text,
  Alert,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import { set } from 'lodash';
import styles from './styles';
import { TouchableHighlight, } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';


export default function MainScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [stations, setStations] = React.useState(null);
  const [showmessage1, setShowmessage1] = React.useState(true);
  const [showmessage2, setShowmessage2] = React.useState(true);
  const showmessageFunc1 = () => {
    setShowmessage1(!showmessage1);
  }
  const showmessageFunc2 = () => {
    setShowmessage2(!showmessage2);
  }

  const imageFraudUrl =
    'https://s3-meetcody.s3.ap-northeast-2.amazonaws.com/fakecreateimage.png';
  // const ImageWidth = (imageFraudUrl) => {
  //   const screenWidth = Dimensions.get('window').width;
  //   const scaleFactor = width / screenWidth
  //   const imageHeight = height / scaleFactor
  //   this.setState({ imgWidth: screenWidth, imgHeight: imageHeight })

  // };
  const screenWidth = Dimensions.get('window').width;

  const today = new Date();
  const date = today.getDate().toLocaleString();
  const month = (today.getMonth() + 1).toLocaleString();
  const day = today.getDay();
  let days = ["일", "월", "화", "수", "목", "금", "토"];
  const message1 = "좋은 아침이예요!\n오늘은 " + month + "월 " + date + "일 " + days[day] + "요일 입니다!";

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', }}>
      <ActionBar
        containerStyle={{ height: 50, alignSelf: 'center', alignContent: "center", }}
        backgroundColor={'#fff'}
        title={'Home'}
        titleStyle={{ color: "#000", textAlign: "center", paddingBottom: 10 }}
        onLeftPress={() => navigation.openDrawer()}
        leftIconContainerStyle={{ marginTop: 22 }}
        rightIconContainerStyle={{ marginTop: 22 }}
        leftIconName={'menu'}
        rightIcons={[
          {
            image: require('../../asset/searchicon.png'),
            onPress: () => console.log('Right Phone !'),
            badge: '1',
            width: 40,
          },
        ]}
        rightIconImageStyle={{ tintColor: '#000000', width: 10 }}
        leftIconImageStyle={{ tintColor: '#000000' }}
        disableShadows={true}
      />

      {showmessage1 ? (
        <View style={{ alignContent: "center", height: 50 }} >

          <TouchableOpacity onPress={() => showmessageFunc1()} style={styles.mainMeesageBox}>
            <Text style={{ textAlignVertical: "center", height: 50, fontSize: 13, color: '#fff' }}  >{message1}</Text>
          </TouchableOpacity>

        </View>) : (<></>)}


      <View style={styles.mainScreen1ContentView}>

        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>일정 만들기</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateMeet');
            }}
            style={{ width: 50, alignItems:'center', height:50 }}
            activeOpacity={1}
          >
            <Image
              source={require('../../asset/plusicon.png')}
              style={{ height: 60, width: 60, resizeMode: "contain", }}
            />
          </TouchableOpacity>

          <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              activeOpacity={2}
              style={styles.mainCustomMeet}
            >
              <Text style={styles.mainCustomMeetText}>비즈니스{'\n'}1시간{'\n'}online</Text>

            </TouchableOpacity>
            
            <TouchableOpacity
              activeOpacity={1}
              style={styles.mainCustomMeet}
              >
              <Text style={styles.mainCustomMeetText}>비즈니스{'\n'}1시간{'\n'}online</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <View style={styles.mainScreen1ContentView}>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>확정이 필요한 일정</Text>
      </View>

    </SafeAreaView>
  );
}