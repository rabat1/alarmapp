import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import PushNotification from "react-native-push-notification";


const Home = () => {
    const handleNotification=(name)=>{
            PushNotification.cancelAllLocalNotifications(); //if new notice come remove previous one

            PushNotification.localNotification({
                channelId:'test-channel',
                title:'haha '+name,
                message:"yaar",
               // channelName:'Test',
               bigText:'hshs shdhd hdhdh shshshshs hfyhyyyyysbgds shdhdhdh dhdyycytsysfff',
               color:'red',
            });
            PushNotification.localNotificationSchedule({
                channelId:'test-channel',
                title:'Alarm',
                message:"yaar",
                date: new Date(Date.now()+ 10 *1000),
                allowWhileIdle:true,
            });
    }
  return (
    <TouchableOpacity onPress={()=>handleNotification('Rabat')}>
      <Text>Home</Text>
    </TouchableOpacity>
  )
}

export default Home