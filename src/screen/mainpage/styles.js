// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';

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
  mainScreenHeadline:{
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:10
  }
});

