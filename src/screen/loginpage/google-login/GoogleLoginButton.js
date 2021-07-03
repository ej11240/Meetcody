import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Button,
    StyleSheet,
} from 'react-native';
import AppContext from '../../../context/AppContext';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';


const GoogleLoginButton = () => {
    const myContext = useContext(AppContext);
    return (
        <View style={{ flex: 3, backgroundColor: 'pink' }}>
            <Button
                onPress={() => signIn()}
                title="구글 아이디로 로그인"
            />
        </View>
    )
}

const getCurrentUserInfo = async () => {
    try {
        const userInfo = await GoogleSignin.signInSilently();
        alert(userInfo.user);
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            console.log('user has not signed yet');
        } else {
            console.log('other error has occured');
        }
    }
};

const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        alert(userInfo.user.email);
    } catch (error) {
        console.log(error);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            alert('statusCodes.SIGN_IN_CANCELLED');
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            alert('error.code === statusCodes.IN_PROGRESS');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            alert('error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE');
        } else {
            // some other error happened
            alert('some other error happened');
        }
    }
};




export default GoogleLoginButton;
