import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import ImageGallery from '../components/ImageGallery';
import ImageViewer from 'react-native-image-zoom-viewer';
import { useState } from 'react';


const PostPageDetails = (props) => {
    const { userName, userAvatar, postTime, title, contentText, imageURL } = props.route.params;
    const hasText = contentText !== '';
    const hasImage = imageURL.length > 0;
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <ScrollView style={styles.container}>
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
            <Text style={styles.contentText}>{contentText}</Text>
        ) : (
            <Text style={styles.blank}></Text>
        )}


        {hasImage && (
             <View style={styles.doubleImageContainer}>
             {imageURL.map((image, index) => (
               <View style={styles.wrapperForDouble}>
                 <TouchableOpacity onPress={() => {setSelectedImageIndex(index); setModalVisible(true)}}>  
                   <Image key={image.id} source={{ uri: `data:image/png;base64,${image}` }} style={styles.doubleImage}/>
                 </TouchableOpacity>
                 <Modal visible={(selectedImageIndex === index) && modalVisible} transparent={false}>
                   <ImageViewer imageUrls = {imageURL.map((img) => ({ url: `data:image/png;base64,${img}` }))} index={selectedImageIndex} onCancel={() => setSelectedImageIndex(null)} onClick={() => setModalVisible(false)}/> 
                </Modal>
               </View>
             ))} 
         </View>
        )}
        </ScrollView>
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    contentText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#0F0F0F',
        marginBottom: 20,
    },
    blank: {
        height: 0,
    },



    doubleImageContainer: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    wrapperForDouble: {
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
    doubleImage: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginBottom: 10,
    }
});

export default PostPageDetails;