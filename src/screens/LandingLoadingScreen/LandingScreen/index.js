import {StyleSheet, ImageBackground, View, Image} from 'react-native';
import React from 'react';
import {SCREENS} from '../../../commons/ScreenLayouts';
import {IMAGE} from '../../../assets';

export const LandingScreen = () => {
  return (
    <ImageBackground source={IMAGE.IMAGES.LandingImage} style={styles.img}>
      <View style={styles.container1}>
        <Image source={IMAGE.IMAGES.FMLogo} style={styles.logo}/>
      </View>
      <View style={styles.container2}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 1,
  },
  container1: {
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 0.5,
    justifyContent:"space-around",
    alignItems: 'center',
  },
  logo:{
    alignItems:"center",
    justifyContent:'flex-end',
    top:35,
  },
  container2: {
    backgroundColor: 'green',
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 0.5,
  },
});
