import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ImageGallery from './ImageGallery';

const PostSection = ({ userAvatar, userName, postTime, title, contentText, imageURL }) => {
  const hasImage = Boolean(imageURL);
  const hasText = Boolean(contentText);

  return (
    <View style={styles.container}>

      <View style={styles.userInfo}>
        <Image source={userAvatar} style={styles.avatar} />
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


      {hasImage && (
        <ImageGallery images={imageURL} />
      )}

    </View>
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
});

export default PostSection;