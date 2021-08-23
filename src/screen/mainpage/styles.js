// @flow
import * as React from 'react';
import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;

const absoluteStretch = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};

export default StyleSheet.create({
    mainSafeViewArea: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    menu: {
        ...absoluteStretch,
    },
    frontView: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
    overlay: {
        ...absoluteStretch,
        backgroundColor: 'transparent',
    },
    mainScreenHeadline: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    mainScreen1ContentView: {
        height: 150,
        width: screenWidth - 20,
        marginTop: 20,
    },
    mainMessageBox: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        width: screenWidth - 20,
        backgroundColor: '#C4C4C4',
        height: 50,
        alignContent: 'center',
        borderRadius: 7,
        paddingTop: 10,
        paddingLeft: 10,
        borderColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        elevation: 5,
    },
    mainMessageText: {
        textAlignVertical: 'center',
        fontSize: 13,
        color: '#fff',
    },
    mainCustomMeet: Platform.OS === "android" ? {
        borderWidth: 1,
        borderRadius: 5,
        width: 80,
        height: 95,
        marginLeft: 15,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: '#000000',

        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        elevation: 5,
    } : {
        borderWidth: 1,
        borderRadius: 5,
        width: 80,
        height: 95,
        marginLeft: 15,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

    mainCustomMeetText: {
        shadowColor: '#fff',
        lineHeight: 20,
    },
    mainNeedConfirmMeetTouch: Platform.OS === "android" ? {
        width: screenWidth - 25,
        height: 140,
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 10,
        marginTop: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        elevation: 5,
    } : {
        width: screenWidth - 25,
        height: 140,
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 10,
        marginTop: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },


    mainNeedConfirmMeetHead: {
        fontSize: 16,
        marginLeft: 20,
        fontWeight: 'bold',
        // alignSelf:'baseline',
        // flex:1,
        width: (screenWidth - 45) * 0.8,
    },

    mainConfirmedMeetHead: {
        fontSize: 16,
        marginLeft: 15,
        fontWeight: 'bold',
        width: (screenWidth - 45) * 0.8,
    },
    mainNeedConfirmMeetOwner: {
        fontSize: 16,
        textAlign: 'center',
        // alignSelf:'flex-end',
        // flex:2,
        width: (screenWidth - 45) * 0.2,
    },
    mainNeedConfirmMeetText: {
        marginLeft: 20,
        fontSize: 13,
        marginTop: 15,
    },

    mainConfirmedMeetText: {
        marginLeft: 15,
        fontSize: 14,
        marginTop: 7,
    },
    mainTabView: {
        position: 'absolute',
        bottom: 0,
        height: 70,
        flexDirection: 'row',
        width: '100%',
        alignContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        backgroundColor: '#fff',
    },
    mainTabTwoView: {
        height: 45,
        alignSelf: 'center',
        marginRight: 30,
    },

    mainCalendar: Platform.OS === "android" ? {
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        height: 100,
        marginLeft: 15,
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        elevation: 5,
    }: {        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        height: 100,
        marginLeft: 15,
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
});
