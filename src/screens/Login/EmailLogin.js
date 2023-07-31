import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Styles} from './Styles';
import {Button, Header, SCREENS} from '../../commons';
import {IMAGE} from '../../assets';

export const EmailLogin = ({navigation}) => {
  return (
    <View style={Styles().container}>
      <View style={Styles().container1}>
        <Header
          text={'Suit Up'}
          onPress={() => {
            navigation.navigate('landing');
          }}
        />
        <TextInput placeholder="Email Address" style={Styles().textInput} />
        <TextInput placeholder="Password" style={Styles().textInput} />
        
        <TouchableOpacity onPress={()=>{
          navigation.navigate('ForgotPw')
        }}>
          <Text style={Styles().forgetText}>Forgot your password?</Text>
        </TouchableOpacity>
        <Button
          width={SCREENS.screenWidth * 0.85}
          backgroundColor={'#00854A'}
          height={SCREENS.screenHeight * 0.06}
          borderRadius={10}
          text={'Login'}
          color={'#fff'}
          onPress={() => {
            Alert.alert('Login');
          }}
        />
      </View>
      <View style={Styles().container2}>
        <Image source={IMAGE.IMAGES.BottomLogo} />
      </View>
    </View>
  );
};
