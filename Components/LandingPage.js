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
import {Landingpage as Styles} from "../Css.js";
import {backgroundImage as Stylesimg} from "../Css.js";
export default class LandingPage extends React.Component {
 
  constructor(props) {
    super(props);
   
    this.state = {
    
      // width:Dimensions.get('window').width
      
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
              
              <Text style={Styles.textCoin}>CoinAge</Text>
              <Text style={Styles.textGuess}>Guess to Win</Text>
              <View style={{marginTop:250, marginLeft: 50}}>  
              <CommonButtonWithNoBackground title ="Register"  customClick={() =>navigate('RegisterPage')} />
              </View>
                <View style={{marginTop:-47,marginLeft:200}}>
                <CommonButtonWithNoBackground title ="SignIn" customClick={() =>navigate('SignIn')}/>
                </View>
                <View style={{marginTop:20,marginLeft:128}}>
                <CommonButtonWithNoBackground title ="Help" customClick={() =>navigate('Help')}/>
                </View>
                <View style={{marginTop:20,marginLeft:60}}>
                <Text>Click Help For Registration / Login Issue</Text>
                </View>
            </ImageBackground> 
            {/* </ScrollView> */}
    </View>

  );

}
}
