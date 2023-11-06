import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Login</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    red: {
      color: 'red',
    },
  });
  
  export default Login;