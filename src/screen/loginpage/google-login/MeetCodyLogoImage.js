import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';


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


const styles = StyleSheet.create({
    logoContainer: { flex: 1, backgroundColor: "red", paddingTop: 100, },
    logo: { width: 200, height: 80 },
});


export default MeetCodyLogoImage;
