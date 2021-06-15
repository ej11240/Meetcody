import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionBar from 'react-native-action-bar';
import axios from 'axios';
import { set } from 'lodash';


export default function MainScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [stations,setStations]=React.useState(null);
  

  axios.post('/start_input', {
    "input1": "Sookmyung Women's University",
    "input2": "Chung-Ang University"
  })
    .then(response => { console.log("input success!!!!") })
    .catch(response => { console.log("falied") });

  axios.get('http://localhost:8080/subway')
    .then(response => { 
      // setStations(response.data);
      const station=response.data;
      console.log(station);
    }) // SUCCESS
    .catch(response => { console.log(response); }); // ERROR

    
  return (

    <View style={{ flex: 1, alignItems: 'center' }}>
      <ActionBar
        containerStyle={{ height: 100, alignSelf: 'center', paddingRight: 20, paddingLeft: 20 }}
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
      <View style={{ alignItems:"flex-start"}}>
      <Text style={{ textAlign:"left"}}>좋은 아침이예요!{"\n"}
        오늘은 6월 15일 화요일 입니다!,.


      </Text>
      
      
      </View>
    </View>

  );
}