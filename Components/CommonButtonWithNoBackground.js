import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {CommonButtonNoBackground as Styles} from "../Css.js";
const CommonButtonWithNoBackground = props => {
  return (
    <TouchableOpacity style={Styles.button} onPress={props.customClick}>
      <Text style={Styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};


export default CommonButtonWithNoBackground;
