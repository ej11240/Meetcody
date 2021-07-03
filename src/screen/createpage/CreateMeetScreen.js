/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import AppContext from '../../context/AppContext';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import ActionBar from 'react-native-action-bar';
import MultiSelect from 'react-native-multiple-select';
//import {CalendarList} from 'react-native-common-date-picker';
// import {Modal} from 'react-native-modals';
// npm install react-native-simple-time-picker --save
// npm install react-native-picker-select

export default function CreateMeetScreen({navigation}) {
  const myContext = useContext(AppContext);
  const [text, setText] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const androidBool = Platform.OS === 'android' ? true : false;

  return (
    <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <ActionBar
        containerStyle={{height: 50, alignSelf: 'center', paddingRight: 40}}
        backgroundColor={'#fff'}
        title={'약속 생성'}
        titleStyle={{color: '#000', textAlign: 'center'}}
        onLeftPress={() => navigation.navigate('MainScreen')}
        leftIconContainerStyle={{marginTop: 20}}
        leftIconName={'back'}
        leftIconImageStyle={{tintColor: '#000000'}}
      />

      <ScrollView style={styles.contents}>
        <TextInput
          mode="outlined"
          label="약속 이름"
          value={myContext.meeting}
          onChangeText={text => setText(text)}
        />

        <Text style={{paddingTop: 20}}>약속 날짜 범위</Text>

        <Text>회의 지속 시간</Text>

        <Text>선호 시간대(중복 선택 가능)</Text>
        {/* <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={component => {
            this.multiSelect = component;
          }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={text => console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        <View>{this.multiSelect.getSelectedItemsExt(selectedItems)}</View> */}

        <Text>장소 선택</Text>

        <Text>캘린더 접근 허용 기한 선택</Text>
      </ScrollView>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainScreen')}>
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
