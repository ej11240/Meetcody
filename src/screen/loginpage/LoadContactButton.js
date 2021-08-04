import React, { useContext, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppContext from '../../context/AppContext';
import styles from './SignInStyles';


function LoadContactButton() {
  const myContext = useContext(AppContext);
  
  const connectContact = () => {
    myContext.setIsContact(true);
  };

  return (
        <TouchableOpacity style={styles.button} onPress={() => connectContact() }>
          <Text style={styles.buttonText}>연락처 연결하기</Text>
        </TouchableOpacity>
  );
}

export default LoadContactButton;