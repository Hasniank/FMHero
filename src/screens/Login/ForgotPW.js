import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Button, Header, SCREENS} from '../../commons';
import {IMAGE} from '../../assets';

export const ForgotPW = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Header text={'Forgot Password'} />
        <Text>
          Enter email address below to send a reset password email. Follow the
          instructions in the email to setup a new password.
        </Text>
        <TextInput />
        <Button width={SCREENS.screenWidth*0.9} backgroundColor={'#00854A'} height={SCREENS.screenHeight*0.07} borderRadius={10} text={'Reset Password'} color={'#fff'}/>
      </View>
      <View style={styles.container2}>
        <Image source={IMAGE.IMAGES.GirlImage} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 1,
    backgroundColor:'#fff'
  },
  container1: {
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 0.5,
    justifyContent:'center',
    alignItems:'center'
  },
  container2: {
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 0.5,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:SCREENS.screenWidth*0.5,
    height:SCREENS.screenHeight*0.5,
    
  }
});
