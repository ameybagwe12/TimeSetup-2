import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';
import GradientText from './components/GradientText';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const channelId = 'default-channel-id';

export default function AppProgress() {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [remainingTime, setRemainingTime] = useState(1800);
  const [message, setMessage] = useState('');

  async function requestUserPermission() {
    try {
      await messaging().requestPermission();
      console.log('Notification permission granted');
    } catch (error) {
      console.log('Notification permission denied');
    }
  }

  async function getToken() {
    try {
      const token = await messaging().getToken();
      console.log('Token:', token);
      return token;
    } catch (error) {
      console.log('Error getting token:', error);
      return null;
    }
  }

  useEffect(() => {
    requestUserPermission();
    getToken();
    PushNotification.channelExists(channelId, exists => {
      if (!exists) {
        PushNotification.createChannel({
          channelId: channelId,
          channelName: 'Default Channel',
          channelDescription: 'A default channel for notifications',
          soundName: 'default',
          importance: 4,
          vibrate: true,
        });
      }
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
      PushNotification.localNotification({
        channelId: channelId,
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
      });
      setMessage(remoteMessage);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
        setMinutes(Math.floor(remainingTime / 60));
        setSeconds(remainingTime % 60);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 200,
        }}>
        <AnimatedCircularProgress
          size={200}
          width={5}
          fill={(remainingTime / 1800) * 100} // Update fill based on remainingTime
          tintColor="grey"
          rotation={90}
          backgroundColor="#FA8031"
          padding={10}
          renderCap={({center}) => (
            <Circle cx={center.x} cy={center.y} r="8" fill="white" />
          )}
          arcSweepAngle={360}
        />

        <View style={{position: 'relative', marginTop: -165}}>
          <Image
            style={{width: 120, height: 120, borderRadius: 100}}
            source={require('./Amey_Image.jpg')}
          />
        </View>
        <View
          style={{
            marginTop: 50,
            justifyContent: 'center',
            alignSelf: 'center',
            marginLeft: '15%',
          }}>
          <GradientText text="Amey Bagwe" colors={['#FD5F47', '#F6BF25']} />
        </View>
        <Text style={{color: 'white', fontFamily: 'Manrope-SemiBold'}}>
          {minutes > 0 ? ` ${String(minutes).padStart(2, '0')}:` : '00:'}
          {seconds > 0 ? `${String(seconds).padStart(2, '0')}min` : '00min'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <View style={{backgroundColor: 'grey', borderRadius: 100, padding: 5}}>
          <MaterialIcons name="volume-up" size={40} color="white" />
        </View>
        <View style={{backgroundColor: 'grey', borderRadius: 100, padding: 5}}>
          <MaterialIcons name="mic-off" size={40} color="white" />
        </View>
        <View style={{backgroundColor: 'red', borderRadius: 100, padding: 5}}>
          <MaterialIcons name="call-end" size={40} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}
