import { StyleSheet ,Dimensions} from "react-native";
import { scale } from "../../Scale";

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#000000'
     },
     shapeView: {
        height: scale(100),
        width: scale(415),
        backgroundColor: '#333333',
     },
     imgAdd: {
        height: 25,
        width: 25,
        marginRight: 10,
     },
     ViewSTbar: {
        flexDirection: 'row',
        marginTop: 7,
        justifyContent: 'space-between'
     },
     textSort: {
        color: '#0099FF',
        fontSize: 18,
        marginLeft: 10
      },
      textContacts: {
        color: 'white',
        fontSize: 20,
       fontWeight: 'bold'
      },
      textInput: {
        height: scale(45),
        width: scale(350),
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#000000',
        marginTop: 10,
        color: 'white'
    },
    textToAccess: {
      color: 'white',
      fontSize: scale(18),
      marginTop: scale(10),
      marginLeft: scale(20),
      fontWeight: 'bold'
    },
    textPlease: {
      color: 'white',
      fontSize: scale(16),
      marginLeft: scale(20)
    },
    shapeView2: {
      height: scale(40),
      width: scale(415),
      backgroundColor: '#333333',
      marginTop: scale(15)
    },
    textShapeView: {
      color: 'white',
      fontSize: scale(16),
      marginLeft: scale(20),
      fontWeight: 'bold',
      marginTop: scale(6)
    },
    imgAddress: {
      height: scale(40),
      width: scale(40),
      marginTop: scale(10),
      marginLeft: scale(15)
    },
    textFind: {
      color: '#0099FF',
      fontSize: scale(16),
      marginLeft: scale(20),
      marginTop: scale(20),
      
    },
    crossbarShapeView2: {
      height: 0.5,
      width: scale(340),
      backgroundColor: '#CCCCCC',
      marginLeft: scale(75),
      marginTop: 6
  },
//   ViewModal1: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: 'red'
//   },
   ViewModal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
   Modal: {
      backgroundColor: "#000000",
      borderRadius: 20,
      shadowColor: "#000",
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      
   },
   textCancle: {
      color: '#0099FF',
      fontSize: scale(18),
      marginTop: scale(15),
      marginLeft: scale(10)
   },
   textNewContacts: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: scale(12),
      marginLeft: scale(87)
   },
   textCreate: {
      color: '#CCCCCC',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: scale(15),
      marginLeft: scale(83)
   },
   ViewModalSort: {
      backgroundColor: "#333333",
      borderRadius: 20,
      shadowColor: "#000",
      height: 100,
      width: 200,
      marginLeft: scale(30),
      marginTop: scale(45),
   },
   textModalSort: {
      color: 'white',
      fontSize: scale(18),
      marginTop: scale(15),
      marginLeft: scale(15)
   },
   crossbarModalSort: {
      height: 0.5,
      width: scale(190),
      backgroundColor: '#CCCCCC',
      marginLeft: scale(10),
      marginTop: 6
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
   inputLast: {
      height: scale(45),
      width: scale(280),
      borderRadius: 15,
      backgroundColor: '#000000',
      color: 'white',
      marginLeft: scale(20),
      marginTop: scale(5)
   },
   crossbarNewContact: {
      height: 1,
      width: scale(285),
      backgroundColor: '#333333',
      marginLeft: scale(20),
      marginTop: 5
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
   imageItem: {
      width: 50,
      height: 50,
      borderRadius: 40,
      paddingHorizontal: 10
    },
    textItem: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center',
      fontWeight: 'bold',
      
    },
    ViewRenderDATAPHONE: {
      flexDirection: 'row',
      marginTop: scale(10),
      marginLeft: scale(10)
    },
    textMessage: {
      fontSize: 14,
      color: '#AAAAAA',
      marginLeft: scale(10)
    }
})

export default styles;