import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const ImageGallery = ({ images }) => {

  if (images.length === 1) {
    return (
        <View>
            <Image source={images[0]} style={styles.singleImage} />
        </View>
    );
  }

  const displayedImagesList = images.slice(0, 2);
  const displayedImages = displayedImagesList.map((image) => (
    <Image source={image} style={styles.doubleImage} />
  ));

  return (
    <View style={styles.doubleImageContainer}>
        {displayedImages}
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
    doubleImage: {
      width: '49%',
      height: 200,
      borderRadius: 8,
    },
  });

export default ImageGallery;