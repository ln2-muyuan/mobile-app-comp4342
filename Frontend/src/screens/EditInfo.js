import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';


const EditInfo = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleImageSelect = () => {
        launchImageLibrary({ mediaType: 'photo', includeBase64:true }, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
          } else {
            setSelectedImage(response.assets[0]);
          }
        });
    }

    const email = "08@qq.com";

    const uploadImage = async() => {
        const avatar = selectedImage.base64;
        await axios.post("http://10.0.2.2:8800/user/uploadAvatar", {email, avatar})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    
    return (
        <SafeAreaView>
            <Text style={{textAlign:"center", fontSize:20, fontWeight:"700", marginTop:20}}>
                Choose Avatar
            </Text>

            
            <View style={styles.container}>
                <TouchableOpacity style={styles.avatarContainer} onPress={handleImageSelect}>
                    {
                        selectedImage ?
                        (<Image
                            source={{uri: selectedImage.uri}}
                            style={styles.avatarImage}
                        />)
                        :
                        (<Image
                            source={require('../assets/default_avatar.png')}
                            style={styles.avatarImage}
                        />)
                    }
                </TouchableOpacity>
            </View>


            <View style={{marginTop:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity style={styles.button} onPress={uploadImage}>
                    <Text style={{textAlign: 'center', fontWeight: '700', color: '#fff'}}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:"#000"
    },
    avatarContainer: {
    //   width: 'auto',
    //   height: 'auto',
      justifyContent: 'center',
    //   alignItems: 'center',
    },
    avatarImage: {
      width: 120,
      height: 120,
      borderRadius: 75,
    },
    button:{
        marginTop:20,
        backgroundColor: '#83A2FF',
        padding: 15,
        borderRadius: 10,
        marginLeft:"auto",
        marginRight:"auto",
        width:"50%"
    }
  });

export default EditInfo;