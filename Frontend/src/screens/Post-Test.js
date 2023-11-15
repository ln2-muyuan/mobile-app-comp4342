// import React, { useState } from 'react';
// import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// const PostScreen = ({navigation}) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handlePost = () => {
//     console.log('Title:', title);
//     console.log('Content:', content);
//     console.log('Selected Image:', selectedImage);
//   };


//   const handleImageSelect = () => {
//     console.log('Select Image');

//     // launchImageLibrary({ mediaType: 'photo', includeBase64:true }, (response) => {
//     //   if (response.didCancel) {
//     //     console.log('User cancelled image picker');
//     //   } else if (response.errorCode) {
//     //     console.log('ImagePicker Error: ', response.errorMessage);
//     //   } else {
//     //     setNewImage(response.assets[0]);
//     //   }
//     // });
// }



//   return (
//     <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 10 }}>
//       {/* Navigation Bar */}
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
//         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//             <Image source={require('../assets/left.png')} style={styles.leftImage} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handlePost}>
//           <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10 }}>
//             Post
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Title and Content Input */}
//       <View style={{ paddingHorizontal: 10 }}>
//         <TextInput
//           placeholder="Title (Required)"
//           value={title}
//           onChangeText={setTitle}
//           style={{ fontSize: 20, fontWeight: 'bold' }}
//         />
//         <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginVertical: 5 }} />
//         <TextInput
//           placeholder="Enter content"
//           value={content}
//           onChangeText={setContent}
//           multiline
//           style={{ fontSize: 16 }}
//         />
//       </View>







//       {/* Image Selection */}
//       <TouchableOpacity onPress={handleImageSelect} style={{ alignItems: 'center', flex: 1 }}>
//         <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10, marginTop: 10 }}>
//           Select Image
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// styles = StyleSheet.create({
//   leftImage: {
//     width: 40,
//     height: 40,
//   },
// });


// export default PostScreen;