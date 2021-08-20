/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';
import MainActionBar from '../mainpage/MainActionBar';

export default function InviteFriendScreen({navigation}) {
  const androidBool = Platform.OS === 'android' ? true : false;
  const goNext = () => {
    navigation.navigate('CreateMeet');
  };
  return (
    <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'CreateMeetScreen'} />

      <ScrollView style={styles.contents}>
        <Text style={{paddingTop: 20}}>친구 초대</Text>
      </ScrollView>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goNext}>
          <Text>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
