import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
        <Text style={styles.registerText}>Register</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Nickname" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.registerButton}>
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