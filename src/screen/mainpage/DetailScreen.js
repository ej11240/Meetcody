/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';
import MainActionBar from '../mainpage/MainActionBar';

export default function DetailScreen({navigation}) {
  const androidBool = Platform.OS === 'android' ? true : false;
  return (
    <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'CreateMeetScreen'} />

      <ScrollView style={styles.contents}>
        <Text style={{paddingTop: 20}}>일정 상세 페이지</Text>
      </ScrollView>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('약속이 생성되었습니다.')}>
          <Text>저장</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
