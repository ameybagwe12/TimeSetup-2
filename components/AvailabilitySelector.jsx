import {View, Text} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AvailabilitySelector() {
  const emojisWithIcons = [
    {title: '10:00 AM'},
    {title: '11:00 AM'},
    {title: '12:00 PM'},
    {title: '13:00 PM'},
    {title: '14:00 PM'},
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          marginTop: 70,
        }}>
        <SelectDropdown
          data={emojisWithIcons}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || '9:00 AM'}
                </Text>
                <Icon
                  name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  style={styles.dropdownButtonIconStyle}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: 'grey'}),
                }}>
                <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
        <Text style={{marginHorizontal: 10, marginTop: 15}}>to</Text>
        <SelectDropdown
          data={emojisWithIcons}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || '9:00 AM'}
                </Text>
                <Icon
                  name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  style={styles.dropdownButtonIconStyle}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: 'grey'}),
                }}>
                <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <SelectDropdown
          data={emojisWithIcons}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || 'Start'}
                </Text>
                <Icon
                  name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  style={styles.dropdownButtonIconStyle}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: 'grey'}),
                }}>
                <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
        <Text style={{marginHorizontal: 10, marginTop: 15}}>to</Text>
        <SelectDropdown
          data={emojisWithIcons}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || 'End'}
                </Text>
                <Icon
                  name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  style={styles.dropdownButtonIconStyle}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: 'grey'}),
                }}>
                <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>
      <Text
        style={{
          fontFamily: 'ManRope',
          color: '#A3A3A3',
          alignSelf: 'center',
          paddingTop: 90,
        }}>
        Unavailable
      </Text>
    </View>
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
    marginLeft: 20,
    color: 'white',
    fontSize: 10,
  },
  dropdownButtonStyle: {
    width: 110,
    height: 45,
    backgroundColor: '#737373',
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
    fontFamily: 'Manrope-Medium',
    color: '#A3A3A3',
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
    color: 'white',
    backgroundColor: '#424949',
  },
});
