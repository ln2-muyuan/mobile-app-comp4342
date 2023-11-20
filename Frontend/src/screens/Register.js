import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { register } from '../api/userApi';
import Toast from 'react-native-toast-message';

const Register = ({navigation}) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const handleRegister = async () => {
    register(username,password,email).then((res) => {
      Toast.show({
        type: 'success',
        text1: 'Register Success',
        text2: 'Your account register successfully👋'
      })
      navigation.navigate('Login')
    }).catch(e => {
      console.log(e)
      Toast.show({
        type: 'error',
        text1: 'Register Failed',
        text2: 'Your account register failed'
      })
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
        <Text style={styles.registerText}>Register</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" onChangeText={(text) => setEmail(text) }/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Username" onChangeText={(text) => setUsername(text) }/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
        </View>
        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <Text style={{textAlign: 'center', fontWeight: '700', color: '#fff'}}>
            Register
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
          <Text>Having a account already?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color:"#AD40AF", fontWeight:'700'}}> Login</Text>
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
  registerText: {
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
  registerButton: {
    marginTop:20,
    backgroundColor: '#AD40AF',
    padding: 15,
    borderRadius: 10,
    marginLeft:"auto",
    marginRight:"auto",
    width:"50%"
  },
});

export default Register;