/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking
} from 'react-native';


const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Pick Your Posion</Text>
      <Button title='Start' onPress={()=>{Linking.openURL('https://harrysgalway.ie/cocktail-menu/')}}></Button> 
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent:'center'
    
  },
  text: {
    color:'#fffff0',
    fontSize: 20,
    margin: 10,
  }
});

export default App;
