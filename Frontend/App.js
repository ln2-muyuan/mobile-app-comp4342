import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Post from './src/screens/Post';
import EditUserInfo from './src/screens/EditUserInfo';
import PostDetails from './src/screens/PostDetails';
import Toast from 'react-native-toast-message';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PostDetails" options={{headerShown:false}} component={PostDetails} /> 
        <Stack.Screen name="Profile" options={{headerShown:false}} component={Profile} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Register" options={{headerShown:false}} component={Register} />
        <Stack.Screen name="Post" options={{headerShown:false}} component={Post} />
        <Stack.Screen name="EditUserInfo" options={{headerShown:true, title:"Upload Avatar"}} component={EditUserInfo} />
      </Stack.Navigator>
      <Toast></Toast>
    </NavigationContainer>
  );
}


export default App;
