import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "../../Scale";

const stylesSetting = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#000000'
    },
    imgQR: {
        height: 30,
        width: 30,
        marginLeft: scale(10)
    },
    textEdit: {
        color: '#0099FF',
        fontSize: 18,
        marginLeft: 10
    },
    ViewSTbar: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    imgUser: {
        height: 80,
        width: 80,
        alignItems: 'center'
    },
    textNQH: {
        color: 'white',
         alignSelf: 'center',
         marginTop: scale(10),
         fontSize: scale(24),
    },
    textSDT: {
        color: '#AAAAAA',
        alignSelf: 'center',
        marginTop: scale(3),
        fontSize: scale(16)
    },
    shapeView1: {
        height: scale(100),
        width: scale(375),
        backgroundColor: '#333333',
        borderRadius: scale(20),
        alignSelf: 'center',
        marginTop: scale(25)
    },
    imgPhoto: {
        height: scale(35),
        width: scale(35),
        marginTop: scale(8),
        marginLeft: scale(10)
    },
    textPhoto: {
        color: '#0099FF',
        fontSize: scale(18),
        marginTop: scale(12),
        marginLeft: scale(16)
    },
    crossbar: {
        height: 1,
        width: scale(315),
        backgroundColor: '#CCCCCC',
        marginLeft: scale(60)
    },
    crossbarShapeView2: {
        height: 1,
        width: scale(315),
        backgroundColor: '#CCCCCC',
        marginLeft: scale(60),
        marginTop: 4
    },
    shapeView2: {
        height: scale(200),
        width: scale(375),
        backgroundColor: '#333333',
        borderRadius: scale(20),
        alignSelf: 'center',
        marginTop: scale(25)
    },
    textSaved: {
        color: 'white',
        fontSize: scale(18),
        marginTop: scale(12),
        marginLeft: scale(16)
    },
    imgPhone: {
        height: scale(35),
        width: scale(35),
        marginTop: scale(8),
        marginLeft: scale(10),
        borderRadius: 8
    },
    imgSaved: {
        height: scale(40),
        width: scale(40),
        marginTop: scale(8),
        marginLeft: scale(5)
    },
    shapeView3: {
        height: scale(290),
        width: scale(375),
        backgroundColor: '#333333',
        borderRadius: scale(20),
        alignSelf: 'center',
        marginTop: scale(25)
    },
    shapeView4: {
        height: scale(50),
        width: scale(375),
        backgroundColor: '#333333',
        borderRadius: scale(20),
        alignSelf: 'center',
        marginTop: scale(25)
    },
    shapeView5: {
        height: scale(150),
        width: scale(375),
        backgroundColor: '#333333',
        borderRadius: scale(20),
        alignSelf: 'center',
        marginTop: scale(25)
    }
})

export default stylesSetting;