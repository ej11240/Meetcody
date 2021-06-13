import React, { useContext } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';
import AppContext from '../../context/AppContext';
import styles from './styles';

export default function SignInScreen({ navigation }) {
    const myContext = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button onPress={() => myContext.setIsLoggedIn(true)} title='로그인 하기' />
            <Button onPress={() => navigation.navigate('SignUp')} title="SignUp" />
            <Button onPress={() => navigation.navigate('ResetPassword')} title="ResetPassword" />
        </View>
    );
}