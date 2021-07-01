import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { View, Text, Alert, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import { Button } from 'react-native-elements';




export default function tempScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [stations, setStations] = React.useState(null);
  

  const getStations=()=>{
    axios.get('http://localhost:8080/subway', { maxRedirects: 0 })
      .then(response => {
        setStations(response.data);
        console.log("success");
      }) // SUCCESS
      .catch(response => { console.log(response); }); // ERROR
  };

  
  const postDataUsingSimplePostCall = () => {
    axios
      .post('http://localhost:8080/input', {
        input1: "서울특별시 도봉구 시루봉로 58",
        input2: "서울특별시 용산구 청파로47길 100"
      }
      , {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
      }
      )
      .then(function (response) {
  
        console.log(JSON.stringify(response.data))
        getStations();
      })
      .catch(function (error) {
  
        console.log(error)
      });
  };
  

  const [showmessage, setShowmessage] = React.useState(true);
  
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
      <Button onPress={()=>postDataUsingSimplePostCall()} title="중간지점에서 가까운 역 표시하기"></Button>
    </View>
  );
}