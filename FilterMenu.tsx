import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useCategories, MenuItem } from './App';

const FilterMenu = () => {
  const { categories, filter, setFilter, menuItems } = useCategories();

  // Filter menu items based on the selected category
  const filteredMenuItems = filter
    ? menuItems.filter(item => item.category === filter)
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Category</Text>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.button}
          onPress={() => setFilter(category)}
        >
          <Text style={styles.buttonText}>{category}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.header}>Menu Items</Text>
      <FlatList
        data={filteredMenuItems}
        renderItem={({ item }: { item: MenuItem }) => (
          <View style={styles.menuItem}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8ff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default FilterMenu;
