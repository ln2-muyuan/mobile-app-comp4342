
import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';


const Profile = ({ navigation, route }) => {
  const { name } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Profile Screen</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>Name: {name}</Text>
      <Navbar />
    </View>
  );
};

export default Profile;