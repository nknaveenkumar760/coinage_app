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

export default class RegisterPage extends React.Component {
  static navigationOptions = {
    title: 'Registration Page',
    //Sets Header text of Status Bar
  };
  constructor(props) {
    super(props);
   
    this.state = {
    
      width:Dimensions.get('window').width
      
    };
    debugger;
  }
render(){
  const { navigate } = this.props.navigation;
  return(
    <View>
      <ScrollView keyboardShouldPersistTaps="handled">
       <ImageBackground
              // source={require("./image/LandingPageBackground.jpg")}
              source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/15549a14589707.5628669c64769.png'}}
              style={Stylesimg.img}>  
               <Text 
                style={Styles.textCoin}>CoinAge</Text>

                <Text style={Styles.text}>Player Name:</Text>
                <CommonTextBox placeholder="Name"></CommonTextBox>

                <Text style={Styles.text}>Mobile Number:</Text>
                <CommonTextBox placeholder="Mobile Number"></CommonTextBox>
                <Text style={Styles.text}>Email Address:</Text>
                <CommonTextBox placeholder="Email Address"></CommonTextBox>
                <Text style={Styles.text}>Country / Currency:</Text>
                <CommonTextBox placeholder="Country / Currency"></CommonTextBox>
                <Text style={Styles.text}>Password:</Text>
                <CommonTextBox placeholder="Enter Password"></CommonTextBox>
                <Text style={Styles.text}>Confirm Password:</Text>
                <CommonTextBox placeholder="Re-enter Password"></CommonTextBox>

                <View style={{marginTop:20,marginLeft:128}}>
                <CommonButtonWithNoBackground title ="Submit"/>
                </View>
            </ImageBackground> 
            </ScrollView>
    </View>

  );

}
}
