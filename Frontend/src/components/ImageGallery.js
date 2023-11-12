import React from 'react';
import { View, Image, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { useState } from 'react';

const ImageGallery = ({ images }) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  if (images.length === 1) {
    return (
        <View>
            <Image source={images[0]} style={styles.singleImage} />
        </View>
    );
  }


  
  const displayedImagesList = images.slice(0, 2);
  // const displayedImages = displayedImagesList.map((image) => (
  //   <Image key={image.id} source={image.image} style={styles.doubleImage} />
  // ));

  return (
    // <View style={styles.doubleImageContainer}>
    //     {displayedImages}
    // </View>
    <View style={styles.doubleImageContainer}>
        {displayedImagesList.map((image, index) => (
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => {setSelectedImageIndex(index); setModalVisible(true)}}>  
              <Image key={image.id} source={image.image} style={styles.doubleImage}/>
            </TouchableOpacity>

            <Modal visible={(selectedImageIndex === index) && modalVisible} transparent={false}>
              <ImageViewer
                imageUrls={displayedImagesList.map((img) => ({ props: { source: img.image } }))}
                index={selectedImageIndex}
                onCancel={() => setSelectedImageIndex(null)}
              />
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.text}>Close</Text>
              </TouchableOpacity>
           </Modal>

          </View>
        ))} 
    </View>
  );
};


const styles = StyleSheet.create({
    singleImage: {
      width: '60%',
      height: 300,
      borderRadius: 8,
    },
    doubleImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    wrapper: {
        width: '49%',
        height: 200,
        borderRadius: 8,
      },
    doubleImage: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'black',
      borderRadius: 8,
      padding: 8,
      margin: 16,
    }
  });

export default ImageGallery;