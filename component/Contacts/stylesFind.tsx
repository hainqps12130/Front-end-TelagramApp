import { StyleSheet } from "react-native";
import { scale } from "../../Scale";

const stylesFind = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1
    },
    imgBack: {
        height: scale(25),
        width: scale(35),
        marginTop: scale(3)
    },
    textBack: {
        color: '#0099FF',
        fontSize: scale(18),
        marginTop: scale(3)
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: scale(70)
    },
    imgNear: {
        alignSelf: 'center',
        marginTop: scale(90),
        height: scale(170),
        width: scale(170)
    },
    textPeople: {
        color: 'white',
        alignSelf: 'center',
        fontSize: scale(25),
        fontWeight: 'bold',
        marginTop: scale(25)
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: scale(16),
    },
    textbtnAloow: {
        color: 'white',
        alignSelf: 'center',
        fontSize: scale(19),
        fontWeight: 'bold',
        marginTop: scale(10)
    },
    btnAllow: {
        height: 50,
        width: 300,
        backgroundColor: '#0099FF',
        alignSelf: 'center',
        marginTop: scale(70),
        borderRadius: scale(10)
    }
})

export default stylesFind;