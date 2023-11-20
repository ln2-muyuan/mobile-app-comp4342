import React, { useState } from 'react';
import * as Keychain from "react-native-keychain";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { login } from '../api/userApi';
import Toast from 'react-native-toast-message';

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleLogin = () => {
    login(email,password).then(async (res) => {
      const token = res.token
      await Keychain.setGenericPassword(email, token);
      Toast.show({
        type: 'success',
        text1: 'Login Success',
        text2: 'Your account login successfully'
      })
      navigation.navigate('Home')
    }).catch((e) => {
      const errorMessage = JSON.parse(e.message)
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: errorMessage.message
      })
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={{textAlign: 'center', fontWeight: '700', color: '#fff'}}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color:"#AD40AF", fontWeight:'700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
    marginLeft:"auto",
    marginRight:"auto"
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  loginButton: {
    marginTop:20,
    backgroundColor: '#AD40AF',
    padding: 15,
    borderRadius: 10,
    marginLeft:"auto",
    marginRight:"auto",
    width:"50%"
  },
});

export default Login;
