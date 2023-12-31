import { View, Text,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { Button, Header, SCREENS } from '../../commons'
import { IMAGE } from '../../assets'
import { Styles } from './Styles'



const Login = ({navigation}) => {
  return (
    <View style={Styles().container}>
      <View style={Styles().container1}>
        <Header
        text={'Suit Up'}
          onPress={() => {
            navigation.navigate('landing');
          }}
        />
        <Button
          backgroundColor={'#00854A'}
          width={SCREENS.screenWidth * 0.8}
          height={SCREENS.screenHeight * 0.06}
          borderRadius={10}
          text={'Sign Up with Email'}
          color={'#FFF'}
          // top={20}
          onPress={() => {
            navigation.navigate('EmailLogin');
          }}
        />
        <TouchableOpacity style={Styles().button}>
          <Image
            source={IMAGE.IMAGES.AppleLogo}
            style={{width: 20, height: 20}}
          />
          <Text>Sign Up with Apple</Text>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles().button}>
          <Image
            source={IMAGE.IMAGES.FacebookLogo}
            style={{width: 20, height: 20}}
          />
          <Text>Sign Up with Facebook</Text>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles().button}>
          <Image
            source={IMAGE.IMAGES.GoogleLogo}
            style={{width: 20, height: 20}}
          />
          <Text>Sign Up with Google</Text>
          <View></View>
        </TouchableOpacity>
      </View>
      <View style={Styles().container2}>
        <Image source={IMAGE.IMAGES.BottomLogo} />
      </View>
    </View>
  )
}

export default Login