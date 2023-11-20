import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import Navbar from '../components/Navbar';
import PostSection from '../components/PostSection';
import Header from '../components/Header';


const Home = ({navigation}) => {

  const singleImage = [require('../assets/bbeafc823f203f0bdc9c831a9b7bbc4.jpg')];

  const multipleImages = [
    { id: 1, image: require('../assets/712b6a82944c8c89f4c3a7d58bc209d.jpg') },
    { id: 2, image: require('../assets/ed07fa2f938947ed929aa4837f3d6b1.jpg') },
  ];

  const videoPath = require('../assets/video1.mp4');

  return (
    <SafeAreaView>
      <View>
        <ScrollView style={{flexGrow: 0.91}}>
          <Header />
          <PostSection userName="胡桃桃桃砸" userAvatar={require("../assets/profile.png")} postTime="11-11" 
          title="玩原这么久最后悔的事是什么" 
          contentText="好吧，我是把阿莫斯精炼了，当时我应该是五十多级，然后常驻保底出了两把，我当时也不养弓箭手，然后我就跟我同期玩的同学吐槽（当时还算是个啥都不懂的萌新呢，只有两个五星角色，一个莫娜一个万叶）她就给我来了一句精炼呗，我想着反正也不用弓，然后就精炼了，现在看到就有点心梗" 
          imageURL={multipleImages} navigation={navigation}/>
          
          <PostSection userName="火" userAvatar={require("../assets/profile.png")} postTime="11-11" 
          title="求带" imageURL={singleImage} navigation={navigation}/>
          <PostSection userName="可莉" userAvatar={require("../assets/profile.png")} postTime="11-11" title="炸鱼去喽" videoURL={videoPath} navigation={navigation}/>
          <PostSection title="Test User" contentText="This is a test post asdfasdfasdfasdfasdfasdfafasdfasdfasdfasdfafdadsfds" navigation={navigation}/>
          <PostSection title="Test User" contentText="This is a test post asdfasdfasdfasdfasdfasdfafasdfasdfasdfasdfafdadsfds" navigation={navigation}/>
        </ScrollView>
      </View>
      <Navbar/>
    </SafeAreaView>
  );
}


export default Home;