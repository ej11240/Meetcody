import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storageisEmpty = function (value) {
  if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
    return true;
  } else {
    return false;
  }
};

// AsyncStorage get 함수 모듈
export const getItemFromAsync = (storageName) => {
  if (storageisEmpty(storageName)) {
    throw Error('로그인을 해주세요');
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(storageName, (err, result) => {
      if (err) {
        reject(err);
      }

      if (result === null) {
        resolve(null);
      }

      resolve(JSON.parse(result));
    });
  });
};

// AsyncStorage set 함수 모듈
export const setItemToAsync = (storageName, item) => {
  if (storageisEmpty(storageName)) {
    throw Error('로그인을 해주세요');
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
      if (error) {
        reject(error);
      }

      resolve('로그인 성공');
    });
  });
};

