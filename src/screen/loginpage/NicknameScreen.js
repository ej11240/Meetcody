import React, { useContext, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import SignInHeader from './SignInHeader';
import styles from './SignInStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
        axios
            .post('http://localhost:8080/signup', {
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
                    
                    try {
                        console.log(value);
                        AsyncStorage.setItem('@userinfo_name', nickname);
                        AsyncStorage.setItem('@userinfo_email', JSON.stringify(myContext.userInfo.user.email));
                        
                    } catch (e) {
                      // saving error
                    }
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