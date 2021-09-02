import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Postcode from '@actbase/react-daum-postcode';
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO("리덕스로 상태관리")
// TODO("네비게이션 구조 전체적으로 다시 봐야함...")
// TODO("변수명 ㅠ myContext 이렇게 파스칼케이스로 적어주세요 꼭...요청..")
// TODO("이렇게 하는 이유: 초대 화면에서 로그인으로 넘어가는 등 복잡한 로직을 구현하려니까 모듈 트리가 서로 꼬여서 에러가 남")

export default function InviteAcceptScreen({ navigation }) {
    const myContext = useContext(AppContext);

    AsyncStorage.getItem("email")
        .then((result)=>{ 
            if(result!==null){
                // TODO("로그인 여부에 따른 초대장 화면 표시 순서 구현")
                // 서버에 회원 정보 전송
                // if 회원 -> 수락화면
            } else {
                // 회원 아님 -> 구글 로그인, 휴대폰 번호 입력
                myContext.setIsSignIn(false);
            }
        });

    const [invitorName, setInvitorName] = React.useState("유진");
    const [scheduleName, setScheduleName] = React.useState("졸업프로젝트");
    const [scheduleDate, setScheduleDate] = React.useState("2021년 5월 10일");
    const [scheduleDuration, setScheduleDuration] = React.useState("2시간");
    const [schedulePurpose, setSchedulePurpose] = React.useState("비즈니스");
    const [didGetJuso, setGetJuso] = React.useState(false);
    const [isModal, setModal] = React.useState(false);

    const [postcode, setPostcode] = useState(null);
    const [addr, setAddr] = useState('');
    const [extraAddr, setExtraAddr] = useState('');


    const sendStartLoctoServer = () => {
        navigation.goBack();
    }

    

    const test =()=>{
        axios
            .post('http://localhost:8080/calendergettest', {
                // input1: "서울특별시 도봉구 시루봉로 58",
                // input2: "서울특별시 도봉구 시루봉로 58"
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

    }
    return (
        <View style={styles.header}>

            {isModal ?
                (<View style={styles.jusoView} >
                    {/* <Text>자택주소 수정하기</Text> */}
                    <View>
                        
                    </View>
                    <Postcode
                        style={{ width: 400, height: 600 }}
                        jsOptions={{ animated: true }}
                        onSelected={(data) => {
                            setAddr('');
                            setExtraAddr('');
                            setPostcode(data.zonecode);
                            if (data.userSelectedType === 'R') {
                                // 사용자가 도로명 주소를 선택했을 경우
                                setAddr(data.roadAddress);

                                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                                    setExtraAddr(data.bname);
                                    // 건물명이 있고, 공동주택일 경우 추가한다.

                                    if (data.buildingName !== '' && data.apartment === 'Y') {
                                        setExtraAddr((prev) => {
                                            return prev !== '' ? `${prev}, ${data.buildingName}` : `${data.buildingName}`;
                                        });
                                    }
                                    setModal(false);
                                    setGetJuso(true);
                                } else {
                                    setExtraAddr('');
                                }
                            } else {
                                // 사용자가 지번 주소를 선택했을 경우(J)
                                setExtraAddr(data.jibunAddress);

                            }
                        }}
                    />
                    {/* <Text>우편번호:{postcode}</Text>
                    <Text>
                        도로명/지번 :{addr} ({extraAddr})
                    </Text> */}
                </View>)
                :
                (
                    <View style={styles.topView}>

                        <Image
                            source={require('../../asset/meetcody_logo.png')}
                            style={styles.logo}
                        />

                        <Text style={styles.title}>{invitorName}님의 </Text>
                        <Text style={styles.title}>{scheduleName}</Text>
                        <Text style={styles.title}>일정에 초대되셨어요!</Text>

                        <Text style={styles.scheduleInfoText}>기간 : {scheduleDate}</Text>
                        <Text style={styles.scheduleInfoText2}>소요시간 : {scheduleDuration}</Text>
                        <Text style={styles.scheduleInfoText2}>모임목적 : {schedulePurpose}</Text>

                        {didGetJuso ?
                            (
                                <View>
                                    <TouchableOpacity style={styles.button3} disabled={true}>
                                        <Text style={styles.buttonTextNoBox2}>나의 출발 장소</Text>
                                        <Text style={styles.buttonTextNoBox}>{addr}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button2} onPress={() => { setModal(true); }} >
                                        <Text style={styles.buttonTextNoBox}>출발 장소 다시 입력</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={() => { sendStartLoctoServer(); }} >
                                        <Text style={styles.buttonText}>초대 수락하기</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                            :
                            (
                                <View>
                                    <TouchableOpacity style={styles.button} onPress={() => { setModal(true) }} >
                                        <Text style={styles.buttonText}>어디에서 출발하시나요?</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.button2} onPress={() => { navigation.goBack();}} >
                                        <Text style={styles.buttonTextNoBox}>상관없어요!</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button2} onPress={() => { test();}} >
                                        <Text style={styles.buttonTextNoBox}>상관없어요!</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }


                    </View>
                )}
        </View>

    )

}