import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGE} from '../../assets';
import {SCREENS} from '../../commons/Screenlayouts';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE.IMAGES.LoadingImage} style={styles.img} />
    </View>
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
