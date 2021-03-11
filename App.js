
import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList
} from 'react-native';


const App = () => {

  const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },

  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { item: 'Item 69' }]);
    setRefreshing(false);
  }

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2'],
    },    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2'],
    },    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]


  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />


    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text styles={styles.text}>{item.name}</Text>
    //     </View>
    //   )}

    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //     />
    //   }

    // />

    // <ScrollView 
    // style={styles.body}

    // }>
    //   {
    //     Items.map((item) => {
    //       return (
    //         <View style={styles.item} key={item.key}>
    //           <Text styles={styles.text}>{item.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>

  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000'

  },
  item: {

    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 50,
    margin: 10,
  }
});

export default App;
