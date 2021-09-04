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
  AsyncStorage
} from 'react-native';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import styles from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerActions} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { NetworkInfo } from "react-native-network-info";

export default function MainTab1(props) {
  const [userid, setUserid] = React.useState("");
  const navigation = () => props.navigation.navigate('InviteFriend');
  const navigation2 = () => props.navigation.navigate('DetailScreen');
  const [meetList, setMeetList] = React.useState([]);

  

  AsyncStorage.getItem("userid").then((result) => { if (result !== null) { setUserid(JSON.parse(result)); console.log("ㅇㅠ저 아디",result);} });
  React.useEffect(() => {

    let ip4="";
    NetworkInfo.getIPV4Address().then(ipv4Address => {
      // console.log(ipv4Address);
      ip4=ipv4Address;
      // alert(ipv4Address);
    });

    axios
      .post(`http://${ip4}:8080/meetlist`, {
        userid:[userid]
      }
        , {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        }
      )
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // setMeetList.
         
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <>
      <View style={styles.mainScreen1ContentView}>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>
          일정 만들기
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation();
            }}
            style={{
              width: 60,
              height: '100%',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={1}>
            {/* <Image
              source={require('../../asset/plusicon.png')}
              style={{ height: 60, width: 60, resizeMode: 'contain' }}
            /> */}
            <Entypo name="circle-with-plus" size={60} color="#B6B6B6" />
          </TouchableOpacity>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={1} style={styles.mainCustomMeet}>
              <Text style={styles.mainCustomMeetText}>
                비즈니스{'\n'}1시간{'\n'}online
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.mainCustomMeet}>
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

      <View style={{flex: 1}}>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>
          확정이 필요한 일정
        </Text>
        <View style={{height: props.confirmheight - 18}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => {
                navigation2();
              }}
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
      </View>
    </>
  );
}
