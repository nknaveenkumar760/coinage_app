import React from 'react';
import { View, TextInput ,Text} from 'react-native';
import {commonTextBox as Styles} from "../Css.js";
class CommonTextBox extends React.Component {
  render(){
  return (
    <View ref={this.props.refs}
      borderColor={this.props.borderColor}
      style={Styles.outerView}>

      <TextInput
        ref={this.props.inputRef}
        underlineColorAndroid="transparent"
        placeholder={this.props.placeholder}
        placeholderTextColor="gray"
        keyboardType={this.props.keyboardType}
        onChangeText={this.props.onChangeText}
        returnKeyType={this.props.returnKeyType}
        numberOfLines={this.props.numberOfLines}
        multiline={this.props.multiline}
        onSubmitEditing={this.props.onSubmitEditing}
        style={this.props.style}
        blurOnSubmit={false}
        value={this.props.value}
        keyboardType={this.props.keyboardType}
        maxLength={this.props.maxLength}
        secureTextEntry={this.props.secureTextEntry}
      />
      <View style={Styles.innerView}><Text>{this.props.legend}</Text></View>
    </View>
  );}
};
export default CommonTextBox;