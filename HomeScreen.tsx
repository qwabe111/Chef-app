import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

