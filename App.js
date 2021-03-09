
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
  const[name, setName] = useState('Pick Your Poison')

  const[cocktail , setCocktail] = useState({ number: 6, title: 'Pornstar Martini'})

  const[current, setCurrent] = useState(true)

  const onClickHandler = () => {
    setName("Michelle")
    setCocktail({number:7, title:'Espresso Martini'})
    setCurrent(false)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>You chose cocktail number {cocktail.number} which is {cocktail.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='Update State' onPress={onClickHandler}></Button> 
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
