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
import {DrawerActions} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { NetworkInfo } from "react-native-network-info";
import DeviceInfo from 'react-native-device-info';

export default function MainTab2(props) {
  const today = new Date();
  const date = today.getDate();
  const month = (today.getMonth() + 1).toLocaleString();
  const day = today.getDay();
  let days = ['일', '월', '화', '수', '목', '금', '토'];
  let ip4="";
  NetworkInfo.getIPV4Address().then(ipv4Address => {
    ip4=ipv4Address;
  });
  let apiaddress ="";
  if (DeviceInfo.isEmulator()){
    apiaddress="http://"+"localhost"+":8080/invitation";
  }
  else{
    apiaddress="http://"+"192.168.12.94"+":8080/invitation";
  }

        
  return (
    <>
      <View style={styles.mainScreen1ContentView}>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>
          확정된 일정 조회
        </Text>
        <View style={{marginTop: 20, height: 550}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
                margin: 20,
              }}>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 17,
                  }}>
                  {days[day + 5]}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 28,
                  }}>
                  {date - 2}
                </Text>
              </View>
              <View
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={1} style={styles.mainCalendar}>
                  <Text style={[styles.mainConfirmedMeetHead]}>
                    MeeyCody Meeting
                  </Text>
                  <Text style={styles.mainConfirmedMeetText}>
                    09:00 A.M. ~ 17:00 P.M. {'\n'}
                    숙명여자대학교 명재관
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
                margin: 20,
              }}>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 17,
                  }}>
                  {days[day - 1]}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 28,
                  }}>
                  {date - 1}
                </Text>
              </View>
              <View
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={1} style={styles.mainCalendar}>
                  <Text style={[styles.mainConfirmedMeetHead]}>
                    MeeyCody Meeting
                  </Text>
                  <Text style={styles.mainConfirmedMeetText}>
                    09:00 A.M. ~ 17:00 P.M. {'\n'}
                    숙명여자대학교 명재관
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
                margin: 20,
              }}>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 17,
                  }}>
                  {days[day]}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 28,
                  }}>
                  {date}
                </Text>
              </View>
              <View
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={1} style={styles.mainCalendar}>
                  <Text style={[styles.mainConfirmedMeetHead]}>
                    MeeyCody Meeting
                  </Text>
                  <Text style={styles.mainConfirmedMeetText}>
                    09:00 A.M. ~ 17:00 P.M. {'\n'}
                    숙명여자대학교 명재관
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
                margin: 20,
              }}>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 17,
                  }}>
                  {days[day + 1]}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 28,
                  }}>
                  {date + 1}
                </Text>
              </View>
              <View
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={1} style={styles.mainCalendar}>
                  <Text style={[styles.mainConfirmedMeetHead]}>
                    MeeyCody Meeting
                  </Text>
                  <Text style={styles.mainConfirmedMeetText}>
                    09:00 A.M. ~ 17:00 P.M. {'\n'}
                    숙명여자대학교 명재관
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
                margin: 20,
              }}>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 17,
                  }}>
                  {days[day + 2]}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 28,
                  }}>
                  {date + 2}
                </Text>
              </View>
              <View
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={1} style={styles.mainCalendar}>
                  <Text style={[styles.mainConfirmedMeetHead]}>
                    MeeyCody Meeting
                  </Text>
                  <Text style={styles.mainConfirmedMeetText}>
                    09:00 A.M. ~ 17:00 P.M. {'\n'}
                    숙명여자대학교 명재관
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
                margin: 20,
              }}>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 17,
                  }}>
                  {days[day + 3]}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingRight: 10,
                    fontSize: 28,
                  }}>
                  {date + 3}
                </Text>
              </View>
              <View
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={1} style={styles.mainCalendar}>
                  <Text style={[styles.mainConfirmedMeetHead]}>
                    MeeyCody Meeting
                  </Text>
                  <Text style={styles.mainConfirmedMeetText}>
                    09:00 A.M. ~ 17:00 P.M. {'\n'}
                    숙명여자대학교 명재관
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
