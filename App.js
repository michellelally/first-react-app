
import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';


const App = () => {
const [name, SetName] = useState('');


  return (

    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        //multiline
        style={styles.input}
        placeholder='e.g John Smith'
        onChangeText={(value) => SetName(value)}
      />
        <Text style={styles.text}>
        Your name: {name}
      </Text>


    </View>

  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: '#555',
    borderRadius: 5,
  },
});

export default App;
