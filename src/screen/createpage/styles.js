import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
    mainSafeViewArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    contents: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        margin: 20,
        padding: 20,
        paddingBottom: 50,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        elevation: 3,
    },

    container: {
        flex: 1,
    },

    isHighlighted: {
        borderColor: '#6799FF'
    },

    // 하단 취소, 저장 버튼 스타일
    bottomButton: {
        alignItems: 'center',
        padding: 10,
        width: '49%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        elevation: 3,
    },

    // 하단 취소, 저장 버튼 위치 고정
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    },

    friendListbackgroundNone: {},
    friendListbackgroundGreen: {
        backgroundColor: '#FF9800'
    },

    // 약속 이름 input 스타일
    textInput:{
        flex: 1,
        margin: 1,
        marginTop: 5,
        fontSize: 16,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#000000',
        padding: 10,
        borderColor: '#8C8C8C',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#F6F6F6',
    },

    // 날짜 범위 뷰
    dateRangeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    },


    rangeText: {
        color: "black",
        textAlign: "center",
        fontSize: 16
    },

    rangeStyle: {
        flex: 1,
        width: '100%',
        margin: 1,
        fontSize: 16,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#000000',
        padding: 10,
        borderColor: '#8C8C8C',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#F6F6F6',
    },



    // 날짜 범위 설정 modal 스타일
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalButton: {
        borderRadius: 10,
        padding: 10,
    },

    modalButtonOpen: {
        backgroundColor: "black",
        alignItems: 'center',
        padding: 10,
        width: '99%',
    },
    modalButtonClose: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "black",
        width: '49%'
    },
    modalTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
    ,


    friendHeadText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#430000'
    }
});