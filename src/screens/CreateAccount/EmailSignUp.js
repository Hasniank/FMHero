import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './Styles';
import {Header} from '../../commons';
import {IMAGE} from '../../assets';

export const EmailSignUp = ({navigation}) => {
  return (
    <View style={Styles().container}>
      <View style={Styles().container1}>
        <Header
          onPress={() => {
            navigation.navigate('landing');
          }}
        />
        <TextInput placeholder="Email Address" style={Styles().textInput} />
        <TextInput placeholder="Password" style={Styles().textInput} />
        <TextInput placeholder="Confirm Password" style={Styles().textInput} />
        <Text>Password requirement: 20 characters or more</Text>
      </View>
      <View style={Styles().container2}>
        <Image source={IMAGE.IMAGES.BottomLogo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
