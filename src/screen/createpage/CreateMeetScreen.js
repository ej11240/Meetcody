/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {useContext} from 'react';
import {Component, useState, useEffect} from 'react';
import AppContext from '../../context/AppContext';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import MainActionBar from '../mainpage/MainActionBar';
import MultiSelect from 'react-native-multiple-select';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';

//import {CalendarList} from 'react-native-common-date-picker';
// import {Modal} from 'react-native-modals';
// npm install react-native-simple-time-picker --save
// npm install react-native-picker-select

export default function CreateMeetScreen({navigation}) {
  const myContext = useContext(AppContext);
  const [text, setText] = React.useState('');
  const androidBool = Platform.OS === 'android' ? true : false;

  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);

  const like_clock = [
    {
      id: 'dawn',
      item: '새벽',
    },
    {
      id: 'morning',
      item: '아침',
    },
    {
      id: 'noon',
      item: '점심',
    },
    {
      id: 'night',
      item: '저녁',
    },
  ];

  const place_option = [
    {
      item: '장소가 없는 모임이에요',
      id: 'not_place',
    },
    {
      item: '장소를 추천해주세요',
      id: 'recommand_place',
    },
    {
      item: '장소를 직접 입력할래요',
      id: 'my_place',
    },
  ];

  const calendar_permission_term = [
    {
      item: '3시간',
      id: 'time_3',
    },
    {
      item: '1일(24시간)',
      id: 'day_1',
    },
    {
      item: '3일',
      id: 'day_3',
    },
    {
      item: '1주일',
      id: 'week_1',
    },
  ];

  function onMultiChange() {
    return item => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }

  function onChange() {
    return val => setSelectedTeam(val);
  }

  return (
    <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'CreateMeetScreen'} />

      <ScrollView style={styles.contents}>
        <TextInput
          mode="outlined"
          label="약속 이름"
          value={myContext.meeting}
          onChangeText={text => setText(text)}
        />
        <Text style={{paddingTop: 20}}>약속 날짜 범위</Text>
        <Text style={{paddingTop: 20}}>회의 지속 시간</Text>

        <SelectBox
          label="선호 시간대(중복 선택 가능)"
          options={like_clock}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />

        <SelectBox
          label="장소 선택"
          options={place_option}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={false}
        />
        <SelectBox
          label="캘린더 접근 허용 기한 선택"
          options={calendar_permission_term}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={false}
        />
      </ScrollView>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('약속이 생성되었습니다.')}>
          <Text>저장</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
