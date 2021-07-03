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
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import styles from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';

export default function MainTab1(props) {
  const navigation=()=>props.navigation.navigate('CreateMeet');
  
  
  return (
    <>
      <View style={styles.mainScreen1ContentView}>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>
          일정 만들기
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => {
              navigation()
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
              style={{ height: 60, width: 60, resizeMode: 'contain' }}
            />
          </TouchableOpacity>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row' }}>
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

      <View style={{flex:1}}>
        <Text style={styles.mainScreenHeadline} allowFontScaling={false}>
          확정이 필요한 일정
        </Text>
        <View style={{height:props.confirmheight-18}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.mainNeedConfirmMeetTouch}>
            <View style={{ flexDirection: 'row', height: 18, width: '100%' }}>
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
            <View style={{ flexDirection: 'row', height: 18, width: '100%' }}>
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
            <View style={{ flexDirection: 'row', height: 18, width: '100%' }}>
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
            <View style={{ flexDirection: 'row', height: 18, width: '100%' }}>
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
            <View style={{ flexDirection: 'row', height: 18, width: '100%' }}>
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
            <View style={{ flexDirection: 'row', height: 18, width: '100%' }}>
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
  )
}