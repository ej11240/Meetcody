import React, { useContext, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StatusBar,
    TextInput,
    AsyncStorage
} from 'react-native';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import SignInHeader from './SignInHeader';
import styles from './SignInStyles';
import { NetworkInfo } from "react-native-network-info";

function NicknameScreen({ navigation }) {
    const myContext = useContext(AppContext);
    const [nickname, setNickname] = useState('');
    const [isValid, setIsValid] = useState(false);
    const handleChange = (inputText) => {
        setNickname(inputText);
    };
    const handleSubmit = () => {
        // TODO("중복 확인 후 저장")
        myContext.setUserInfo({ ...myContext.userInfo, ...{ nickname: nickname } });
        postUserData();
        myContext.setIsSignIn(true);
    };

    const postUserData = () => {
        let ip4="";
        NetworkInfo.getIPV4Address().then(ipv4Address => {
            ip4=ipv4Address;
        });
        axios
            .post(`http://${ip4}:8080/signup`, {
                familyName: myContext.userInfo.user.familyName,
                givenName: myContext.userInfo.user.givenName,
                email: myContext.userInfo.user.email,
                phone: myContext.userInfo.phoneNumber,
                username: nickname,
                picture: myContext.userInfo.user.photo
            })
            .then(function (response) {
                // handle success
                alert(JSON.stringify(response.data));
                console.table(JSON.stringify(response.data));
                if(JSON.stringify(response.data)!=null){

                    // AsyncStorage.setItem("operator", "John").then(
                    //     () => AsyncStorage.getItem("operator")
                    //           .then((result)=>console.log(result))
                    //  )
                     AsyncStorage.setItem("email", myContext.userInfo.user.email ).then(
                        () => AsyncStorage.getItem("email")
                        .then((result)=>console.log(result))
                     );
                     AsyncStorage.setItem("userid",JSON.stringify(response.data) ).then(
                        () => AsyncStorage.getItem("userid").then((result)=>{console.log("유저아이디:",result);})
                     );
                     AsyncStorage.setItem("name",nickname ).then(
                        () => AsyncStorage.getItem("name").then((result)=>console.log(result))
                     );
                    
                    // try {
                    //     console.log(value);
                    //     // AsyncStorage.setItem('userinfo', JSON.stringify({'email':myContext.userInfo.user.email, 'name':nickname}), () => {
                    //     //     console.log('유저정보 저장 완료')
                    //     // });
                    //     AsyncStorage.setItem("email", myContext.userInfo.user.email );
                    //     AsyncStorage.setItem("name",nickname );
                        
                    // } catch (e) {
                    //   // saving error
                    // }
                }
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            });
    };


    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <SignInHeader />
                    <View style={styles.body}>
                        <TextInput
                            style={styles.button}
                            placeholder="닉네임 입력하기"
                            onChangeText={handleChange}
                            onSubmitEditing={handleSubmit}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default NicknameScreen;