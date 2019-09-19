import { StyleSheet } from "react-native";

export const backgroundImage=StyleSheet.create({
    img:
        { height: 750, padding: 30 }
    
});
export const CommonButtonNoBackground = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#4467ab",
      color: "#ffffff",
      padding: 8,
      borderRadius: 1,
      borderWidth: 1.5,
      borderColor: "black",
      borderRadius:5,
      width:100
    },
    text: {
      color: "black",
      fontWeight:"bold",
      fontSize:20
    }
  });
  export const commonTextBox=StyleSheet.create({
      outerView:{
        marginLeft: 0,
        marginRight: 10,
        marginTop: 10,
        borderWidth: -10,
        backgroundColor:'#fefefe',
        borderRadius:5,
        marginBottom:10,
        height:40
      },
      innerView:{
        backgroundColor:"#fefefe",
        position:"absolute",
        marginLeft:13,
        marginTop:-10,
        padding:0
      }
  });
  export const Landingpage = StyleSheet.create({
    textCoin:{     
            color: "white", 
            width: 200 ,
            fontWeight:"bold",
            marginTop:0,
            marginLeft:70,
            fontSize:48,
            fontFamily:'serif',                     
    },
    textGuess:{
        color: "black", 
                width: 200 ,
                fontWeight:"bold",
                marginTop:30,
                marginLeft:90,
                fontSize:25,
                fontFamily:'normal', 
    }
  });
  //CSS for Register Page and SignIn 
  export const registerPage=StyleSheet.create({
    textCoin:{
      color: "white", 
      width: 150 ,
      fontWeight:"bold",
      marginTop:-15,
      marginLeft:100,
      fontSize:30,
      fontFamily:'serif', 
    },
    text:{
      color: "black", 
                fontWeight:"bold",
                marginTop:8,
                fontFamily:'serif', 
                fontSize:15  
    },
    textCaptcha:{
      color: "blue", 
      fontWeight:"bold",
      marginTop:10,
      fontFamily:'serif', 
      fontSize:25   
    }
  });

  export const userMenu=StyleSheet.create({
    text:{
      fontSize:20,
      fontFamily:'serif',
      fontWeight:'bold',
      marginLeft:10,
      marginTop:20,
      color:'white'
    }
  });
  export const profilePage=StyleSheet.create({
    textCoin:{
      color: "white", 
      width: 150 ,
      fontWeight:"bold",
      marginTop:-15,
      marginLeft:100,
      fontSize:30,
      fontFamily:'serif', 
    },
    text:{
                color: "black", 
                fontWeight:"bold",
                marginTop:8,
                fontFamily:'serif', 
                fontSize:15  
    },
    textDetails:{
                color: "blue", 
                fontWeight:"bold",
                marginTop:1,
                fontFamily:'serif', 
                fontSize:20 
    },
    textBank:{
      color: "black", 
      fontWeight:"bold",
      marginTop:15,
      fontFamily:'serif',
      
      fontSize:20  
    }
  });
  