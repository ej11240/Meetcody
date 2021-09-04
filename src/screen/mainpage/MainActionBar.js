import * as React from 'react';
import {useContext} from 'react';
import AppContext from '../../context/AppContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
    View,
    Text,
    Alert,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import axios from 'axios';
import styles from './styles';
import MainTab1 from './MainTab1';
import DeviceInfo from 'react-native-device-info';



export default function MainActionBar(props) {

    const navigation = props.navigation;
    const screenWidth = Dimensions.get('window').width;
    const title = props.title === 'CreateMeetScreen' ? '일정 생성' :  props.title === 'DetailScreen' ? '일정 상세' : props.title;
    const leftmenu = props.title === 'CreateMeetScreen' ?
        <TouchableOpacity style={{height: 50,}} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} style={{paddingTop: 10, paddingLeft: 30}}/>
        </TouchableOpacity>
        : props.title === 'DetailScreen' ?
            <TouchableOpacity style={{height: 50,}} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={30} style={{paddingTop: 10, paddingLeft: 30}}/>
            </TouchableOpacity>
            :

            <TouchableOpacity style={{height: 50,}} onPress={() => {props.navigation.openDrawer();}}>
                <Ionicons name="menu-sharp" size={30} style={{paddingTop: 10, paddingLeft: 30}}/>
            </TouchableOpacity>;

    return (
        <>
            <View style={{width: screenWidth, height: 50, flexDirection: 'row',}}>
                <View style={{width: "20%", height: 50}}>
                    {leftmenu}
                </View>
                <View style={{width: "60%", justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{height: 50, justifyContent: 'center'}}>
                        <Image source={require('../../asset/meetcody_logo.png')}
                               style={{height: 30, width: 55, resizeMode: 'contain'}}/>
                    </View>
                    <View style={{height: 50, justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center', fontSize: 16}}>{title}</Text>
                    </View>
                </View>
                <View style={{width: "20%", height: 50}}>
                    {props.title === 'CreateMeetScreen' ?
                        <></> : props.title === 'DetailScreen' ?
                            <></>:
                        <TouchableOpacity style={{height: 50}}>
                            <Entypo name="magnifying-glass" size={30}
                                    style={{paddingTop: 10, textAlign: 'right', paddingRight: 30}}/>
                        </TouchableOpacity>
                    }

                </View>
            </View>
        </>
    )
}