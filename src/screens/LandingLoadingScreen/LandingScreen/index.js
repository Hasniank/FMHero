import {Alert, ImageBackground, View, Image, Text} from 'react-native';
import React from 'react';
import {IMAGE} from '../../../assets';
import {Styles} from './Styles';
import {Button, SCREENS} from '../../../commons';

export const LandingScreen = ({navigation}) => {
  return (
    <ImageBackground source={IMAGE.IMAGES.LandingImage} style={Styles().img}>
      <View style={Styles().container1}>
        <Image source={IMAGE.IMAGES.FMLogo} style={Styles().logo} />
      </View>
      <View style={Styles().container2}>
        <Text style={Styles().text}>Are you a facilities management hero?</Text>
        <Button
          width={SCREENS.screenWidth * 0.85}
          height={SCREENS.screenHeight * 0.07}
          backgroundColor={'#00854A'}
          borderRadius={10}
          text={'Create Account'}
          color={'#fff'}
          top={20}
          onPress={() => {
            navigation.navigate('createAccount');
          }}
        />
        <Button
          width={SCREENS.screenWidth * 0.85}
          height={SCREENS.screenHeight * 0.07}
          backgroundColor={'#00854A'}
          borderRadius={10}
          text={'Login'}
          color={'#fff'}
          top={20}
          onPress={() => {
            navigation.navigate('login');
          }}
        />
        <View style={Styles().footerView}>
          <Text style={Styles().footerText}>Terms of Service</Text>
          <View></View>
          <Text style={Styles().footerText}>Privacy Policy</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
