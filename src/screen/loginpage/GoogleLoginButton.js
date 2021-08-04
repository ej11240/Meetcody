import React, { useContext, useEffect, useState } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import AppContext from '../../context/AppContext';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import GOOGLE_CONFIG from './google-config';
import styles from './SignInStyles';

const GoogleLoginButton = () => {
    const myContext = useContext(AppContext);
    
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            myContext.setUserInfo(userInfo);
            myContext.setIsSignIn(true);
            console.log(userInfo);
            console.table(userInfo);
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


    const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setuserInfo([]);
        } catch (error) {
          console.error(error);
        }
      };


    useEffect(() => {
        GoogleSignin.configure(GOOGLE_CONFIG);
      }, []);
    
    return (
        <TouchableOpacity style={styles.button} onPress={() => signIn()}>
            <View style={styles.buttonTextContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[styles.buttonTextBold, styles.buttonText]}>g+</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.buttonText}>구글 계정으로 로그인</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default GoogleLoginButton;
