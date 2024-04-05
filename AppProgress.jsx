import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';

export default function AppProgress() {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [remainingTime, setRemainingTime] = useState(1800);

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

        <Text
          style={{
            color: '#F76314',
            fontWeight: 'bold',
            marginTop: 50,
            fontSize: 25,
          }}>
          Amey Bagwe
        </Text>
        <Text style={{fontWeight: 'bold'}}>
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
