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


export default class Help extends React.Component {
    static navigationOptions = {
        title: 'Help',
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
              style={{ height: 610, padding: 30 }}>  
              <View
              // style={{
              //   flexDirection: "row",
              //   backgroundColor: "#f8f8f8",
              //   padding: 10
              // }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                }}
              >
                <Image
                  source={require("../image/drawer.png")}
                  style={{ width: 30, height: 30, marginLeft: 300 }}
                />
              </TouchableOpacity>
            </View>
              <Text 
                style={{ 
                color: "white", 
                width: 150 ,
                fontWeight:"bold",
                marginTop:-15,
                marginLeft:100,
                fontSize:30,
                fontFamily:'serif',               
                }}>CoinAge</Text>

                <Text style={{ 
                marginTop:30,
                fontWeight:"bold",
                marginLeft:110,
                fontSize:18,
                fontFamily:'serif',               
                }}>DD Infosoft</Text>
            </ImageBackground> 
            {/* </ScrollView> */}
    </View>

  );

}
}
