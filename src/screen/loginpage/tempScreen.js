import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { View, Text, Alert, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import { set } from 'lodash';
import styles from '../mainpage/styles';
import { TouchableHighlight, } from 'react-native-gesture-handler';

const postDataUsingSimplePostCall = () => {
  axios
    .post('http://localhost:8081/start_input', {
      input1: "Sookmyung Women's University",
      input2: "Chung-Ang University"
    })
    .then(function (response) {
      // handle success

      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      // handle error
      // alert(error.message);
      console.log(error.message)
    });
  // axios.post('/login', { userId : "user.id", userPassword : "user.password" }) .then(function (response) { console.log(response); }) .catch(error => { console.log('error : ',error.response) });
};

// let stations=null;

export default function tempScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [stations, setStations] = React.useState(null);
  const [getapi, setGetapi] =React.useState(false);
  let count1=0;
  let count=0;
  
  React.useEffect(()=>{
    axios.get('http://localhost:8080/subway',{maxRedirects:0})
      .then(response => {
        count1=count1+1;
        setStations(response.data);
        count=count+1;
        console.log(count1+"\n");
        // stations=response.data;
      }) // SUCCESS
      .catch(response => { console.log(response); }); // ERROR
  },[getapi]);

  const [showmessage, setShowmessage] = React.useState(true);
  const showmessageFunc = () => {
    setShowmessage(!showmessage);
    console.log("눌림");
  }
  postDataUsingSimplePostCall();
  // getData();
  console.log(count+"\n");

  const station = JSON.stringify(stations);
  const array = station.split("\"");


  const imageFraudUrl = 'https://s3-meetcody.s3.ap-northeast-2.amazonaws.com/fakecreateimage.png';
  
  const screenWidth = Dimensions.get('window').width;


  const location = [];
  for (let i = 0; i < array.length; i++) {
    if ((i % 2) === 1) {
      if (i === (array.length - 2))
        location.push(array[i] + ' ' + array[i + 1].split('}')[0])
      else
        location.push(array[i] + ' ' + array[i + 1]);
    }
  }

  console.log(location);
  console.log(typeof(location[0]));

  const today = new Date();
  const date = today.getDate().toLocaleString();
  const month = (today.getMonth() + 1).toLocaleString();
  const day = today.getDay();
  let days = ["일", "월", "화", "수", "목", "금", "토"];


  


  return (

    <View style={{ flex: 1, alignItems: 'center' }}>
      <ActionBar
        containerStyle={{ height: 100, alignSelf: 'center', }}
        backgroundColor={'#fff'}
        title={'장소 추천 목록'}
        titleStyle={{ color: "#000", alignItems: "center", textAlign: "center" }}
        onLeftPress={() => navigation.openDrawer()}
        leftIconContainerStyle={{ marginTop: 22 }}
        rightIconContainerStyle={{ marginTop: 22 }}
        leftIconName={'menu'}
        rightIcons={
          [
            {

              image: require('../../asset/searchicon.png'),
              onPress: () => console.log('Right Phone !'),
              badge: '1',
              width: 40
            }
          ]
        }
        rightIconImageStyle={{ tintColor: '#000000', width: 10 }}
        leftIconImageStyle={{ tintColor: '#000000' }}
        disableShadows={true}
      />

      {showmessage ? (<View style={{ alignContent: "center", height: 50 }} >

      </View>) : (<></>)}
      {/* <Text style={{ textAlign: 'left', alignSelf: 'stretch', }}>일정만들기</Text> */}
      <Text>시작 장소: 중앙대학교, 숙명여자대학교{'\n'}</Text>
      <Text>
        {
          location.map((item) => item + '\n\n')}
      </Text>
    </View>
  );
}
//resizeMode: 'contain'