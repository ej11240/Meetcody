import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import AppContext from '../../context/AppContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const CONFIG = {
  scopes: ['https://www.googleapis.com/auth/calendar',], // what API you want to access on behalf of the user, default is email and profile
  // webClientId: '292029632893-pi6fjmqgrva5fiqcmat2lv22sihdfut6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: 'localhost', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '292029632893-1ihajbgscode415pj6g8d9d2c54n29ar.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
};

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

function SignUpScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const GoogleLoginButton = () => {
    return (
      <View style={{ flex: 3, backgroundColor: 'pink' }}>
        <Button
          onPress={() => signIn()}
          title="구글 아이디로 로그인"
        />
      </View>
    )
  };
  
  useEffect(() => {
    console.log('SignUpScreen Initiated')
    GoogleSignin.configure(CONFIG);
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
          <Button title="SignIn" onPress={() => navigation.navigate('SignIn')}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Button title="ResetPassword" onPress={() => navigation.navigate('ResetPassword')}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Button title="AxiosTest" onPress={() => navigation.navigate('AxiosTest')}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Button title="유저정보 가져오기" onPress={() => getCurrentUserInfo()}/>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const MeetCodyLogoImage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red", paddingTop: 100, }}>
      <Image
        source={require('../../asset/meetcody_logo.png')}
        style={{ width: 200, height: 80 }}
      />
    </View>
  )
};

const GreetingText = () => {
  return (
    <View style={{ flex: 3, backgroundColor: "blue" }}>
      <Text style={styles.title}>밋코디에 오신 것을</Text>
      <Text style={styles.title}>환영합니다!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  }
});

export default SignUpScreen;