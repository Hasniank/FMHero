import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import NavigationContainer from '@react-navigation/native/lib/typescript/src/NavigationContainer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../../screens/LandingLoadingScreen/loadingScreen/index.js';
import {LandingScreen} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});
