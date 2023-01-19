import { StyleSheet ,Dimensions} from "react-native";
import { scale } from "../../Scale";

const styles = StyleSheet.create({
    container: {
       flex : 1,
       backgroundColor: '#000000'
    },
    ShapeView: {
        height: scale(100),
        width: scale(415),
        backgroundColor: '#333333',
      },
      ViewSTBar: {
        flexDirection: "row",
        marginTop: 7,
        justifyContent: 'space-between'
      },
      textChat: {
        color: 'white',
        fontSize: 20,
       fontWeight: 'bold'
      },
      imgSttBar: {
        height: 30,
        width: 30,
        marginRight: 10,

      },
      textEdit: {
        color: '#0099FF',
        fontSize: 18,
        marginLeft: 10
      },
      textInput: {
        height: scale(45),
        width: scale(350),
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#000000',
        marginTop: 5,
        color: 'white'
    },
    text: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center',
      padding: 10,
      fontWeight: 'bold'
      

    },
    message: {
      fontSize: 14,
      color: '#AAAAAA',
      padding: 10,
      marginLeft: scale(20)
    },
    imageItem: {
      width: 70,
      height: 70,
      borderRadius: 40,
      paddingHorizontal: 10,
      alignSelf: 'center'
    },
    ViewModalMessage: {
      backgroundColor: "#000000",
      borderRadius: 20,
      shadowColor: "#000",
      height: '100%',
      width: '100%',
      marginTop: scale(7),
      borderWidth: 0.5,
      borderTopColor: '#000000',
      
    },
    textCancel: {
      color: '#0099FF',
      fontSize: 18,
      marginLeft: scale(15),
      marginTop: scale(20)
    },
    textTitle: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: scale(85),
      marginTop: scale(18)
    },
    ShapeViewTitle: {
      height: scale(115),
      width: scale(415),
      backgroundColor: '#333333',
    },
    textInputNewMessage: {
      height: scale(45),
      width: scale(350),
      alignSelf: 'center',
      borderRadius: 15,
      backgroundColor: '#000000',
      marginTop: 15,
      color: 'white'
    },
    imgNewGroup: {
      height: 30,
      width: 30,
      marginTop: scale(15),
      marginLeft: scale(20)
    },
    textNewGroup: {
      color: '#0099FF',
      fontSize: 18,
      marginLeft: scale(20),
      marginTop: scale(18)
    },
    crossbarNewMesage: {
      height: 1,
      width: scale(345),
      backgroundColor: '#333333',
      marginLeft: scale(70),
      marginTop: scale(8)
   },
   imgNewChanel: {
    height: 32,
    width: 30,
    marginTop: scale(15),
    marginLeft: scale(20)
   },
   ViewModalNewContact: {
    backgroundColor: "#000000",
    borderRadius: 20,
    shadowColor: "#000",
    height: '100%',
    width: '100%',
    marginTop: scale(7),
    borderWidth: 0.5,
    borderTopColor: '#000000',
   },
   textCreate: {
    color: '#CCCCCC',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: scale(18),
    marginLeft: scale(83)
   },
   imgLogoAdd: {
    height: scale(75),
    width: scale(75),
    marginTop: scale(60),
    marginLeft: scale(30)
 },
 inputFirst: {
    height: scale(45),
    width: scale(280),
    borderRadius: 15,
    backgroundColor: '#000000',
    marginTop: 50,
    color: 'white',
    marginLeft: scale(20),
 
 },
 crossbarNewContact: {
    height: 1,
    width: scale(285),
    backgroundColor: '#333333',
    marginLeft: scale(20),
    marginTop: 8
},
 inputLast: {
    height: scale(45),
    width: scale(280),
    borderRadius: 15,
    backgroundColor: '#000000',
    color: 'white',
    marginLeft: scale(20),
    marginTop: scale(5)
 },
 imgTru: {
  height: 30,
  width: 30,
  marginTop: scale(40),
  marginLeft: scale(30)
  
},
textDĐ: {
  color: '#0099FF',
  fontSize: 16,  
  marginTop: scale(42),
  marginLeft: scale(10)

},
crossbarHeight: {
  height: scale(45),
  width: 1,
  backgroundColor: '#333333',
  marginLeft: scale(10),
  marginTop: scale(30)
},
inputDD: {
  color: 'white',
  fontSize: 16,  
  marginLeft: scale(10),
  marginTop: scale(30),
  height: scale(45),
  width: scale(270),
  
},
crossbarNewContactDD: {
  height: 1,
  width: scale(375),
  backgroundColor: '#333333',
  marginLeft: scale(35),
  marginTop: scale(5)
},
imgCong: {
  height: 25,
  width: 25,
  marginTop: scale(20),
  marginLeft: scale(32)
},
textAddPhone: {
  color: '#0099FF',
  fontSize: 16,  
  marginTop: scale(20),
  marginLeft: scale(10)

},
  imgBackNewChanel: {
    height: scale(25),
    width: scale(35),
    marginTop: scale(20),
    marginLeft: scale(5)
},
  textBack: {
    color: '#0099FF',
    fontSize: 18,
    marginTop: scale(20)
},
  imgNewChannel: {
    height: scale(300),
    width: scale(300),
    alignSelf: 'center'
},
  textTitleChanel: {
      fontSize: 26,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: scale(30)
},
  textBottomTitle: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: scale(3)
},
  btnCreateChannel: {
    height: scale(50),
    width: scale(320),
    backgroundColor: '#0099FF', 
    alignSelf: 'center',
    marginTop: scale(50),
    borderRadius: scale(10),
},
  textBtnCreateChanel: {
    color: 'white',
    fontSize: scale(20),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: scale(10)
},
  textTitleCreateChannel: {
    color: 'white',
    fontSize: scale(20),
    fontWeight: 'bold',
    marginTop: scale(18),
    marginLeft: scale(64)
},
  textNextChannel: {
    color: '#CCCCCC',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: scale(20),
    marginLeft: scale(80)
}

})

export default styles;