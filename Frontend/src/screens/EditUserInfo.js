import React, {useEffect} from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';
import addIcon from '../assets/add.png';
import { updateUserInfo } from '../api/userApi';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setAvatar } from '../store/avatarSlice';
import EncryptedStorage from 'react-native-encrypted-storage';


const EditUserInfo = ({navigation}) => {
    const [newImage, setNewImage] = React.useState(null);
    const [userEmail, setUserEmail] = React.useState(null);
    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo', includeBase64:true }, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
          } else {
            setNewImage(response.assets[0]);
          }
        });
    }

    const dispatch = useDispatch();
    
    useEffect(() => {
        //get userSession
        async function fetchUserInfo() {
            try {
              const userSession = await EncryptedStorage.getItem('userSession');
              if (userSession !== null) {
                const userSessionObj = JSON.parse(userSession);
                const token = userSessionObj.token;
                const name = userSessionObj.name;
                const email = userSessionObj.email;
                setUserEmail(email);
              }
              else {
                console.log("no user session");
              }
            } catch (error) {
              console.log(error);
            }
        }
        fetchUserInfo();
    },[])
    const uploadImage = async () => {
        if(!newImage) return;
        updateUserInfo(userEmail, `${newImage.base64}`).then(res => {
            console.log("success");
            Toast.show({
                type: 'success',
                text1: 'Upload Success',
                text2: 'Your avatar upload successfully👋'
            });
            dispatch(setAvatar(newImage.base64));
        }).catch(err => {
            Toast.show({
                type: 'error',
                text1: 'Upload Failed',
                text2: 'Your avatar upload failed👋'
            });
        })
    }

    return (
        <SafeAreaView>
            <Text style={{textAlign:"center", fontSize:20, fontWeight:"700", marginTop:20}}>
                Upload Your Avatar
            </Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.avatarContainer} onPress={selectImage}>
                    {
                        newImage ?
                        (<Image
                            source={{uri: newImage? `data:${newImage.type};base64,${newImage.base64}` : ""}}
                            style={styles.avatarImage}
                        />)
                        :
                        (<Image
                            source={addIcon}
                            style={styles.avatarImage}
                        />)
                    }
                </TouchableOpacity>
            </View>
            <View style={{marginTop:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity style={styles.button} onPress={uploadImage}>
                    <Text style={{textAlign: 'center', fontWeight: '700', color: '#fff'}}>
                        Upload
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
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: '#e1e1e1',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    button:{
        marginTop:20,
        backgroundColor: '#AD40AF',
        padding: 15,
        borderRadius: 10,
        marginLeft:"auto",
        marginRight:"auto",
        width:"50%"
    }
  });

export default EditUserInfo;