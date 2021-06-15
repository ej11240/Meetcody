import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import AppContext from '../../context/AppContext';

function SignUpScreen({ navigation }) {
  const myContext = useContext(AppContext);
  
  return (
    <View style={[styles.container, { 
      flexDirection: "column" 
      }]}>
      <MeetCodyLogoImage />
      <GreetingText />
      <GoogleLoginButton />
      <TextInput value={myContext.userToken} />
      <Button onPress={() => navigation.navigate('SignIn')} title="SignIn" />
      <Button onPress={() => navigation.navigate('ResetPassword')} title="ResetPassword" />
      <Button onPress={() => navigation.navigate('AxiosTest')} title="AxiosTest" />
    </View>
  );
}

const MeetCodyLogoImage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red", paddingTop: 100,}}>
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

const LoginWithGoogle = () => {
  alert()
}

const GoogleLoginButton = () => {
  return (
      <View style={{ flex: 3, backgroundColor: 'pink'}}>
        <Button
          onPress = { () => {alert('haha')}}
          title = "구글 아이디로 로그인"
        />
      </View>
  )
};

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
