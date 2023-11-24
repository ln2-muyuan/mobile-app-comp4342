import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Profile = ({navigation}) => {

  const [isLogin, setIsLogin] = useState(false);



  const avatar = useSelector((state) => state.avatar.avatar);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 25}}>



        { isLogin ? (
          <View style={{display:"flex", flexDirection:"row"}}>
            {/* <Image
              source={require('../assets/profile.png')}
              style={{ marginTop: 50, width: 100, height: 100, borderRadius: 50 }}
            /> */}
            {/* <Image 
              source={{uri: avatar}}
              style={{ marginTop: 50, width: 100, height: 100, borderRadius: 50 }}
            /> */}
            <Image 
              source={{uri:  `data:image/png;base64,${avatar}` }}
              style={{ marginTop: 50, width: 100, height: 100, borderRadius: 50 }}
            />
            <TouchableOpacity onPress={() =>navigation.navigate('EditInfo')}>
              <Image
                source={require('../assets/edit_icon.png')}
                style={{ width: 20, height: 20,  marginTop:'auto'}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flex:1, alignItems:"center"}}>

            <View style={{display:"flex", flexDirection:"row"}}>
              <Image
                source={require('../assets/profile.png')}
                style={{ marginTop: 50, width: 100, height: 100, borderRadius: 50 }}
              />
            </View>

            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10, color: "#1F1717" }}>
                Welcome to the App
            </Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
                <Text style={{fontSize:20, marginTop: 50, color: "#39A7FF"}}>Login</Text>
            </TouchableOpacity>
          </View>



        )}



        
        





        {/* <Button title="Go to Login Page" onPress={() => navigation.navigate('Login')} /> */}







      </ScrollView>


      <View>
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});



export default Profile;