import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleLogin = () => {
    console.log("email = ", email)
    console.log("password = ", password)
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 30}}>
        <Text style={styles.loginText}>Login</Text>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>
            Login
          </Text>
        </TouchableOpacity>
        
        <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
          <Text>New to the app  ?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color:"#39A7FF"}}> Register</Text>
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
    marginTop:50,
    backgroundColor: '#1640D6',
    padding: 15,
    borderRadius: 10,
    marginLeft:"auto",
    marginRight:"auto",
    width:"50%"
  },
});

export default Login;