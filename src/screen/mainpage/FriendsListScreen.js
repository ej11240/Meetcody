import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Button, View, Text, SafeAreaView, AsyncStorage, FlatList  } from 'react-native';
import ActionBar from 'react-native-action-bar';
import styles from './styles';
import MainActionBar from './MainActionBar';
import Contacts from 'react-native-contacts';
import axios from 'axios';
import { useSafeArea } from 'react-native-safe-area-context';
import { ListItem, Avatar } from 'react-native-elements'
import Friendstyle from './Friendstyle';
import { NetworkInfo } from "react-native-network-info";
import DeviceInfo from 'react-native-device-info';


export default function FriendsListScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const androidBool = Platform.OS === 'android' ? true : false;

  const [contactList, setContactList] = React.useState([]);
  const [contactNAMEList, setContactNAMEList] = React.useState([]);
  const [emailset, setEmail] = React.useState("");
  const [DATA , setDATA] = React.useState([]);

  const [extractedFriend, setExtractedFriend] = React.useState([]);

  let changefinish="false";


  React.useEffect(() => {
    setContactList([]);
    setContactNAMEList([]);
    setDATA([]);

    Contacts.getAll().then(result => {
      result.map(eachcontact => {        
        eachcontact.phoneNumbers.map(eachPhone => {
          // console.log(eachPhone);
          setContactNAMEList(contactNAMEList => [...contactNAMEList, eachcontact.familyName + " " + eachcontact.givenName]);
          setContactList(contactList => [...contactList, eachPhone.number]);
        });
        
      });
    });
    console.log(contactList);
    console.log(contactNAMEList);

    let ip4="";
    NetworkInfo.getIPV4Address().then(ipv4Address => {
      ip4=ipv4Address;
    });
    
    AsyncStorage.getItem("email").then((result) => { if (result !== null) { setEmail(result); } });

    let apiaddress ="";
    if (DeviceInfo.isEmulator()){
      apiaddress="http://"+"localhost"+":8080/user_contacts/"+emailset;
    }
    else{
      apiaddress="http://"+"192.168.12.94"+":8080/user_contacts/"+emailset;
    }
    
    
    console.log("here!" + emailset);
    // axios
    //       .post(apiaddress, {
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
    contactNAMEList.map((name, index)=>{
      setDATA(DATA=>[...DATA, {name:name, number: contactList[index]}]);
      console.log(index);
      if(index==(contactNAMEList.length-1)){
        console.log(DATA);
      }
    });
    
  }, []);
  

  const renderItem  = ({ item }) =>(  
        <ListItem bottomDivider >
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.number}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
  );

  


  return (
    <SafeAreaView style={styles.mainSafeViewArea}>
      {androidBool === true ? (
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      ) : (
        <></>
      )}
      <MainActionBar navigation={navigation} title={'친구 목록 관리'} />
      <Text>친구 목록 관리</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go back home"
      />

      
      <FlatList
      style={Friendstyle.friendlistWidth}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
    </SafeAreaView>
  );
}