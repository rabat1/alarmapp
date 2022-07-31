import { View, Text,TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react';
import PushNotification from "react-native-push-notification";
import DateTimePicker from '@react-native-community/datetimepicker';

const Home = () => {

  useEffect(()=>{
    createChannels();
},[]);

const createChannels=()=>{
PushNotification.createChannel({
channelId:'test-channel',
channelName:'Test Channel',
});
}

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({date:new Date()});
  const showDatepicker = () => {
    setShow(true);
  };
  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    console.log(value);
  
  };


    const handleNotification=(name)=>{
            PushNotification.cancelAllLocalNotifications(); //if new notice come remove previous one
console.log('het',new Date(Date.now()));
            // PushNotification.localNotification({
            //     channelId:'test-channel',
            //     title:'haha '+name,
            //     message:"yaar",
            //    // channelName:'Test',
            //    bigText:'hshs shdhd hdhdh shshshshs hfyhyyyyysbgds shdhdhdh dhdyycytsysfff',
            //    color:'red',
            // });
            PushNotification.localNotificationSchedule({
                channelId:'test-channel',
                title:form.reminderTitle,
                message:form.reminder,
                date: new Date(form.date),
                allowWhileIdle:true,
            });
    }
  return (
    <>
    <TouchableOpacity onPress={()=>handleNotification('Rabat')}>
      <Text>Submit</Text>
      </TouchableOpacity>
      <TextInput style={{ color: 'black' }} placeholder='Select Date' editable={false} label='Date*' value={(form.date).toDateString() || ''} iconPosition='left'
        />
          <TouchableOpacity onPress={showDatepicker}><Text>Enter Date</Text></TouchableOpacity>
         

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          display="calendar"
          onChange={(valuew) => {
            setShow(false)
            onChangeText({ name: 'date', value: (valuew.nativeEvent.timestamp) })
          }}
        />
      )}

<TextInput style={{ color: 'black' }} placeholder='Enter Reminder' 
onChangeText={(value)=>onChangeText({name:'reminder',value:value})}
        />
        
<TextInput style={{ color: 'black' }} placeholder='Enter Reminder Title' 
onChangeText={(value)=>onChangeText({name:'reminderTitle',value:value})}
        />

    
</>

  )
}

export default Home