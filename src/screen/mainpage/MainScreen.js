import * as React from 'react';
import { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Entypo from 'react-native-vector-icons/Entypo';
import Contacts from 'react-native-contacts';

import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native';
import styles from './styles';
import MainTab1 from './MainTab1';
import MainTab2 from './MainTab2';
import MainActionBar from './MainActionBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NetworkInfo } from "react-native-network-info";
import DeviceInfo from 'react-native-device-info';
import PushNotificationIOS from '@react-native-community/push-notification-ios';



export default function MainScreen({ navigation }) {
    const myContext = useContext(AppContext);
    const [showmessage1, setShowmessage1] = React.useState(true);
    const [currentTab, setCurrentTab] = React.useState(1);
    const [emailset, setEmail] = React.useState("");

    let ip4="";
    NetworkInfo.getIPV4Address().then(ipv4Address => {
        ip4=ipv4Address;
    });

    let apiaddress ="";
    if (DeviceInfo.isEmulator()){
      apiaddress="http://"+"localhost"+":8080/invitation";
    }
    else{
      apiaddress="http://"+"192.168.12.94"+":8080/invitation";
    }



    const showmessageFunc1 = () => {
        setShowmessage1(!showmessage1);
    };

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const androidBool = Platform.OS === 'android' ? true : false;
    const bottomBar = Platform.OS === 'android' ? 70 : 10 + 70;
    const bottomBarPadding = Platform.OS === 'android' ? 0 : 20;

    const today = new Date();
    const date = today.getDate().toLocaleString();
    const month = (today.getMonth() + 1).toLocaleString();
    const day = today.getDay();
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    const message1 =
        '좋은 아침이예요!\n오늘은 ' +
        month +
        '월 ' +
        date +
        '일 ' +
        days[day] +
        '요일 입니다!';

    const iosStatusBarHeight =
        Platform.OS === 'android' ? 0 : getStatusBarHeight();

    const confirmheight =
        Platform.OS === 'android'
            ? screenHeight -
            StatusBar.currentHeight -
            50 -
            (showmessage1 === true ? 60 : 0) -
            135 -
            bottomBar
            : screenHeight -
            iosStatusBarHeight -
            50 -
            (showmessage1 === true ? 60 : 0) -
            170 -
            10 -
            bottomBar;

    // 페이지가 로딩되는 때에만 한번 실행
    const [contactList, setContactList] = React.useState([]);
    useEffect(() => {
        setContactList([]);
        Contacts.getAll().then(result => {
            result.map(eachcontact=>{
                eachcontact.phoneNumbers.map(eachPhone=>{
                    setContactList(contactList=>[...contactList, eachPhone.number])
                })
            });
            console.log(contactList);
        });
        // TODO("초대받았으나 응답하지 않은 초대장이 있을 경우, 안녕하세요 ㅇㅇㅇ님 ~년~월~일 ~요일입니다 위치에 같은 스타일로 알림 표시")
    }, []);
   


    AsyncStorage.getItem("name").then((result) => { if(result!==null){setUserName(result);} });
    AsyncStorage.getItem("email").then((result) => { if (result !== null) { setEmail(result);  console.log("main 이메일출력: "+result); } });


    return (
        <SafeAreaView style={styles.mainSafeViewArea}>
            {androidBool === true ? (
                <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
            ) : (
                <></>
            )}
            <MainActionBar navigation={navigation} title={'Home'} />

            {showmessage1 ? (
                <View style={{ alignContent: 'center', height: 50, marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => showmessageFunc1()}
                        style={styles.mainMessageBox}>
                        <Text style={styles.mainMessageText}>{message1}</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <></>
            )}

            {currentTab === 1 ? (
                <MainTab1
                    navigation={navigation}
                    confirmheight={confirmheight}></MainTab1>
            ) : (
                <></>
            )}

            {currentTab === 2 ? (
                <MainTab2
                    navigation={navigation}
                    confirmheight={confirmheight}></MainTab2>
            ) : (
                <></>
            )}

            <View style={[styles.mainTabView, { height: bottomBar }]}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setCurrentTab(1)}
                    style={{
                        width: '50%',
                        justifyContent: 'center',
                        paddingBottom: bottomBarPadding,
                    }}>
                    <View
                        style={[styles.mainTabTwoView, { marginRight: 0, marginLeft: 30 }]}>
                        <Image
                            source={require('../../asset/meetcody_logo.png')}
                            style={{ width: 50, resizeMode: 'contain', height: 40 }}
                        />
                        <Text>일정 생성</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setCurrentTab(2)}
                    style={{
                        width: '50%',
                        justifyContent: 'center',
                        paddingBottom: bottomBarPadding,
                    }}>
                    <View style={styles.mainTabTwoView}>
                        <View
                            style={{
                                width: 60,
                                height: 50,
                                alignSelf: 'center',
                                position: 'absolute',
                            }}>
                            <Entypo name="calendar" size={40} style={{ textAlign: 'center' }} />
                            <Text style={{ textAlign: 'center' }}>일정조회</Text>
                        </View>
                        <View
                            style={{
                                width: 60,
                                marginTop: 20,
                                alignSelf: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{ textAlign: 'center' }}>{date}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
