import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../../screens/LandingLoadingScreen/loadingScreen/index.js';
import {EmailSignUp, LandingScreen} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';
import {CreateAccount} from '../../screens/CreateAccount/CreateAccount.js';


const Stack = createNativeStackNavigator();
export const MyStack = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        {loading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <Stack.Screen name="landing" component={LandingScreen} />
        )}
        <Stack.Screen name="createAccount" component={CreateAccount} />
        {/* <Stack.Screen name="emailSignUp" component={EmailSignUp} /> */}
        <Stack.Screen name='emailSignUp' component={EmailSignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});
