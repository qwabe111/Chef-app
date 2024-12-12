import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useCategories } from './App';

const ManageMenuScreen = () => {
  const { addMenuItem } = useCategories();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleAddMenuItem = () => {
    if (name && description && price && category) {
      addMenuItem({
        name,
        description,
        price: parseFloat(price),
        category,
      });
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Menu Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add Item" onPress={handleAddMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default ManageMenuScreen;
