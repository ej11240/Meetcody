/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  Alert,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Button,
} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import MainActionBar from '../mainpage/MainActionBar';

// import MultiSelect from 'react-native-multiple-select';
// import {xorBy} from 'lodash';

import RNPickerSelect from 'react-native-picker-select';
import {TimePicker} from 'react-native-simple-time-picker';
import DatePicker from 'react-native-date-ranges';
import DateRangePicker from './DateRangePicker';
import {black} from 'react-native-paper/lib/typescript/styles/colors';

//import {CalendarList} from 'react-native-common-date-picker';
// import {Modal} from 'react-native-modals';
// npm install react-native-simple-time-picker --save
// npm install react-native-picker-select
// yarn add react-native-simple-time-picker @react-native-picker/picker

export default function CreateMeetScreen({navigation}) {
  const androidBool = Platform.OS === 'android' ? true : false;
  const placeholder = '값을 입력해주세요.';
  const [inputs, setInputs] = useState({
    name: '',
    datepick: '',
    like: '',
    place: '',
    term: '',
  });

  const {name, datepick, like, place, term} = inputs;

  const onChangeText = value => {
    setInputs(value);
  };

  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const handleChange = value => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };

  return (
    <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}

      <MainActionBar navigation={navigation} title={'CreateMeetScreen'} />

      <ScrollView style={styles.contents}>
        <View>
          <TextInput
            name="name"
            style={{fontSize: 18, flex: 1}}
            mode="outlined"
            label="약속 이름"
            value={name}
            onChangeText={onChangeText}
          />
        </View>
        <View>
          <Text style={{paddingTop: 20}}>약속 날짜 범위</Text>
          {/* <DatePicker
          style={{width: 310, height: 40, margin: 10}}
          customStyles={{
            placeholderText: {fontSize: 20}, // placeHolder style
            headerStyle: {}, // title container style
            headerMarkTitle: {}, // title mark style
            headerDateTitle: {}, // title Date style
            contentInput: {}, //content text container style
            contentText: {}, //after selected text Style
          }} // optional
          centerAlign // optional text will align center or not
          allowFontScaling={false} // optional
          placeholder={'Jul 27, 2021 → Jul 29, 2021'}
          mode={'range'}
        /> */}

          <View style={datestyles.container}>
            <DateRangePicker
              style={{width: 330}}
              initialRange={['2021-08-01', '2021-08-05']}
              onSuccess={(s, e) => alert(s + ' ~ ' + e)}
              theme={{markColor: '#6799FF', markTextColor: 'white'}}
            />
          </View>
        </View>
        <View>
          <Text style={{paddingTop: 20}}>약속 지속 시간</Text>
          <TimePicker
            value={{hours, minutes}}
            onChange={handleChange}
            hoursUnit="시간"
            minutesUnit="분"
            minutesInterval={5}
          />
        </View>
        <View>
          <Text style={{paddingTop: 20}}>선호 시간대</Text>
          <View style={{flex: 1}}>
            <RNPickerSelect
              textInputProps={{underlineColorAndroid: 'transparent'}}
              placeholder={{
                label: placeholder,
              }}
              fixAndroidTouchableBug={true}
              value={like}
              onValueChange={value => onChangeText(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                {label: '새벽', value: '7', key: '7'},
                {label: '아침', value: '8', key: '8'},
                {label: '점심', value: '9', key: '9'},
                {label: '저녁', value: '10', key: '10'},
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        <View>
          <Text style={{paddingTop: 20}}>장소 선택</Text>

          <View style={{flex: 1}}>
            <RNPickerSelect
              textInputProps={{underlineColorAndroid: 'transparent'}}
              placeholder={{
                label: placeholder,
              }}
              fixAndroidTouchableBug={true}
              value={place}
              onValueChange={value => onChangeText(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                {label: '장소가 없는 모임이에요', value: '1', key: '1'},
                {label: '장소를 추천해주세요', value: '2', key: '2'},
                {label: '장소를 직접 입력할래요', value: '3', key: '3'},
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        <View>
          <Text style={{paddingTop: 20}}>캘린더 접근 허용 기한 선택</Text>

          <View style={{flex: 1, marginBottom: 40}}>
            <RNPickerSelect
              textInputProps={{underlineColorAndroid: 'transparent'}}
              placeholder={{
                label: placeholder,
              }}
              fixAndroidTouchableBug={true}
              value={term}
              onValueChange={value => onChangeText(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                {label: '3시간', value: '4', key: '4'},
                {label: '1일(24시간)', value: '5', key: '5'},
                {label: '수락 마감 하루 전', value: '6', key: '6'},
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>
        {/* <SelectBox
          label="선호 시간대(중복 선택 가능)"
          options={like_clock}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
          toggleIconColor="black"
          searchIconColor="black"
          arrowIconColor="black"
        /> */}
      </ScrollView>
      <View style={styles.fixToText}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => Alert.alert('약속이 생성되었습니다.')}>
          <Text>저장</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    flex: 1,
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  inputAndroid: {
    flex: 1,
    margin: 1,
    marginBottom: 10,
    marginTop: 5,
    fontSize: 17,
    color: '#000000',
    padding: 10,
    borderColor: '#8C8C8C',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F6F6F6',
  },
});

const datestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
