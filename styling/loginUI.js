import { StyleSheet } from "react-native"

const loginUI = StyleSheet.create({
    loginHeading:{
        backgroundColor: 'black',
        color: 'white',
        padding: 15,
        fontSize: 21,
        textAlign: 'center',
        margin: 3,

    },
    loginTextInput:{
        borderWidth: 1,
        padding: 10,
        margin: 3,
        marginBottom: 5
    },
    loginButton:{
        backgroundColor: 'black',
        padding: 10,
        margin: 6,
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    accountUI:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        margin: 5,
        padding: 10,
        textAlign: 'center'
    }
})
export default loginUI