import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import styles from './SignInStyles';
import DeviceInfo from 'react-native-device-info';


const SignInHeader = () => {
    return (
        <View style={styles.header}>
            <View>
                <Image
                    source={require('../../asset/meetcody_logo.png')}
                    style={styles.logo}
                />
            </View>
            <View>
                <Text style={styles.title}>밋코디에 오신 것을</Text>
                <Text style={styles.title}>환영합니다!</Text>
            </View>
        </View>
    )
};


export default SignInHeader;
