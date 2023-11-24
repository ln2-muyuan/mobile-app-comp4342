import React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Profile from './src/screens/Profile';
import EditInfo from './src/screens/EditInfo';
import Post from './src/screens/Post';
import PostPageDetails from './src/screens/PostPageDetails';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
          <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Post" component={Post} />
          <Stack.Screen options={{ headerShown: false }} name="PostPageDetails" component={PostPageDetails} />
          <Stack.Screen options={{ headerShown: true, title:"Upload Avatar" }}  name="EditInfo" component={EditInfo} />
        </Stack.Navigator>

        {/* REMEMBER TO ADD TOAST HERE */}
        <Toast></Toast>

      </NavigationContainer>
    </Provider>
  );
}


export default App;
