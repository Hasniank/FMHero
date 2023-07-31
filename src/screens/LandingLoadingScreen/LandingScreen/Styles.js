import {StyleSheet} from 'react-native';
import {SCREENS} from '../../../commons';

export const Styles = ({} = {}) =>
  StyleSheet.create({
    img: {
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 1,
    },
    container1: {
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 0.7,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
      //   top: 35,
    },
    container2: {
      width: SCREENS.screenWidth * 1,
      height: SCREENS.screenHeight * 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 15,
      color: '#fff',
    },
    footerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: 30,
    },
    footerText: {
      fontSize: 15,
      color: '#27C780',
      margin: 10,
    },
  });
