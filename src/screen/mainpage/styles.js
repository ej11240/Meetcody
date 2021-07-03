// @flow
import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const absoluteStretch = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export default StyleSheet.create({
  mainSafeViewArea:{
    flex: 1, 
    alignItems: 'center', 
    paddingTop: Platform.OS === 'android' ? 25 : 0, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  menu: {
    ...absoluteStretch,
  },
  frontView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  overlay: {
    ...absoluteStretch,
    backgroundColor: 'transparent',
  },
  mainScreenHeadline: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  mainScreen1ContentView: {
    height: 150,
    width: screenWidth - 20,
    marginTop: 20
  },
  mainMeesageBox: {
    textAlign: "left",
    justifyContent: "flex-start",
    width: screenWidth - 20,
    backgroundColor: '#C4C4C4',
    height: 50,
    alignContent: "center",
    borderRadius: 7,
    paddingTop: 10,
    paddingLeft: 10,

  },
  mainCustomMeet: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    height: 95,
    marginLeft: 15,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    
  },
  mainCustomMeetText: {
    shadowColor: "#fff",
    lineHeight: 20,
    
  },
  mainNeedConfirmMeetTouch:{
    width:screenWidth-25,
    height:140,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop:10,
    marginTop:10,
  },
  mainNeedConfirmMeetHead:{
    fontSize:16,
    marginLeft:20,
    fontWeight:'bold',
    // alignSelf:'baseline',
    // flex:1,
    width:(screenWidth-45)*0.8
  },
  mainNeedConfirmMeetOwner:{
    fontSize:16,
    textAlign:'center',
    // alignSelf:'flex-end',
    // flex:2,
    width:(screenWidth-45)*0.2,

  },
  mainNeedConfirmMeetText:{
    marginLeft:20,
    fontSize:13,
    marginTop:15,
  },
});

