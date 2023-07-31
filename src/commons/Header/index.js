import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMAGE} from '../../assets';
import {SCREENS} from '../ScreenLayouts';

export const Header = ({onPress,text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={IMAGE.IMAGES.LEFT} />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000',
    width: SCREENS.screenWidth * 0.84,
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
});
