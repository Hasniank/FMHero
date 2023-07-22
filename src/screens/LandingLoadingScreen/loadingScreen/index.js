import {StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {IMAGE} from '../../../assets';
import {SCREENS} from '../../../commons';

export const SplashScreen = () => {
  return (
    <ImageBackground
      source={IMAGE.IMAGES.LoadingImage}
      style={styles.img}
      resizeMode="cover"></ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  img: {
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 1,
  },
});
