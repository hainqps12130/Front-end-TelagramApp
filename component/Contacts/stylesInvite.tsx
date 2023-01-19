import { StyleSheet } from "react-native";
import { scale } from "../../Scale";

const stylesInvite = StyleSheet.create({
    ModalContainer: {
        backgroundColor: "#000000",
        borderRadius: 20,
        shadowColor: "#000",
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    textModalClose: {
        color: '#0099FF',
        fontSize: scale(18),
        marginTop: scale(15),
        marginLeft: scale(15)
    },
    textTitle: {
        color: 'white',
        fontSize: scale(20),
        marginTop: scale(10),
        marginLeft: scale(88),
        fontWeight: 'bold',
        
    },
    textSelect: {
        color: '#0099FF',
        fontSize: scale(18),
        marginTop: scale(10),
        marginLeft: scale(55),
       
    },
    textInput: {
        height: scale(45),
        width: scale(350),
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#333333',
        marginTop: 20,
        color: 'white'
    },
    imgTym: {
        height: scale(40),
        width: scale(40),
        marginLeft: scale(25),
        marginTop: scale(20)
    },
    textTym: {
        color: '#0099FF',
        fontSize: scale(18),
        marginTop: scale(25),
        marginLeft: scale(20)
    },
    shapeViewContact: {
        height: scale(40),
        width: scale(415),
        backgroundColor: '#333333',
        marginTop: scale(15)
    },
    textShapeViewContact: {
        color: 'white',
        fontSize: scale(16),
        marginLeft: scale(20),
        fontWeight: 'bold',
        marginTop: scale(6)
    },
    ViewRenderInvite: {
        flexDirection: 'row',
        marginTop: scale(10),
        marginLeft: scale(10)
    },
    textItem: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginLeft: scale(15)
    },
    imageItem: {
        width: 50,
        height: 50,
        borderRadius: 40,
        paddingHorizontal: 10
      },
    checkBox: {
        borderColor: 'green',
        borderWidth: 1,
        marginTop: scale(10),
        marginLeft: scale(100),
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white'
    }
   
})

export default stylesInvite;