import React from 'react';
import axios from 'axios';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {
  Header
} from 'react-native/Libraries/NewAppScreen';

import Navbar from '../components/Navbar';
import PostSection from '../components/PostSection';


const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView style={{flexGrow: 0.86}}>
          <Header />
            <Button title="Go to Login Page" onPress={() => navigation.navigate('Login')} />
            <PostSection username="Test User" postText="This is a test post asdfasdfasdfasdfasdfasdfafasdfasdfasdfasdfafdadsfds" />
            <PostSection username="Test User" postText="This is a test post asdfasdfasdfasdfasdfasdfafasdfasdfasdfasdfafdadsfds" />
            <PostSection username="Test User" postText="This is a test post asdfasdfasdfasdfasdfasdfafasdfasdfasdfasdfafdadsfds" />
            <PostSection username="Test User" postText="This is a test post asdfasdfasdfasdfasdfasdfafasdfasdfasdfasdfafdadsfds" />
        </ScrollView>
      </View>


      <Navbar/>

    </SafeAreaView>
  );
}


export default Home;
