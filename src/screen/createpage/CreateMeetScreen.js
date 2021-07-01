/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import AppContext from '../../context/AppContext';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import ActionBar from 'react-native-action-bar';
//import {CalendarList} from 'react-native-common-date-picker';
// import {Modal} from 'react-native-modals';
// npm install react-native-simple-time-picker --save
// npm install react-native-picker-select

export default function CreateMeetScreen({navigation}) {
  const myContext = useContext(AppContext);
  const [text, setText] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ActionBar
        containerStyle={{height: 60, alignSelf: 'center', paddingRight: 40}}
        backgroundColor={'#fff'}
        title={'약속 생성'}
        titleStyle={{color: '#000', textAlign: 'center', paddingBottom: 10}}
        //onLeftPress={() => goBack()}
        leftIconContainerStyle={{marginTop: 22}}
        leftIconName={'back'}
        leftIconImageStyle={{tintColor: '#000000'}}
      />

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
