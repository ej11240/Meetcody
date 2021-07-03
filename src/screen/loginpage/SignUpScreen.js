import React, { useContext, useEffect } from 'react';
import {
  Button,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import AppContext from '../../context/AppContext';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import GoogleLoginButton from './google-login/GoogleLoginButton';
import GOOGLE_CONFIG from './google-login/google-config';
import MeetCodyLogoImage from './google-login/MeetCodyLogoImage';
import GreetingText from './google-login/GreetingText';
import styles from './google-login/google-login-styles';


function SignUpScreen({ navigation }) {
  const myContext = useContext(AppContext);

  useEffect(() => {
    console.log('SignUpScreen Initiated')
    GoogleSignin.configure(GOOGLE_CONFIG);
  }, [])

  return (
    <SafeAreaView style={[styles.container, {
      flexDirection: "column"
    }]}>
      <ScrollView>
        <MeetCodyLogoImage />
        <GreetingText />
        <GoogleLoginButton />
        <TextInput value={myContext.userToken} />
        <TouchableOpacity>
          <Button title="SignIn" onPress={() => navigation.navigate('SignIn')} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Button title="ResetPassword" onPress={() => navigation.navigate('ResetPassword')} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Button title="AxiosTest" onPress={() => navigation.navigate('AxiosTest')} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Button title="유저정보 가져오기" onPress={() => getCurrentUserInfo()} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUpScreen;