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
import axios from 'axios';
import PostSection from '../components/PostSection';


const Profile = ({navigation}) => {
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

  const [userPosts, setUserPosts] = useState([]);

  const fetchUserPosts = async () => {
    if (userEmail === 'No Login') {
      console.log("no user session");
      return;
    }
    try {
      const response = await axios.get("http://10.0.2.2:8800/post", {
        params: {
          email: userEmail,
        },
      });
      console.log(userEmail);
      setUserPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const processPostTime = (postTime) => {
    const now = new Date();
    const date = new Date(postTime);
    const diff = now - date;
  
    if (diff < 3600000) { // 小于1小时
      const minutes = Math.floor(diff / 60000);
      return `${minutes} minutes ago`;
    } else if (diff < 86400000) { // 小于1天
      const hours = Math.floor(diff / 3600000);
      return `${hours} hours ago`;
    } else { // 大于等于1天
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}-${day}`;
    }
  }


  useEffect(() => {
    //get the user session first
    console.log("useEffect");
    fetchUserInfo();
    fetchUserPosts();
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
      <ScrollView style={{ flex: 1, paddingHorizontal: 25}}>
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

        {userPosts.map((post) => ( 
            <PostSection 
              userName={post.name} 
              userAvatar={post.avatar} 
              postTime={processPostTime(post.content.createdAt)} 
              title={post.content.title} 
              contentText={post.content.text} 
              imageURL={post.content.image}
              navigation={navigation}
              /> 
            ))}

      

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