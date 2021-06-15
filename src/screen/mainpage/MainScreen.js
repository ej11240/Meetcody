import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { View, Text, Alert, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import { set } from 'lodash';
import styles from './styles';
import { TouchableHighlight, } from 'react-native-gesture-handler';

const postDataUsingSimplePostCall = () => {
  axios
    .post('start_input', {
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
};


export default function MainScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [stations, setStations] = React.useState(null);
  const [showmessage, setShowmessage] = React.useState(true);
  const showmessageFunc = () => {
    setShowmessage(!showmessage);
    console.log("눌림");
  }
  postDataUsingSimplePostCall();

  const imageFraudUrl = 'https://s3-meetcody.s3.ap-northeast-2.amazonaws.com/fakecreateimage.png';
  // const ImageWidth = (imageFraudUrl) => {
  //   const screenWidth = Dimensions.get('window').width;
  //   const scaleFactor = width / screenWidth
  //   const imageHeight = height / scaleFactor
  //   this.setState({ imgWidth: screenWidth, imgHeight: imageHeight })

  // };
  const screenWidth = Dimensions.get('window').width;


  const today = new Date();
  const date = today.getDate().toLocaleString();
  const month = (today.getMonth() + 1).toLocaleString();
  const day = today.getDay();
  let days = ["일", "월", "화", "수", "목", "금", "토"];



  axios.get('http://localhost:8080/subway')
    .then(response => {
      // setStations(response.data);
      const station = response.data;
      console.log(station);
    }) // SUCCESS
    .catch(response => { console.log(response); }); // ERROR


  return (

    <View style={{ flex: 1, alignItems: 'center' }}>
      <ActionBar
        containerStyle={{ height: 100, alignSelf: 'center', }}
        backgroundColor={'#fff'}
        title={'Home'}
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
        <Text onPress={() => showmessageFunc()} style={{ textAlign: 'left', alignSelf: 'stretch', }}>좋은 아침이예요!{"\n"}
          오늘은 {month}월 {date}일 {days[day]}요일 입니다!
        </Text>
      </View>) : (<></>)}
      {/* <Text style={{ textAlign: 'left', alignSelf: 'stretch', }}>일정만들기</Text> */}

      <View>
        <TouchableOpacity onPress={() => { navigation.navigate('Home'); console.log("이미지눌림") }}>
          <Image source={{ uri: imageFraudUrl }} style={{ height: 170, width: screenWidth }} />
        </TouchableOpacity>
      </View>
      <View >
        {/* <Text style={styles.mainScreenHeadline } allowFontScaling={false}>확정이 필요한 일정</Text> */}
        {/* <Text  >확정이 필요한 일정</Text> */}
        <Image source={require('/Users/eugenehwang/Meetcody/src/asset/maintitle2.png')} style={{ height: 30, width: screenWidth }} />
      </View>
    </View>

  );
}
//resizeMode: 'contain'