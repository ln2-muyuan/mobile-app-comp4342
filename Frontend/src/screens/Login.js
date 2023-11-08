import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.loginButton}>
          <Text style={{textAlign: 'center', fontWeight: '700', color: '#fff'}}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:"20"}}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => {}}>
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
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
});

export default Login;
