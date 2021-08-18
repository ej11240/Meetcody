import React, { useContext, useEffect, useState } from 'react';
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
import styles from './SignInStyles';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

function LoadContactScreen({ navigation }) {
  const myContext = useContext(AppContext);
  
  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contacts",
        message: "This app would like to view your contacts."
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }}, []);
  
  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        console.log('hah');
        myContext.setUserInfo({...myContext.userInfo, ...{contact: contacts}});
        navigation.navigate('Nickname');
      })
      .catch(e => {
        alert(e);
      });
  
    Contacts.checkPermission();
  }
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <SignInHeader />
          <View style={styles.body}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>연락처 연결하는중...</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default LoadContactScreen;