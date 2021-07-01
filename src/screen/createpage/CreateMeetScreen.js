/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import AppContext from '../../context/AppContext';
import {Button, View, Text, Image, Alert, Modal, Pressable} from 'react-native';
import styles from './styles';
import {Appbar} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {CalendarList} from 'react-native-common-date-picker';
// import {Modal} from 'react-native-modals';
// npm install react-native-simple-time-picker --save
// npm install react-native-picker-select

export default function CreateMeetScreen({navigation}) {
  const myContext = useContext(AppContext);
  const [text, setText] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // const state = {
  //   selectedDate1: '',
  //   selectedDate2: '',

  //   visible0: false,
  // };

  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.BackAction
          icon="menu"
          onPress={() => navigation.navigate('Home')}
        />
        <Appbar.Content titleStyle={{textAlign: 'center'}} title={'일정생성'} />
      </Appbar.Header>

      <View style={styles.contents}>
        <TextInput
          mode="outlined"
          label="약속 이름"
          value={myContext.meeting}
          onChangeText={text => setText(text)}
        />

        <Text style={{paddingTop: 20}}>약속 날짜 범위</Text>

        <Text>회의 지속 시간</Text>

        <Text>선호 시간대(중복 선택 가능)</Text>

        <Text>장소 선택</Text>

        <Text>캘린더 접근 허용 기한 선택</Text>
      </View>
    </View>
  );
}
