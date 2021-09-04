import * as React from 'react';
import { useContext,useState} from 'react';
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
  AsyncStorage,
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
import axios from 'axios';
import AppContext from '../../context/AppContext';
import { NetworkInfo } from "react-native-network-info";

//import {CalendarList} from 'react-native-common-date-picker';
// import {Modal} from 'react-native-modals';
// npm install react-native-simple-time-picker --save
// npm install react-native-picker-select
// yarn add react-native-simple-time-picker @react-native-picker/picker

export default function CreateMeetScreen({navigation}) {

  const [meetName, setMeetName] = React.useState("");
  const [emailset, setEmail] = React.useState("");
  const [meetStartDate, setMeetStartDate] = React.useState("");
  const [meetEndDate, setMeetEndDate] = React.useState("");
  const [likeTime, setLikeTime] = React.useState("");
  const [likePlace, setLikePlace] = React.useState("");
  const [validity, setValidity] = React.useState("");
  const [numList, setNumList] = React.useState([]);
  const [nameList, setNameList] = React.useState([]);
  const [userid, setUserid] = React.useState("");
  const myContext = useContext(AppContext);

  const sendMeetCreation = () => {
    AsyncStorage.getItem("email").then((result) => { if (result !== null) { setEmail(result); } });
    AsyncStorage.getItem("selectedFriendsName").then((result) => { if (result !== null) { setNameList( JSON.parse(result)); console.log(result);} });
    AsyncStorage.getItem("selectedFriendsNum").then((result) => { if (result !== null) { setNumList(JSON.parse(result)); } });
    AsyncStorage.getItem("userid").then((result) => { if (result !== null) { setUserid(JSON.parse(result)); console.log("ㅇㅠ저 아디",result);} });
    console.log( numList, nameList, emailset, meetName, meetStartDate,meetEndDate, hours,minutes, likeTime, likePlace, validity);
    // console.log("~~~~~~~~~");
    // axios.post(`http://localhost:8080/testingin`,{
    //   meetInfo:[meetName, meetStartDate,meetEndDate, hours,minutes, likeTime, likePlace, validity],
    //   friendName: nameList,
    //   friendNum: numList,

    // }
    //   , {
    //     headers: {
    //       'Content-Type': 'application/json; charset=UTF-8'
    //     }
    //   }).then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    let ip4="";
    NetworkInfo.getIPV4Address().then(ipv4Address => {
      // console.log(ipv4Address);
      ip4=ipv4Address;
      // alert(ipv4Address);
    });

    axios
      .post(`http://${ip4}:8080/createMeeting`, {
        meetInfo:[meetName, meetStartDate,meetEndDate, hours,minutes, likeTime, likePlace, validity],
        friendName: nameList,
        friendNum: numList,
        email: [emailset],
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
        Alert.alert('약속이 생성되었습니다.');
        AsyncStorage.removeItem("selectedFriendBoolList"); AsyncStorage.removeItem("selectedPressed"); 
        myContext.setIsSignIn(true);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('서버와 통신 실패! 다시 제출해주세요!');
      });

      
  }

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
    // setMeetName(value);
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
            value={meetName}
            onChangeText={text=>{setMeetName(text); }}
          />
        </View>
        <View>
          <Text style={{paddingTop: 20}}>약속 날짜 범위</Text>
          <View style={datestyles.container}>
            <DateRangePicker
              style={{width: 330}}
              initialRange={['2021-08-01', '2021-08-05']}
              onSuccess={(s, e) => {alert(s + ' ~ ' + e); setMeetStartDate(s); setMeetEndDate(e)}}
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
              onValueChange={value => {onChangeText(value); setLikeTime(value); }}
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
              onValueChange={value => {onChangeText(value); setLikePlace(value);}}
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
          <Text style={{paddingTop: 20}}>초대장 유효 기간</Text>

          <View style={{flex: 1, marginBottom: 40}}>
            <RNPickerSelect
              textInputProps={{underlineColorAndroid: 'transparent'}}
              placeholder={{
                label: placeholder,
              }}
              fixAndroidTouchableBug={true}
              value={term}
              onValueChange={value => {onChangeText(value); setValidity(value); }}
              useNativeAndroidPickerStyle={false}
              items={[
                {label: '1시간', value: '11', key: '4'},
                {label: '2시간', value: '12', key: '4'},
                {label: '3시간', value: '13', key: '4'},
                {label: '6시간', value: '14', key: '4'},
                {label: '12시간', value: '15', key: '4'},
                {label: '1일(24시간)', value: '16', key: '5'},
                {label: '2일(48시간)', value: '17', key: '5'},
                {label: '수락 마감 하루 전', value: '18', key: '6'},
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
          onPress={() => { sendMeetCreation();}}>
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
