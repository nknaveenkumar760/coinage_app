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

import CommonButtonWithNoBackground from "./CommonButtonWithNoBackground";
import {backgroundImage as Stylesimg} from "../Css.js";
import {userMenu as Styles} from "../Css.js";

export default class About extends React.Component {
    static navigationOptions = {
        title: 'About CoinAge',
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
      {/* <ScrollView keyboardShouldPersistTaps="handled"> */}
       <ImageBackground
              // source={require("./image/LandingPageBackground.jpg")}
              source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/15549a14589707.5628669c64769.png'}}
              style={Stylesimg.img}>  
              <View
            //  style={{
            //     flexDirection: "row",
            //     backgroundColor: "#f8f8f8",
            //     padding: 20
            //   }} 
            >
                
               
            </View>
           </ImageBackground> 
            {/* </ScrollView> */}
    </View>

  );

}
}
