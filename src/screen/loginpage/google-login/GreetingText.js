import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


const GreetingText = () => {
    return (
        <View style={{ flex: 3, backgroundColor: "blue" }}>
            <Text style={styles.title}>밋코디에 오신 것을</Text>
            <Text style={styles.title}>환영합니다!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 40,
    }
  });

export default GreetingText;