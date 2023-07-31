import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGE} from '../../assets';
import {SCREENS} from '../../commons';

export const SignUpSuccess = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={IMAGE.IMAGES.Hero} />
        <Text style={styles.text1}>
          Your account is created and your hero shield is ready for use!{' '}
        </Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.textContainer}>
          <Text style={styles.ClickText}>Click here to fill in Hero Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 1,
  },
  imageContainer: {
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 0.5,
   justifyContent:'center',
   alignItems:'center'
  },
  text1: {
    color: '#FFF',
    width: SCREENS.screenWidth * 0.65,
    justifyContent:'center',
    fontSize: 30,
    height: SCREENS.screenHeight * 0.3,
    alignItems:'center',
    top:90
  },
  container2: {
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenHeight * 0.5,
    justifyContent:'flex-end'
  },
  textContainer: {
    backgroundColor: '#00645A',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREENS.screenWidth * 1,
    height: SCREENS.screenWidth * 0.19,
    borderTopLeftRadius:35,
    borderTopRightRadius:35
  },
  ClickText:{
    color:'#FFF'
  }
});
