import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

const Profile = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 25}}>
        <Image
          source={require('../assets/profile.png')}
          style={{ marginTop: 50, width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10,  color: "#1F1717" }}>
          KunKun
        </Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}>My Post</Text>

      </ScrollView>
      <View>
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});



export default Profile;