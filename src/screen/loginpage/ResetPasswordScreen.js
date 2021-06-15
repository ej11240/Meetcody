import React, { useContext } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import AppContext from '../../context/AppContext';
import styles from './styles';

export default function ResetPasswordScreen({ navigation }) {
    const myContext = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Text>ResetPassword</Text>
            <Button onPress={() => navigation.navigate('SignUp')} title="SignUp" />
            <Button onPress={() => navigation.navigate('SignIn')} title="SignIn" />
            <Button onPress={() => navigation.navigate('AxiosTest')} title="AxiosTest" />
        </View>
    );
}
