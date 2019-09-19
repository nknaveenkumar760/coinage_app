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


export default class ProfilePage extends React.Component {
    static navigationOptions = {
        title: 'User Menu',
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
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                }}
              >
                <Image
                  source={require("../image/drawer.png")}
                  style={{ width: 45, height: 45, marginRight: 280,marginTop:-15 }}
                />
              </TouchableOpacity>
              <Text style={{marginLeft:80,marginTop:-40,fontSize:25}}>Hi Bhuvnesh</Text>

              {/* <Text 
                style={{ 
                color: "white", 
                width: 150 ,
                fontWeight:"bold",
                marginTop:-15,
                marginLeft:100,
                fontSize:30,
                fontFamily:'serif',               
                }}>CoinAge</Text> */}
                 <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('ProfilePage');
                }}>
                <Text style={Styles.text}>My Profile</Text>
                </TouchableOpacity>

                <Text style={Styles.text}>Manage Wallet</Text>
                <Text style={Styles.text}>Wallet History</Text>
                <Text style={Styles.text}>Prediction History</Text>
                <Text style={Styles.text}>Winning History</Text>
                <Text style={Styles.text}>Game Policy</Text>
                <Text style={Styles.text}>Music On/Off</Text>
                <Text style={Styles.text}>Share App</Text>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Help');
                }}>
                <Text style={Styles.text}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('About');
                }}>
                <Text style={Styles.text}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('LandingPage');
                }}>
                <Text style={Styles.text}>Sign Out</Text>
                </TouchableOpacity>
                
            </View>
            

                
            </ImageBackground> 
            {/* </ScrollView> */}
    </View>

  );

}
}
