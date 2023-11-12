import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.header}></View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 1, 
  },
});

export default CustomHeader;