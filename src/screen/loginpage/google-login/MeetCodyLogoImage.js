import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import styles from './google-login-styles';

const MeetCodyLogoImage = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={require('../../../asset/meetcody_logo.png')}
                style={styles.logo}
            />
        </View>
    )
};


export default MeetCodyLogoImage;
