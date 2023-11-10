import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostSection = ({ username, postText, imageURL }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.postText}>{postText}</Text>
        {/* <Image source={{ uri: imageURL }} style={styles.image} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  content: {
    marginBottom: 10,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});

export default PostSection;