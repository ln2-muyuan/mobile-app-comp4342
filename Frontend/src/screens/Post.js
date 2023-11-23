import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { getLatestPosts } from '../store/postSlice';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';


const Post = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState([]);


  const dispatch = useDispatch();

  const handlePost = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8800/post');
         // console.log('response = ', response.data);
      dispatch(getLatestPosts(response.data));
      console.log('Get latest info successfully');
    }
    catch (error) {
      console.log('Have you started the server?');
    }
  };


  const handleImageSelect = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64:true }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setSelectedImage(response.assets[0]);
      }
    });
}



  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 10 }}>
      {/* Navigation Bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>






        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/left.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleImageSelect}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10, marginLeft: 100 }}>
              Select Image
            </Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={handlePost}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10 }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>

      {/* Title and Content Input */}
      <View style={{ paddingHorizontal: 10 }}>
        <TextInput
          placeholder="Title (Required)"
          value={title}
          onChangeText={setTitle}
          style={{ fontSize: 20, fontWeight: 'bold' }}
        />
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginVertical: 5 }} />
        <TextInput
          placeholder="Enter content"
          value={content}
          onChangeText={setContent}
          multiline
          style={{ fontSize: 16 }}
        />
      </View>


 
    </View>
  );
};



export default Post;