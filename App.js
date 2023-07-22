import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {MyStack} from './src/navigations';

const App = () => {
  return <MyStack />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
  },
});
