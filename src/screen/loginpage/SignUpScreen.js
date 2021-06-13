import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import AppContext from '../../context/AppContext';
import styles from './styles';

export default function SignUpScreen({ navigation }) {
  const myContext = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <Button onPress={() => navigation.navigate('SignIn')} title="SignIn" />
      <Button onPress={() => navigation.navigate('ResetPassword')} title="ResetPassword" />
    </View>
  );
}
