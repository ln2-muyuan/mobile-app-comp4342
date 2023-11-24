import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import ImageGallery from './ImageGallery';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';

const PostSection = ({ userAvatar, userName, postTime, title, contentText, imageURL, videoURL ,navigation, location }) => {
  console.log('location = ', location);
  const hasImage = Boolean(imageURL);
  const hasText = Boolean(contentText);
  const hasVideo = Boolean(videoURL);
  const [paused, setPaused] = React.useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoPlayer = useRef(null);

  const handlePress = () => {
    navigation.navigate('PostDetails', {
      userName,
      userAvatar,
      postTime,
      title,
      contentText,
      imageURL,
      videoURL,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>

      <View style={styles.userInfo}>
        <Image source={{uri:  `data:image/png;base64,${userAvatar}` }} style={styles.avatar} />
        <View style={flexDirection = 'column'}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.postTime}>{postTime}</Text>
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {hasText ? (
        <Text style={styles.contentText} numberOfLines={2} ellipsizeMode="tail">{contentText}</Text>
      ) : (
        <Text style={styles.blank}></Text>
      )}

      {hasVideo && (
        <>
          <TouchableWithoutFeedback onPress={() => setPaused(!paused)}>
            <View style={styles.videoWrapper}>
              <Video 
                ref={videoPlayer}
                source={videoURL}
                style={styles.video} 
                resizeMode="cover" 
                repeat={true} 
                paused={paused}
                onProgress={({ currentTime, playableDuration }) => {
                  setProgress(currentTime);
                  setDuration(playableDuration);
                }}
               />
              {paused && (
                <View style={styles.overlay}>
                  <Icon name="step-forward" size={60} color="#FFF" />
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
          
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={progress / duration}
            onSlidingComplete={value => {
              videoPlayer.current.seek(value * duration);
            }}
          />
        </>
      )}

      {hasImage && (
        <ImageGallery images={imageURL} />
      )}
      {
        location? <Text style={{fontSize:14,marginTop:10}} numberOfLines={2} ellipsizeMode="tail"><Text style={{color:"#000",fontWeight:"500"}}>Location:</Text> {location}</Text>:<Text style={styles.blank}></Text>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    margin: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: '#0F0F0F',
    fontSize: 16,
  },
  postTime: {
    fontSize: 12,
    color: 'gray',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    color: '#0F0F0F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 14,
    marginBottom: 10,
  },
  blank: {
    fontSize: 5,
  },
  slider: {
    width: '100%', 
    height: 40
  },
  video: {
    width: '100%', 
    height: 300, 
  },
  videoWrapper: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -40}, {translateY: -40}], 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 50,
    width: 70,
    height: 80,
  },

});

export default PostSection;