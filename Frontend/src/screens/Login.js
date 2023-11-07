import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{paddingHorizontal:25}}>
            <Text style={styles.loginText}>Login</Text>
            <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:1}}>
                <TextInput placeholder='Username'/>
            </View>
            <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:1}}>
                <TextInput placeholder='Password' secureTextEntry={true}/>
            </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"center",
    },
    loginText:{
        fontSize:28,
        fontWeight:"500",
        color:"#333",
        marginBottom:30
    }
  });
  
  export default Login;