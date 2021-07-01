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
    
  }
});

