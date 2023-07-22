import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationContainer from '@react-navigation/native/lib/typescript/src/NavigationContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export const Stack = () => {
  return (
    <View style={styles.container}>
      <Text>Stack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});


// import React, {useState, useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Home, SplashScreen} from '../../screens';

// const Stack = createNativeStackNavigator();

// export const MyStack = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 4000);
//   }, []);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="SplashScreen"
//         screenOptions={{headerShown: false}}>
//         {loading ? (
//           <Stack.Screen name="Splash" component={SplashScreen} />
//         ) : (
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{headerShown: false}}
//           />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
