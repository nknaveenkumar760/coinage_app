import React from 'react';
import {
  StyleSheet,
  View,
  Text ,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Button,
  TouchableOpacity,
  CheckBox,AsyncStorage,ImageBackground,Dimensions,Platform 
} from 'react-native';

import CommonButtonWithNoBackground from "./CommonButtonWithNoBackground"
import CommonTextBox from "./CommonTextBox"
import {backgroundImage as Stylesimg} from "../Css.js";
import {registerPage as Styles} from "../Css.js";

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Login',
    //Sets Header text of Status Bar
  };
  constructor(props) {
    super(props);
   
    this.state = {
    
      width:Dimensions.get('window').width
      
    };
    debugger;
    // var userDetails = this.props.user;
    // var loggedInUser = userDetails;
  }
render(){
  const { navigate } = this.props.navigation;
  return(
    <View>
      
       <ImageBackground
              // source={require("./image/LandingPageBackground.jpg")}
              source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/15549a14589707.5628669c64769.png'}}
              style={Stylesimg.img}>  
               <Text 
                style={Styles.textCoin}>CoinAge</Text>

                <Text style={Styles.text}>Mobile Number</Text>
                <CommonTextBox placeholder="10 digit mobile number"></CommonTextBox>

                <Text style={Styles.text}>Password:</Text>
                <CommonTextBox placeholder="Enter valid password"></CommonTextBox>
                <Text style={Styles.text}>Enter Captcha:</Text>

                <Text style={Styles.textCaptcha} >7&nbsp; 8&nbsp; 9&nbsp; 0</Text>

                
                <CommonTextBox placeholder="Enter Captcha Here"></CommonTextBox>
                
                <View style={{marginTop:20,marginLeft:55}}>
                <CommonButtonWithNoBackground title ="Sign In" customClick={() =>navigate("HomePage")}/>
                </View>
                <View style={{marginTop:-45,marginLeft:190}}>
                <CommonButtonWithNoBackground title ="Reset"/>
                </View>
            </ImageBackground> 
           
    </View>

  );

}
}
