import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import PushNotification from "react-native-push-notification";
import Home from './Home';
const Login = () => {
       
  return (
    <View>
      <Text>Login</Text>
      <Home />
    </View>
  )
}

export default Login