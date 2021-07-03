import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './google-login-styles';

const GreetingText = () => {
    return (
        <View style={styles.greetingContainer}>
            <Text style={styles.title}>밋코디에 오신 것을</Text>
            <Text style={styles.title}>환영합니다!</Text>
        </View>
    );
}

export default GreetingText;