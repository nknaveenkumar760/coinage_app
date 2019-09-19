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
import {profilePage as Styles} from "../Css.js";

export default class About extends React.Component {
    static navigationOptions = {
        title: 'Profile',
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
                <Text style={Styles.textCoin}>CoinAge</Text>

                <Text style={Styles.text}>Player Id:</Text>
                <Text style={Styles.textDetails}>1111</Text>

                <Text style={Styles.text}>Player Name:</Text>
                <Text style={Styles.textDetails}>Bhuvnesh Singh</Text>

                <Text style={Styles.text}>Registration Date:</Text>
                 <Text style={Styles.textDetails}>2019-09-11</Text>

                <Text style={Styles.text}>Mobile:</Text>
                <Text style={Styles.textDetails}>9999999999</Text>

                <Text style={Styles.text}>Email:</Text>
                 <Text style={Styles.textDetails}>bhuvnesh@gmail.com</Text>

                <Text style={Styles.text}>Country / Currency</Text>
                <Text style={Styles.textDetails}>India</Text>

                <Text style={Styles.textBank}>Bank Details</Text>

                <Text style={Styles.text}>Bank Account Name</Text>
                <Text style={Styles.textDetails}>Bhuvnesh Singh</Text>

                <Text style={Styles.text}>Bank Account No</Text>
                <Text style={Styles.textDetails}>35040058900</Text>
                
                <Text style={Styles.text}>Bank Name</Text>
                <Text style={Styles.textDetails}>State Bank of India</Text>

                <Text style={Styles.text}>Branch Name</Text>
                <Text style={Styles.textDetails}>Noida</Text>

                <Text style={Styles.text}>Bank IFSC / IBAN / SWIFT Code</Text>
                <Text style={Styles.textDetails}>SBIN0018042</Text>

                


           </ImageBackground> 
            </ScrollView>
    </View>

  );

}
}
