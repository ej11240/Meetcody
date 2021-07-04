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

//import {CalendarList} from 'react-native-common-date-picker';
// import {Modal} from 'react-native-modals';
// npm install react-native-simple-time-picker --save
// npm install react-native-picker-select

const LikeClock = () => {
  const items = [
    {
      id: 'dawn',
      name: '새벽',
    },
    {
      id: 'morning',
      name: '아침',
    },
    {
      id: 'noon',
      name: '점심',
    },
    {
      id: 'night',
      name: '저녁',
    },
  ];

  // Data Source for the SearchableDropdown
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = selectedItems => {
    // Set Selected Items
    setSelectedItems(selectedItems);
  };

  return (
    <View>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="선호하는 시간대를 선택해주세요."
        searchInputPlaceholderText="선호하는 시간대를 선택해주세요."
        onChangeInput={text => console.log(text)}
        tagRemoveIconColor="#000"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{color: '#CCC'}}
        submitButtonColor="#000"
        submitButtonText="확인"
      />
      {/* <View>{this.multiSelect.getSelectedItemsExt(selectedItems)}</View> */}
    </View>
  );
};

export default function CreateMeetScreen({navigation}) {
  const myContext = useContext(AppContext);
  const [text, setText] = React.useState('');
  const androidBool = Platform.OS === 'android' ? true : false;

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
        <Text>회의 지속 시간</Text>
        <Text>선호 시간대(중복 선택 가능)</Text>
        <LikeClock />

        <Text>장소 선택</Text>
        <Text>캘린더 접근 허용 기한 선택</Text>
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
