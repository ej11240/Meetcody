import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginLeft: '10%',
        paddingTop: 100, 
    },
    logo: { 
        width: 200, 
        height: 80 
    },
    title: {
        fontSize: 40,
    },
    body: { 
        marginTop: 150,
        alignItems: "center",
    },
    buttonTextContainer: {
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rightContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    button: {
        alignItems: "center",
        borderColor: 'gray',
        backgroundColor: "white",
        padding: 10,
        paddingTop:15,
        paddingBottom:15,
        width: 250,
        borderWidth: 1,
        borderRadius: 100,
        color: "gray",
        fontSize: 15,
    },
    buttonTextBold: {
        fontWeight: 'bold',
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 15,
        color: "gray"
    },
    rootContainer: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    commentArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ababab"
    },
    textInputContainer: {
        marginTop: "auto",
        borderWidth: 1,
        borderColor: "skyblue",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    textInput: {
        width: "100%",
        fontSize: 18,
        borderWidth: 1,
        borderColor: "pink"
    }
});