import {StyleSheet} from 'react-native';
import {SCREENS} from '../../commons';

export const Styles = () =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container1: {
      height: SCREENS.screenHeight * 0.5,
      width: SCREENS.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      height: SCREENS.screenHeight * 0.5,
      width: SCREENS.screenWidth * 1,
      justifyContent: 'flex-end',
    },
    button: {
      width: SCREENS.screenWidth * 0.8,
      height: SCREENS.screenHeight * 0.07,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'space-around',
      alignItems: 'center',

      backgroundColor: '#D8D8D8',
      margin: 5,
    },
    textInput: {
      width: SCREENS.screenWidth * 1,
      borderBottomWidth: 1,
      borderColor: '#EDEDED',
      paddingLeft: 20,
    },
  });
