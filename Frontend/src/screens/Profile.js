import React from 'react';
import { Button, View, Text, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

const Profile = ({navigation}) => {

  const userEmail = 'kunkun@example.com';
  const userPosts = [
    { id: '1', title: 'First Post', content: 'This is the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the second post.' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 25}}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>KunKun</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
        <Button title="Go to Register Page" onPress={() => navigation.navigate('Register')} />
        <Button title="Go to Login Page" onPress={() => navigation.navigate('Login')} />
        <Text style={{ fontSize: 20, marginTop: 10 }}>My Post</Text>

        <FlatList
          data={userPosts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postContent}>{item.content}</Text>
            </View>
          )}
        />

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
    backgroundColor: '#FFFFFF', 
  },
  profileImage: {
    marginTop: 50, 
    width: 100, 
    height: 100, 
    borderRadius: 50 
  },
  userName: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 10,  
    color: "#000000" 
  },
  userEmail: {
    fontSize: 16, 
    marginTop: 5,  
    color: "#000000" 
  },
  postContainer: {
    marginTop: 15, 
    padding: 10, 
    borderWidth: 1, 
    borderRadius: 5, 
    borderColor: '#000000', 
  },
  postTitle: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: "#000000" 
  },
  postContent: {
    fontSize: 14, 
    color: "#000000" 
  },
});



export default Profile;