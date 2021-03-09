
import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking
} from 'react-native';


const App = () => {
  
  // for dynamically changing text
  const[number, setNumber] = useState(0)

  const[message , setMessage] = useState('You have clicked {number} times')


  const onClickHandler = () => {
      setNumber(number + 1)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{number}</Text>
  <Text style={styles.text}>You have clicked {number} times</Text>
      <Button title='Add' onPress={onClickHandler}></Button> 
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
