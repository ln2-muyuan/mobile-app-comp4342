import React, { useEffect, useState } from 'react';
import { Button, View, Text, Image, FlatList, ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import editIcon from '../assets/edit_icon.png';
import { useSelector } from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { initialStateAvatar, setAvatar } from '../store/avatarSlice';


const Profile = ({navigation}) => {
  const userPosts = [
    { id: '1', title: 'First Post', content: 'This is the first post.' },
    { id: '2', title: 'Second Post', content: 'This is the second post.' },
  ];
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('Visitor');
  const [userEmail, setUserEmail] = useState('No Login');
  const avatar = useSelector((state) => state.avatar.avatar);
  async function fetchUserInfo() {
    try {
      const userSession = await EncryptedStorage.getItem('userSession');
      if (userSession !== null) {
        const userSessionObj = JSON.parse(userSession);
        const token = userSessionObj.token;
        const name = userSessionObj.name;
        const email = userSessionObj.email;
        setUserEmail(email);
        setUserName(name);
        setIsLogin(true);
      }
      else {
        console.log("no user session");
        setIsLogin(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //get the user session first
    fetchUserInfo();
  }, [])

  const handleLogout = async () => {
    try {
      await EncryptedStorage.removeItem('userSession');
      setIsLogin(false);
      setUserEmail('No Login');
      setUserName('Visitor');
      dispatch(setAvatar(initialStateAvatar));
      Toast.show({
        type: 'success',
        text1: 'Logout Success',
        text2: 'Your account logout successfully'
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 25}}>
        {
          isLogin ? (
            <View>
              <View style={{display:"flex", flexDirection:"row", paddingTop:50,justifyContent:'center',alignItems:"center"}}>
                <View style={{flex:1}}>
                  <Image 
                    source={{uri:  `data:image/png;base64,${avatar}` }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                  />
                </View>
                <View style={{flex:1,justifyContent:"center"}}>
                  <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={styles.userName}>{userName}</Text>
                    <TouchableOpacity onPress={() =>navigation.navigate('EditUserInfo')}>
                      <Image
                        source={editIcon}
                        style={{ width: 20, height: 20,  marginTop:'auto',marginLeft:10}}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.userEmail}>{userEmail}</Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                  <Text style={{fontSize:15}}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) :
          (
            <View>
              <View style={{display:"flex", flexDirection:"row", paddingTop:50}}>
                <View style={{flex:1}}>
                  <Image 
                    source={{uri:  `data:image/png;base64,${avatar}` }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                  />
                </View>
                <View style={{flex:1,justifyContent:"center"}}>
                  <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
                    <Text style={{fontSize:20}}>Login/Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{display:"flex", flexDirection:"row"}}>
                <Text style={styles.userName}>{userName}</Text>
              </View>
              <Text style={styles.userEmail}>{userEmail}</Text>
            </View>
          )
        }
        {/* <Button title="Go to Register Page" onPress={() => navigation.navigate('Register')} />
        <Button title="Go to Login Page" onPress={() => navigation.navigate('Login')} /> */}
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

      </View>
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