import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabComponent from './components/Tab';
import AvailabilitySelector from './components/AvailabilitySelector';
// import the styled components

export default function App() {
  const handleIconPress = iconName => {
    setSelectedIcon(iconName);
  };

  const WeekdaySwitch = ({day}) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    return (
      <View style={styles.switchContainer}>
        <View
          style={{borderRadius: 20, borderColor: '#A3A3A3', borderWidth: 2}}>
          <ToggleSwitch
            isOn={isSwitchOn}
            onColor="#363534"
            offColor="#363534"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="small"
            onToggle={isOn => setIsSwitchOn(isOn)}
          />
        </View>
        <Text style={styles.weekdayText}>{day}</Text>
      </View>
    );
  };

  const weekdays = [
    'Everyday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <>
      <View style={styles.outerContainer}>
        <View
          style={{
            marginTop: 100,
            marginRight: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Add availability
            </Text>
            <Icon
              name={'calendar-month'}
              style={{fontSize: 20, marginLeft: 5, color: 'white'}}
              onPress={() => handleIconPress('call')}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Manrope-Regular',
              fontWeight: '500',
              color: 'white',
              fontSize: 14,
            }}>
            How you want to connect with people
          </Text>
        </View>
        <TabComponent />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 50,
          }}>
          <View>
            <Text style={{fontFamily: 'Manrope-Regular', marginLeft: 12}}>
              Duration (min)
            </Text>
            <TextInput style={styles.input} placeholder="5 min" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Manrope-Regular',
                marginLeft: 12,
              }}>
              Amount (₹)
            </Text>
            <TextInput style={styles.input} placeholder="₹ 30" />
          </View>
          <View style={{borderWidth: 1, borderColor: 'white', marginTop: 15}}>
            <Icon style={{fontSize: 15}} name={'add'} />
          </View>
        </View>
        <View style={styles.container}>
          <View style={{justifyContent: 'flex-start', marginTop: 40}}>
            <Text
              style={{
                fontFamily: 'Manrope-Medium',
                fontSize: 12,
                marginBottom: 20,
                color: 'white',
              }}>
              Set availability
            </Text>
            {weekdays.map((day, index) => (
              <WeekdaySwitch key={index} day={day} />
            ))}
          </View>
          <View style={{flexDirection: 'column'}}>
            <AvailabilitySelector />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  innerView: {
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    backgroundColor: '#363534',
    padding: 30,
  },
  innerContainer: {
    flexDirection: 'row',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-around',
  },
  outerContainer: {
    backgroundColor: '#363534',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  weekdayText: {
    fontFamily: 'Manrope-Medium',
    marginLeft: 20,
    color: '#A3A3A3',
    fontSize: 12,
  },
  dropdownButtonStyle: {
    width: 110,
    height: 45,
    backgroundColor: '#424949',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: 'white',
    borderWidth: 1,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 12,
    fontWeight: '200',
    color: 'white',
  },
  dropdownButtonArrowStyle: {
    fontSize: 24,
  },
  dropdownButtonIconStyle: {
    fontSize: 15,
    marginRight: 8,
    color: 'white',
  },
  dropdownButtonIcon: {
    fontSize: 50,
    color: 'white',
  },
  selectedIconView: {
    borderBottomColor: '#FFA07A',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  input: {
    height: 50,
    width: 140,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 8,
    fontFamily: 'Manrope',
    backgroundColor: '#737373',
  },
});
