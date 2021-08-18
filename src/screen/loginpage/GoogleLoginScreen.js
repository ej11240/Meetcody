import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import AppContext from '../../context/AppContext';
import SignInHeader from './SignInHeader';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import GOOGLE_CONFIG from './google-config';
import styles from './SignInStyles';

function GoogleLoginScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const signIn = async () => {
    try {
        GoogleSignin.configure(GOOGLE_CONFIG);
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        myContext.setUserInfo(userInfo);
        navigation.navigate('LoadContact');
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

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <SignInHeader />
          <View style={styles.body}>
            <TouchableOpacity style={styles.button} onPress={signIn}>
              <View style={styles.buttonTextContainer}>
                  <View style={styles.leftContainer}>
                      <Text style={[styles.buttonTextBold, styles.buttonText]}>g+</Text>
                  </View>
                  <View style={styles.rightContainer}>
                      <Text style={styles.buttonText}>구글 계정으로 로그인</Text>
                  </View>
              </View>
           </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => myContext.setIsSignIn(true)} >
              <Text style={styles.buttonText}>바로 메인화면으로 가기</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default GoogleLoginScreen;