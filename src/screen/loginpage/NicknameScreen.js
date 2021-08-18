import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import AppContext from '../../context/AppContext';
import SignInHeader from './SignInHeader';
import styles from './SignInStyles';

function NicknameScreen({ navigation }) {
    const myContext = useContext(AppContext);
    const [nickname, setNickname] = useState('');
    const [isValid, setIsValid] = useState(false);
    const handleChange = (inputText) => {
        setNickname(inputText);
    };
    const handleSubmit = () => {
        // TODO("중복 확인 후 저장")
        myContext.setUserInfo({...myContext.userInfo, ...{nickname: nickname}});
        myContext.setIsSignIn(true);
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