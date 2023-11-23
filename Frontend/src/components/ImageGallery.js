import React from 'react';
import { View, Image, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { useState } from 'react';

const ImageGallery = ({ images }) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  if (images.length === 1) {
    return (
      <View style={styles.wrapperForSingle}>
      <TouchableOpacity onPress={() => {setModalVisible(true)}}>
        <Image source={{ uri: `data:image/png;base64,${images[0]}` }} style={styles.singleImage} />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={false}>
        <ImageViewer imageUrls={[{ url: `data:image/png;base64,${images[0]}` }]} onClick={() => setModalVisible(false)}/>
      </Modal>
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
          <View style={styles.wrapperForDouble}>
            <TouchableOpacity onPress={() => {setSelectedImageIndex(index); setModalVisible(true)}}>  
              <Image key={image.id} source={{ uri: `data:image/png;base64,${image}` }} style={styles.doubleImage}/>
            </TouchableOpacity>

            <Modal visible={(selectedImageIndex === index) && modalVisible} transparent={false}>
              {/* <ImageViewer
                imageUrls={displayedImagesList.map((img) => ({ props: { source: img.image } }))}
                index={selectedImageIndex}
                onCancel={() => setSelectedImageIndex(null)}
              /> */}
              <ImageViewer imageUrls = {displayedImagesList.map((img) => ({ url: `data:image/png;base64,${img}` }))} index={selectedImageIndex} onCancel={() => setSelectedImageIndex(null)} onClick={() => setModalVisible(false)}/> 
           </Modal>
          </View>
        ))} 
    </View>
  );
};


const styles = StyleSheet.create({
    wrapperForSingle: {
      width: '80%',
      height: 300
    },
    singleImage: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    doubleImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    wrapperForDouble: {
        width: '49%',
        height: 240,
        borderRadius: 8,
      },
    doubleImage: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
  });

export default ImageGallery;