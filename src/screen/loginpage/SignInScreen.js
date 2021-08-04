import React, { useContext, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar
} from 'react-native';
import AppContext from '../../context/AppContext';
import SignInHeader from './SignInHeader';
import GoogleLoginButton from './GoogleLoginButton';
import LoadContactButton from './LoadContactButton';
import styles from './SignInStyles';


function SignInScreen() {
  const myContext = useContext(AppContext);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <SignInHeader />
          <View style={styles.body}>
            <LoadContactButton />
            {/* {myContext.isSignIn 
            ? <LoadContactButton />
            : <GoogleLoginButton />
            } */}
            <TouchableOpacity style={styles.button} onPress={() => myContext.setIsContact(true)} >
              <Text style={styles.buttonText}>메인화면으로 가기</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default SignInScreen;