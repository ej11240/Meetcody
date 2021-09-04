import * as React from 'react';
import { useContext, useState } from 'react';
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
  TextInput,
  Modal,
  Pressable,
  AsyncStorage,
} from 'react-native';
import styles from './styles';
import MainActionBar from '../mainpage/MainActionBar';
import RNPickerSelect from 'react-native-picker-select';
import { TimePicker } from 'react-native-simple-time-picker';
import DateRangePicker from './DateRangePicker';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import { NetworkInfo } from "react-native-network-info";
import DeviceInfo from 'react-native-device-info';

export default function CreateMeetScreen({ navigation }) {

  const [meetName, setMeetName] = useState("");
  const [meetStartDate, setMeetStartDate] = useState("");
  const [meetEndDate, setMeetEndDate] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [likeTime, setLikeTime] = useState("");
  const [likePlace, setLikePlace] = useState("");
  const [validity, setValidity] = useState("");

  const [emailSet, setEmail] = useState("");
  const [numList, setNumList] = useState([]);
  const [nameList, setNameList] = useState([]);

  const [userid, setUserid] = React.useState("");
  const myContext = useContext(AppContext);

  const [isHighlighted, setIsHighlighted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const likeTimeList = [
    {
      label: '새벽',
      value: 'dawn',
    },
    {
      label: '아침',
      value: 'morning',
    },
    {
      label: '점심',
      value: 'lunch',
    },
    {
      label: '저녁',
      value: 'evening',
    },
  ];


  const sendMeetCreation = () => {
    AsyncStorage.getItem("email").then((result) => {
      if (result !== null) {
        setEmail(result);
      }
    });
    AsyncStorage.getItem("selectedFriendsName").then((result) => { if (result !== null) { setNameList(JSON.parse(result)); console.log(result); } });
    AsyncStorage.getItem("selectedFriendsNum").then((result) => { if (result !== null) { setNumList(JSON.parse(result)); } });
    AsyncStorage.getItem("userid").then((result) => { if (result !== null) { setUserid(JSON.parse(result)); console.log("유저 아이디", result); } });
    console.log(numList, nameList, emailSet, meetName, meetStartDate, meetEndDate, hours, minutes, likeTime, likePlace, validity);


    let ip4 = "";
    NetworkInfo.getIPV4Address().then(ipv4Address => {
      // console.log(ipv4Address);
      ip4 = ipv4Address;
      // alert(ipv4Address);
    });

    let apiaddress = "";
    if (DeviceInfo.isEmulator()) {
      apiaddress = "http://localhost:8080/v1/invitation/createMeeting";
      console.log(apiaddress);
    }
    else {
      apiaddress = "http://" + "192.168.12.94" + ":8080/v1/invitation/createMeeting";
    }
    axios
      .post(apiaddress, {
        meetInfo: [meetName, meetStartDate, meetEndDate, hours, minutes, likeTime, likePlace, validity],
        friendName: nameList,
        friendNum: numList,
        email: [emailSet],
        userid: [userid]
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
  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    setShowDatePicker(false)
  }

  const onConfirm = (value) => {
    setShowDatePicker(false)
  }

  const onChangeMeetName = value => {
    setMeetName(value);
  }

  const onChangeTime = value => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };

  const onChangeLikeTime = value => {
    setLikeTime(value);
  }

  const onChangeLikePlace = value => {
    setLikePlace(value);
  }

  const onChangeValidity = value => {
    setValidity(value);
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
        {/*1. 약속 이름*/}
        <View>
          <Text>➰ 약속 이름</Text>
          <TextInput
            name="meetName"
            placeholder="약속 이름을 입력해주세요."
            value={meetName}
            style={[styles.textInput, isHighlighted && styles.isHighlighted]}
            returnKeyType="next"
            label="약속 이름"
            onChangeText={onChangeMeetName}
            onFocus={() => setIsHighlighted(true)}
          />
        </View>

        {/*2. 약속 날짜 범위*/}
        <View>
          <Text style={{ paddingTop: 20 }}>➰ 약속 날짜 범위</Text>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>약속 날짜 범위를 선택하세요.</Text>

                  <DateRangePicker
                    style={{ width: 330 }}
                    onSuccess={(s, e) => {
                      setMeetStartDate(s);
                      setMeetEndDate(e);
                    }}
                    theme={{ markColor: '#6799FF', markTextColor: 'white' }}
                  />
                  <View style={styles.dateRangeView}>
                    <Pressable
                      style={[styles.modalButton, styles.modalButtonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.modalTextStyle}>취소</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.modalButton, styles.modalButtonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.modalTextStyle}>확인</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.modalButton, styles.modalButtonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.modalTextStyle}>날짜 범위 설정하러 가기</Text>
            </TouchableOpacity>
            <Text>{setMeetEndDate}</Text>
          </View>


        </View>

        {/*3. 약속 지속 시간*/}
        <View>
          <Text style={{ paddingTop: 20 }}>➰ 약속 지속 시간</Text>
          <TimePicker
            value={{ hours, minutes }}
            onChange={onChangeTime}
            hoursUnit="시간"
            minutesUnit="분"
            minutesInterval={5}
          />
        </View>

        {/*4. 선호 시간대(복수 선택)*/}
        <View>
          <Text style={{ paddingTop: 20 }}>➰ 선호 시간대</Text>
          <View style={{ flex: 1 }}>
            <RNPickerSelect
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              placeholder={{label: '값을 선택해주세요.'}}
              fixAndroidTouchableBug={true}
              value={likeTime}
              onValueChange={(value) => onChangeLikeTime(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                { label: '새벽', value: '7', key: '7' },
                { label: '아침', value: '8', key: '8' },
                { label: '점심', value: '9', key: '9' },
                { label: '저녁', value: '10', key: '10' },
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        {/*5. 장소 추천 여부*/}
        <View>
          <Text style={{ paddingTop: 20 }}>➰ 장소 추천 여부</Text>

          <View style={{ flex: 1 }}>
            <RNPickerSelect
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              placeholder={{label: '값을 선택해주세요.'}}
              fixAndroidTouchableBug={true}
              value={likePlace}
              onValueChange={(value) => onChangeLikePlace(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                { label: '장소가 없는 모임이에요', value: '1', key: '1' },
                { label: '장소를 추천해주세요', value: '2', key: '2' },
                { label: '장소를 직접 입력할래요', value: '3', key: '3' },
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        {/*6. 초대장 유효 기간*/}
        <View>
          <Text style={{ paddingTop: 20 }}>➰ 초대장 유효 기간</Text>

          <View style={{ flex: 1, marginBottom: 40 }}>
            <RNPickerSelect
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              placeholder={{label: '값을 선택해주세요.'}}
              fixAndroidTouchableBug={true}
              value={validity}
              onValueChange={(value) => onChangeValidity(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                { label: '1시간', value: '11', key: '4' },
                { label: '2시간', value: '12', key: '4' },
                { label: '3시간', value: '13', key: '4' },
                { label: '6시간', value: '14', key: '4' },
                { label: '12시간', value: '15', key: '4' },
                { label: '1일(24시간)', value: '16', key: '5' },
                { label: '2일(48시간)', value: '17', key: '5' },
                { label: '수락 마감 하루 전', value: '18', key: '6' },
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixToText}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.bottomButton}
          onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={styles.bottomButton}
          onPress={() => {
            sendMeetCreation();
          }}>
          <Text>저장</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    margin: 1,
    marginTop: 5,
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#000000',
    padding: 10,
    borderColor: '#8C8C8C',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#F6F6F6',
  },
  inputAndroid: {
    flex: 1,
    margin: 1,
    marginBottom: 10,
    marginTop: 5,
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#000000',
    padding: 10,
    borderColor: '#8C8C8C',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#F6F6F6',
  },
});