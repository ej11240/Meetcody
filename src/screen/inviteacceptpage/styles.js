import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // marginLeft: '10%',
        paddingTop: 100, 
    },
    topView:{
        alignSelf:"center",
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },
    jusoView:{
        alignSelf:"center",
        alignItems:"flex-start",
        justifyContent:"flex-start",
        
        
        
    },
    logo: { 
        width: 200, 
        height: 80,
        marginLeft:-15,
        marginBottom:10
    },
    title: {
        fontSize: 30,
        marginTop:5,
        fontWeight:"600"
    },

    scheduleInfoText:{
        marginTop:50,
        fontSize:20,
        fontWeight:"200"
    },
    scheduleInfoText2:{
        marginTop:5,
        fontSize:20,
        fontWeight:"200"
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
        marginTop:50
    },
    buttonTextBold: {
        fontWeight: 'bold',
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 15,
        color: "gray"
    },
    button2: {
        alignItems: "center",
        marginTop:12,
        padding: 10,
        paddingTop:2,
        paddingBottom:15,
        width: 250,
        fontSize: 15,
    },
    buttonTextNoBox:{
        marginLeft: 10,
        fontSize: 15,
        color: "gray",
        textDecorationLine:"underline"
    },
    button3: {
        alignItems: "center",
        marginTop:30,
        padding: 10,
        paddingTop:2,
        paddingBottom:15,
        width: 250,
        fontSize: 15,
    },
});