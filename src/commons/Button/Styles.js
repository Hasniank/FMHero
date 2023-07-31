import {StyleSheet} from 'react-native';

export const Styles = ({
  width,
  height,
  backgroundColor,
  borderRadius,
  color,
  size,
  top,
  textTop
} = {}) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      top:top
    },
    text: {
      fontSize: size,
      color: color,
      textAlign: 'center',
      top:textTop
    },
  });
