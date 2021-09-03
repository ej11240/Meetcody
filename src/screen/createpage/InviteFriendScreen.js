/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  FlatList,
  RefreshControl
} from 'react-native';
import styles from './styles';
import MainActionBar from '../mainpage/MainActionBar';
import { ListItem, Avatar } from 'react-native-elements';
import Contacts from 'react-native-contacts';
import AppContext from '../../context/AppContext';

function useForceUpdate(){
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

export default function InviteFriendScreen( { navigation}) {
  const androidBool = Platform.OS === 'android' ? true : false;
  const [contactList, setContactList] = React.useState([]);
  const [contactNAMEList, setContactNAMEList] = React.useState([]);
  const [emailset, setEmail] = React.useState("");
  const [DATA, setDATA] = React.useState([]);
  const [isPress, setIsPress] = React.useState([]);
  const [selectedFriend, setSelectedFriend] = React.useState([]);
  const [extractedFriend, setExtractedFriend] = React.useState([]);
  const myContext = useContext(AppContext);


  const forceUpdate = useForceUpdate();
  
  AsyncStorage.getItem("selectedFriendList")
    .then((result) => {
      if (result !== null) {
        console.log(result);
        var isempty = JSON.parse(result);
        if(isempty.length()!==0){
          setSelectedFriend(isempty);
        }
      }
      else {
        // setSelectedFriend([]);
      }
    });
  AsyncStorage.getItem("selectedPressed")
    .then((result) => {
      if (result !== null) {
        console.log(result);
        var isempty = JSON.parse(result);
        if(isempty.length()!==0){
          setIsPress(JSON.parse(result));
        }
      }
      else {
      }
    });
  

  const getContacts =()=>{
    setContactList([]);
    setContactNAMEList([]);
    setDATA([]);
    setSelectedFriend([]);
    setIsPress([]);
    

    Contacts.getAll().then(result => {
      result.map(eachcontact => {
        eachcontact.phoneNumbers.map(eachPhone => {
          setContactNAMEList(contactNAMEList => [...contactNAMEList, eachcontact.familyName + " " + eachcontact.givenName]);
          setContactList(contactList => [...contactList, eachPhone.number]);
        });

      });
    });
    console.log(contactList);
    console.log(contactNAMEList);

    
    AsyncStorage.getItem("email").then((result) => { if (result !== null) { setEmail(result); } });
    console.log("here!" + emailset);
    // axios
    //       .post(`http://localhost:8080/user_contacts/${emailset}`, {
    //         list: contactList,
    //       }
    //       , {
    //         headers: {
    //             'Content-Type': 'application/json; charset=UTF-8'
    //         }
    //       }
    //       )
    //       .then(function (response) {
    //         console.log(JSON.stringify(response.data))

    //       })
    //       .catch(function (error) {
    //         console.log(error)
    //       });
    contactNAMEList.map((name, index) => {
      setDATA(DATA => [...DATA, { name: name, number: contactList[index] }]);
      console.log(index);
      setIsPress(isPress => [...isPress, false]);
      console.log(isPress);
      if (index == (contactNAMEList.length - 1)) {
        console.log(DATA);
      }
    });
  };


  React.useEffect(() => {
    getContacts();
    // // if(contactList.length==0){
    // //   getContacts();
    // //   if(contactList.length==0){
    // //     getContacts();
    // //     getContacts();
    // //   }
    // // }
    // getContacts();
    // getContacts();
    // forceUpdate;
  }, []);
  // getContacts();
  

  const renderItem = ({ item }) => (
    <ListItem bottomDivider >
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.number}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  const goNext = () => {
    AsyncStorage.setItem("selectedFriendList", JSON.stringify(selectedFriend) ).then(
      () => AsyncStorage.getItem("selectedFriendList")
      .then((result)=>console.log(result))
    );
    AsyncStorage.setItem("selectedPressed", JSON.stringify(isPress) ).then(
      () => AsyncStorage.getItem("selectedPressed")
      .then((result)=>console.log(result))
    );

    var names=[];
    var nums=[];
    isPress.map((isSelected,index)=>{
      if(isSelected){
        names.push(contactNAMEList[index]);
        nums.push(contactList[index]);
      }
    });

    console.log("asdf", names, nums);
    AsyncStorage.removeItem("selectedFriendsName"); AsyncStorage.removeItem("selectedFriendsNum");
    AsyncStorage.setItem("selectedFriendsName", JSON.stringify(names) ).then(
      () => AsyncStorage.getItem("selectedFriendsName")
      .then((result)=>console.log(result))
    );
    AsyncStorage.setItem("selectedFriendsNum", JSON.stringify(nums) ).then(
      () => AsyncStorage.getItem("selectedFriendsNum")
      .then((result)=>console.log(result))
    );


    navigation.navigate('CreateMeet');

  };

  
  const selectFriend = (index) => {
    if (selectedFriend.indexOf(index) < 0) {
      setSelectedFriend(selectedFriend => [...selectedFriend, index]);
      console.log(selectedFriend);

      setIsPress(isPress.slice(0,index).concat([true].concat(isPress.slice(index+1))));
      console.log(isPress)

    }
    else {
      setSelectedFriend(selectedFriend.filter(friend => friend !== index));
      console.log(selectedFriend);

      setIsPress(isPress.slice(0,index).concat([false].concat(isPress.slice(index+1))));
    }

  }

  return (
    <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'CreateMeetScreen'} />

      <ScrollView style={styles.contents}>
        <Text style={{ paddingTop: 20 }}>친구 초대</Text>
        {DATA.map((item, index) => {
          return (
            <ListItem bottomDivider onPress={() => { selectFriend(index); }} >
              {isPress[index]? <Avatar source={{uri: "https://cdn3.vectorstock.com/i/1000x1000/09/82/check-icon-vector-10850982.jpg"}} />: <></>}
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.number}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          )
        })}
      </ScrollView>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.goBack(); AsyncStorage.removeItem("selectedFriendList"); AsyncStorage.removeItem("selectedPressed"); }}>
          <Text>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goNext}>
          <Text>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
