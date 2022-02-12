import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, FlatList, Alert } from 'react-native';
import {v4 as uuid} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


const App = () => {
  const [items, setItems] = useState([
  ]);

  const deleteItem = (id) => {
    return Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Yes",
          onPress: () => {
            setItems(prevItems => {
              return prevItems.filter(item => item.id != id);
            });
          },
        },
        {
          text: "No"
        }
      ]

    );

  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok'});
    }
    else {
      setItems(prevItems => {
        return [{id: uuid(), text},...prevItems];
      });
    }
  }


  return (
    <View style={styles.container}>
      <Header title='Wishlist' />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item}
        deleteItem={deleteItem}
       />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

});

export default App;