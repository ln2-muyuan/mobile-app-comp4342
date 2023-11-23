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
        <Image source={{uri: `data:image/png;base64,${userAvatar}`}} style={styles.avatar}/>
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
           <Image source={{uri: `data:image/png;base64,${image.image ? image.image : image}`}} style={styles.image}/>
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
          <Image source={{uri: `data:image/png;base64,${selectedImage}`}} style={{...StyleSheet.absoluteFillObject, width: '100%', height: '100%', resizeMode: 'contain' }} />
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 40, 
  },
  userName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },
  postTime: {
    fontSize: 14,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
    marginVertical: 15,
    marginLeft: 15,
    marginBottom: 15,
    color: '#000',
  },
  content: {
    fontSize: 19,
    marginBottom: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  video: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  
});

export default PostDetails;