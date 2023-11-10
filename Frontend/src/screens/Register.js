import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';


const Register = ({navigation}) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')



  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 30}}>
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

        <TouchableOpacity onPress={()=>{}} style={styles.registerButton}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>
            Register
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
          <Text>Already have an account ?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color:"#39A7FF"}}> Login</Text>
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
    marginTop:50,
    backgroundColor: '#1640D6',
    padding: 15,
    borderRadius: 10,
    marginLeft:"auto",
    marginRight:"auto",
    width:"50%"
  },
});

export default Register;