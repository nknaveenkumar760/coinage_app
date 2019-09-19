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
import {backgroundImage as Stylesimg} from "../Css.js";
import {Landingpage as Styles} from "../Css.js";
export default class LandingPage extends React.Component {
   
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
      {/* <ScrollView keyboardShouldPersistTaps="handled"> */}
       <ImageBackground
              // source={require("./image/LandingPageBackground.jpg")}
              source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/15549a14589707.5628669c64769.png'}}
              style={Stylesimg.img}>  
              
              <Text 
              style={Styles.textCoin}>CoinAge</Text>  
              <View style={{marginTop:250}}>
                <Text style={Styles.textGuess}>Wallet Balance:</Text>
              </View>
              <View style={{marginTop:-20,marginLeft:70}}>
                <Text style={Styles.textGuess}>20</Text>
              </View>
                <View style={{marginTop:50,marginLeft:128}}>
                <CommonButtonWithNoBackground title ="Start"/>
                </View>
                <View style={{marginTop:20,marginLeft:80}}>
                <Text>Click Start For Play Game / About</Text>
                </View>
            </ImageBackground> 
            {/* </ScrollView> */}
    </View>

  );

}
}
