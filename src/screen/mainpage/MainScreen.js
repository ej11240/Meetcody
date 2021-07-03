/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useContext} from 'react';
import AppContext from '../../context/AppContext';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function MainScreen({navigation}) {
  const myContext = useContext(AppContext);
  const [stations, setStations] = React.useState(null);
  const [showmessage1, setShowmessage1] = React.useState(true);
  const [showmessage2, setShowmessage2] = React.useState(true);
  const showmessageFunc1 = () => {
    setShowmessage1(!showmessage1);
  };
  const showmessageFunc2 = () => {
    setShowmessage2(!showmessage2);
  };

  const imageFraudUrl =
    'https://s3-meetcody.s3.ap-northeast-2.amazonaws.com/fakecreateimage.png';
  // const ImageWidth = (imageFraudUrl) => {
  //   const screenWidth = Dimensions.get('window').width;
  //   const scaleFactor = width / screenWidth
  //   const imageHeight = height / scaleFactor
  //   this.setState({ imgWidth: screenWidth, imgHeight: imageHeight })

  // };
  const screenWidth = Dimensions.get('window').width;
  const androidBool = Platform.OS === 'android' ? true : false;
  const today = new Date();
  const date = today.getDate().toLocaleString();
  const month = (today.getMonth() + 1).toLocaleString();
  const day = today.getDay();
  let days = ['일', '월', '화', '수', '목', '금', '토'];
  const message1 =
    '좋은 아침이예요!\n오늘은 ' +
    month +
    '월 ' +
    date +
    '일 ' +
    days[day] +
    '요일 입니다!';

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
        titleStyle={{color: '#000', textAlign: 'center', paddingBottom: 10}}
        onLeftPress={() => navigation.openDrawer()}
        leftIconContainerStyle={{marginTop: 22}}
        rightIconContainerStyle={{marginTop: 22}}
        leftIconName={'menu'}
        rightIcons={[
          {
            image: require('../../asset/searchicon.png'),
            onPress: () => console.log('Right Phone !'),
            resizeMode: 'contain',
            width: 5,
          },
        ]}
        rightIconImageStyle={{tintColor: '#000000', width: 10}}
        leftIconImageStyle={{tintColor: '#000000'}}
        disableShadows={true}
      />

      {showmessage1 ? (
        <View style={{alignContent: 'center', height: 50, marginTop: 10}}>
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

      <View style={styles.mainScreen1ContentView}>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>
          일정 만들기
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateMeet');
            }}
            style={{
              width: 60,
              height: '100%',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={1}>
            <Image
              source={require('../../asset/plusicon.png')}
              style={{height: 60, width: 60, resizeMode: 'contain'}}
            />
          </TouchableOpacity>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={2} style={styles.mainCustomMeet}>
              <Text style={styles.mainCustomMeetText}>
                비즈니스{'\n'}1시간{'\n'}online
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={2} style={styles.mainCustomMeet}>
              <Text style={styles.mainCustomMeetText}>
                친구들과{'\n'}2시간{'\n'}offline
              </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} style={styles.mainCustomMeet}>
              <Text style={styles.mainCustomMeetText}>
                비즈니스{'\n'}1시간{'\n'}online
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={2} style={styles.mainCustomMeet}>
              <Text style={styles.mainCustomMeetText}>
                비즈니스{'\n'}1시간{'\n'}online
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <View>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>
          확정이 필요한 일정
        </Text>
        <ScrollView style={{marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.mainNeedConfirmMeetTouch}>
            <View style={{flexDirection: 'row', height: 18, width: '100%'}}>
              <View>
                <Text style={[styles.mainNeedConfirmMeetHead]}>
                  졸업 프로젝트................
                </Text>
              </View>
              <View>
                <Text style={styles.mainNeedConfirmMeetOwner}>
                  {'<'}방장{'>'}
                </Text>
              </View>
            </View>

            <Text style={styles.mainNeedConfirmMeetText}>
              Business · Online {'\n'}
              2hours{'\n'}
              현재 수락 인원/전체 인원: 4명/5명{'\n'}
              Recommended Date: {'\n'}
              (4/6 12:30 PM) (4/7 1:50 PM) ...
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            style={styles.mainNeedConfirmMeetTouch}>
            <View style={{flexDirection: 'row', height: 18, width: '100%'}}>
              <View>
                <Text style={[styles.mainNeedConfirmMeetHead]}>
                  졸업 프로젝트................
                </Text>
              </View>
              <View>
                <Text style={styles.mainNeedConfirmMeetOwner}>
                  {'<'}방장{'>'}
                </Text>
              </View>
            </View>

            <Text style={styles.mainNeedConfirmMeetText}>
              Business · Online {'\n'}
              2hours{'\n'}
              현재 수락 인원/전체 인원: 4명/5명{'\n'}
              Recommended Date: {'\n'}
              (4/6 12:30 PM) (4/7 1:50 PM) ...
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
