import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to  Private Chef Chris app</Text>
      <Button
        title="Go to Manage Menu"
        onPress={() => navigation.navigate('ManageMenu')}
      />
      <Button
        title="Go to Filter Menu"
        onPress={() => navigation.navigate('FilterMenu')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;

