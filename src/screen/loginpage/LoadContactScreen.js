import React, { useContext, useEffect, useState } from 'react';
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
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoadContactScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (text) => {
    setInputValue(text);
    console.log('changed text: ', inputValue);
  }
  const handleSubmit = () => {
    const regex = /010-(\d{3,4})-(\d{4})/;
    if (inputValue.length === 13 && regex.test(inputValue)) {
      myContext.setUserInfo({ ...myContext.userInfo, ...{ phoneNumber: inputValue } });
      navigation.navigate('Nickname');
    } else {
      alert('전화번호를 정확히 입력해주세요. 010-1234-5678');
    }
  }

  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3'));
    }
    else if (inputValue.length >= 13) {
      setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3'));
    }
  }, [inputValue]);

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
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        myContext.setUserInfo({ ...myContext.userInfo, ...{ contact: contacts } });
        AsyncStorage.setItem("contact", {contacts} ).then(
          () => AsyncStorage.getItem("contact")
          .then((result)=>console.log('load contact',result))
       );
      })
      .catch(e => {
        alert(JSON.stringify(e));
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
            <TextInput
              style={styles.button}
              placeholder="전화번호를 입력하세요"
              onChangeText={handleChange}
              onSubmitEditing={handleSubmit}
              value={inputValue}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default LoadContactScreen;