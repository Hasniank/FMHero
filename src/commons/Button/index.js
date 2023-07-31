import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Styles} from './Styles';

export const Button = ({
  text,
  width,
  height,
  backgroundColor,
  borderRadius,
  color,
  size,
  top,
  textTop,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={
        Styles({width, backgroundColor, height, borderRadius, top}).container
      }
      onPress={onPress}>
      <Text style={Styles({color, size, textTop}).text}>{text}</Text>
    </TouchableOpacity>
  );
};
