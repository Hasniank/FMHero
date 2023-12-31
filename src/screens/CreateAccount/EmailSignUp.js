import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './Styles';
import {Button, Header, SCREENS} from '../../commons';
import {IMAGE} from '../../assets';

export const EmailSignUp = ({navigation}) => {
  return (
    <View style={Styles().container}>
      <View style={Styles().container1}>
        <Header
        text={'Hero Activation'}
          onPress={() => {
            navigation.navigate('landing');
          }}
        />
        <TextInput placeholder="Email Address" style={Styles().textInput} />
        <TextInput placeholder="Password" style={Styles().textInput} />
        <TextInput placeholder="Confirm Password" style={Styles().textInput} />
        <Text>Password requirement: 20 characters or more</Text>
        <Button
          width={SCREENS.screenWidth * 0.85}
          backgroundColor={'#00854A'}
          height={SCREENS.screenHeight * 0.06}
          borderRadius={10}
          text={'Activate Hero'}
          color={'#fff'}
          onPress={() => {
            navigation.navigate('SignUpSuccess');
          }}
        />
      </View>
      <View style={Styles().container2}>
        <Image source={IMAGE.IMAGES.BottomLogo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
