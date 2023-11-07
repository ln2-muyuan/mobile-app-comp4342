import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.navigationContainer}>
            <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => console.log('Button Pressed')}
            >
            <Text style={styles.opacityText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => console.log('Button Pressed')}
            >
            <Text style={styles.opacityText}>Button 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => console.log('Button Pressed')}
            >
            <Text style={styles.opacityText}>Button 3</Text>
            </TouchableOpacity>
      </View>
    );
}


const styles = StyleSheet.create({
    navigationContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      backgroundColor: '#87C4FF',
      padding: 20,
    },
    touchableOpacity: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 10,
    },
    opacityText: {
      color: '#007AFF',
      fontWeight: 'bold',
      fontSize: 18,
    },
});


export default Navbar;