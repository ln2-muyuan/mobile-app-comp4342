import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {

  const navigation = useNavigation();

  return (

    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/navbar/home.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Post')}>
        <Image source={require('../assets/navbar/plus.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/navbar/mine.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10
  },
  buttonImage: {
    width: 45,
    height: 45,
  },
});

export default Navbar;