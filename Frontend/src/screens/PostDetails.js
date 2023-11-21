import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Navbar from '../components/Navbar';

const PostDetails = ({ route, navigation }) => {
  const { userName, userAvatar, postTime, title, contentText, imageURL, videoURL } = route.params;

  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Image source={userAvatar} style={styles.avatar}/>
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.postTime}>{postTime}</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{contentText}</Text>

      {imageURL && imageURL.length > 0 && (
        imageURL.map((image, index) => (
         <TouchableOpacity key={index} onPress={() => {setSelectedImage(image.image ? image.image : image); setModalVisible(true);}}>
           <Image source={image.image ? image.image : image} style={styles.image}/>
         </TouchableOpacity>
        ))
      )}

      {videoURL && (
        <Video source={videoURL} 
         rate={1.0}
         volume={1.0}
         isMuted={false}
         resizeMode="cover"
         shouldPlay
         isLooping
         style={styles.video}
         paused={true}
         controls
        />
      )}
      </ScrollView>
      <Navbar/>

      <Modal visible={modalVisible} transparent={true}>
        <TouchableOpacity style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.9)'}} onPress={() => setModalVisible(false)}>
          <Image source={selectedImage} style={{...StyleSheet.absoluteFillObject, width: '100%', height: '100%', resizeMode: 'contain' }} />
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 20,
    color: '#666',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  content: {
    fontSize: 17,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  
});

export default PostDetails;