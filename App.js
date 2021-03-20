
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

  const [Sections, setSections] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    }
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = Sections.length + 1;
    setSections([...Sections,
    {
      title: 'Title ' + adding_index,
      data:
        [
          'Item ' + adding_index + '-1',
          'Item ' + adding_index + '-2',
        ],
    }
    ]);
    setRefreshing(false);
  }

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Sections}
      renderItem={({ item }) => (
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
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
