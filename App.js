/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStackNavigator,createAppContainer,createDrawerNavigator} from "react-navigation";

import LandingPage from "./Components/LandingPage";
import RegisterPage from "./Components/RegisterPage";
import SignIn from "./Components/SignIn";
import Help from "./Components/Help";
import HomePage from "./Components/HomePage";
import UserMenu from "./Components/UserMenu";
import About from "./Components/About";
import ProfilePage from "./Components/ProfilePage";

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require("./image/drawer.png")}
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const App = createStackNavigator(
  {
    LandingPage:
    { screen: LandingPage
    },
    RegisterPage:
    { screen: RegisterPage},
    SignIn: 
    {screen: SignIn},
    HomePage:
    {screen:HomePage,
    navigationOptions: ({ navigation }) => ({
      title: 'Welcome Bhuvnesh',
     
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f8f8f8',
      },
      headerTintColor: '#fff',
    }),
    },
    Help:
    {screen:Help},
    UserMenu:
    {screen:UserMenu},
    About:
    {screen:About},
    ProfilePage:
    {screen:ProfilePage}
   
  // },
  // {
  //   initialRouteName: 'LandingPage'
  // }
  }
  );
  const DrawerNavigatorExample = createDrawerNavigator(
    {
      Screen: {
        screen: App,
        navigationOptions: {
          drawerLabel: ""
        }
      },
    },
    {
      //For the Custom sidebar menu we have to provide our CustomSidebarMenu
      contentComponent: UserMenu,
      //Sidebar width
      drawerWidth: 300 //Dimensions.get('window').width - 130,
    }
  );

export default createAppContainer(DrawerNavigatorExample);