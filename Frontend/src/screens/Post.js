import React, { useState, useEffect } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet,PermissionsAndroid,Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getLatestPosts } from '../store/postSlice';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import Geolocation from 'react-native-geolocation-service';
import { createPost } from '../api/postApi';

const PostScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState(null);
  const [placeName, setPlaceName] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const data = await EncryptedStorage.getItem('userSession');
        if (data) {
          setUserSession(JSON.parse(data));
        }
        else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'You need to login first'
          })
          navigation.navigate('Login');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserSession();
  },[]);
  const fetchCityInformation = async (latitude, longitude) => {
    try {
      //OpenStreetMap (OSM)
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      // {response.data.display_name} address: {road, city, county, state,country}
      if (response.data && response.data.address) {
        const { city, county, state, country } = response.data.address;
        setPlaceName(`${city}, ${county}, ${state}, ${country}`);
      }
    } catch (error) {
      console.log('Error fetching city information:', error);
    }
  };

  const handlePost = async () => {
    try {
      createPost(userSession.email, title, content, images, placeName).then((res) => {
        Toast.show({
          type: 'success',
          text1: 'Post Success',
          text2: 'Your post has been posted'
        })
        navigation.navigate('Home');
      }).catch((e) => {
        const errorMessage = JSON.parse(e.message)
        Toast.show({
          type: 'error',
          text1: 'Post Failed',
          text2: errorMessage.message
        })
      });
      const response = await axios.get('http://10.0.2.2:8800/post');
      // console.log('response = ', response.data);
      dispatch(getLatestPosts(response.data));
      // console.log('Get latest info successfully');
    }
    catch (error) {
      console.log('error = ', error);
      console.log('Have you start the server?');
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            //location.coords.latitude, location.coords.longitude
            setLocation(position);
            fetchCityInformation(
              position.coords.latitude,
              position.coords.longitude,
            );
          },
          error => {
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };
  

  const handleImageSelect = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64:true }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        //max 4 images
        if(images.length >= 4) {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'You can only upload up to 4 images'
          })
          return;
        };
        setImages([...images, response.assets[0].base64]);
      }
    });
  }

  const handleCheckboxChange = () => {
    const select = !isSelected;
    if (select) {
      getLocation();
    }
    else {
      setPlaceName(null);
    }
    setIsSelected(select);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 10 }}>
      {/* Navigation Bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/left.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setImages([])}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10 }}>
              Clear Images
            </Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={handleImageSelect}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10 }}>
              Select Image
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
        <View style={{display:"flex",flexDirection:"row", flexWrap:"wrap"}}>
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                source={{uri: `data:image/png;base64,${image}`}}
                style={{ width: 150, height: 150, margin:10 }}
              />
            )
          })}
        </View>
        <TextInput
          placeholder="Enter content"
          value={content}
          onChangeText={setContent}
          multiline
          style={{ fontSize: 16 }}
        />
      </View>
      <View>
        <View style={{display:'flex', flexDirection:"row" ,alignItems:"center"}}>
          <Text style={{marginLeft:'auto'}}>Share Location</Text>
          <CheckBox value={isSelected} onValueChange={handleCheckboxChange}/>
        </View>
        {isSelected? <Text>Location: {placeName}</Text>: null}
      </View>
      <TouchableOpacity onPress={handlePost} style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:10}}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10,textAlign:"center",width:"50%" }}>
            Post
          </Text>
      </TouchableOpacity>
    </View>
  );
};



export default PostScreen;