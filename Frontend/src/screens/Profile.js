import React, { useEffect } from 'react';
import { Button, View, Text, Image, FlatList, ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import editIcon from '../assets/edit_icon.png';
import { getUserInfo } from '../api/userApi';
import { useSelector } from 'react-redux';


const Profile = ({navigation}) => {
  const userEmail = '08@qq.com';
  const userPosts = [
    { id: '1', title: 'First Post', content: 'This is the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the second post.' },
  ];

  const avatar = useSelector((state) => state.avatar.avatar);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 25}}>

          <Image 
            source={{uri:  `data:image/png;base64,${avatar}` }}
            style={{ marginTop: 50, width: 100, height: 100, borderRadius: 50 }}
          />



        <View style={{display:"flex", flexDirection:"row"}}>
          <Text style={styles.userName}>KunKun</Text>
          <TouchableOpacity onPress={() =>navigation.navigate('EditUserInfo')}>
            <Image
              source={editIcon}
              style={{ width: 20, height: 20,  marginTop:'auto',marginLeft:10}}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.userEmail}>{userEmail}</Text>
        <Button title="Go to Register Page" onPress={() => navigation.navigate('Register')} />
        <Button title="Go to Login Page" onPress={() => navigation.navigate('Login')} />
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
    marginTop: 'auto',  
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