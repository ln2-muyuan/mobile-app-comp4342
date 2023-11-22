import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import Navbar from '../components/Navbar';
import PostSection from '../components/PostSection';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const Home = ({navigation}) => {

  // const singleImage = [require('../assets/bbeafc823f203f0bdc9c831a9b7bbc4.jpg')];
  // const multipleImages = [
  //   { id: 1, image: require('../assets/712b6a82944c8c89f4c3a7d58bc209d.jpg') },
  //   { id: 2, image: require('../assets/ed07fa2f938947ed929aa4837f3d6b1.jpg') },
  // ];
  // const videoPath = require('../assets/video1.mp4');


  const posts = useSelector((state) => state.posts.posts);

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

  return (
    <SafeAreaView>
      <View>
        <ScrollView style={{flexGrow: 0.91}}>
          <Header />


          {posts.map((post) => ( <PostSection userName={post.name} userAvatar={post.avatar} postTime={processPostTime(post.content.createdAt)} title={post.content.title} contentText={post.content.text} imageURL={post.content.image}/> ))}




          {/* <PostSection userName="胡桃桃桃砸" userAvatar={require("../assets/profile.png")} postTime="11-11" 
          title="玩原这么久最后悔的事是什么" 
          contentText="好吧，我是把阿莫斯精炼了，当时我应该是五十多级，然后常驻保底出了两把，我当时也不养弓箭手，然后我就跟我同期玩的同学吐槽（当时还算是个啥都不懂的萌新呢，只有两个五星角色，一个莫娜一个万叶）她就给我来了一句精炼呗，我想着反正也不用弓，然后就精炼了，现在看到就有点心梗" 
          imageURL={multipleImages} navigation={navigation}/>
          
          <PostSection userName="火" userAvatar={require("../assets/profile.png")} postTime="11-11" 
          title="求带" imageURL={singleImage} navigation={navigation}/>
          <PostSection userName="可莉" userAvatar={require("../assets/profile.png")} postTime="11-11" title="炸鱼去喽" videoURL={videoPath} navigation={navigation}/>
          <PostSection title="Test User" contentText="This is a test post asdfasdfasdfasdfasdfasdfafasdfasdfasdfasdfafdadsfds" navigation={navigation}/>
          <PostSection title="Test User" contentText="This is a test post asdfasdfasdfasdfasdfasdfafasdfasdfasdfasdfafdadsfds" navigation={navigation}/> */}
        </ScrollView>
      </View>
      <Navbar/>
    </SafeAreaView>
  );
}


export default Home;