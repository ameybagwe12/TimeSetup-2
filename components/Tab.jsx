import React, {useState} from 'react';
import {Tab} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
export default function TabComponent() {
  const [index, setIndex] = React.useState(0);

  return (
    <Tab
      style={[
        styles.tab,
        {
          borderBottomColor: index === 0 ? 'grey' : 'white', // Initial state border color
        },
      ]}
      value={index}
      onChange={setIndex}
      scrollable={false}
      variant="orange"
      indicatorStyle={{
        backgroundColor: '#F6A013',
        height: 3,
      }}
      dense>
      <Tab.Item
        titleStyle={{color: index === 0 ? '#F6A013' : 'white'}}
        icon={() => (
          <Icon
            name={'call'}
            style={[
              styles.dropdownButtonIcon,
              index === 0 && {color: '#F6A013'},
            ]}
          />
        )}
      />
      <Tab.Item
        titleStyle={{color: index === 1 ? '#F6A013' : 'white'}}
        icon={() => (
          <Icon
            name={'videocam'}
            style={[
              styles.dropdownButtonIcon,
              index === 1 && {color: '#F6A013'},
            ]}
          />
        )}
      />
      <Tab.Item
        titleStyle={{color: index === 2 ? '#F6A013' : 'white'}}
        icon={() => (
          <Icon
            name={'comment'}
            style={[
              styles.dropdownButtonIcon,
              index === 2 && {color: '#F6A013'},
            ]}
          />
        )}
      />
    </Tab>
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
  tab: {
    margin: 20,
    borderBottomWidth: 0.2,
  },
  dropdownButtonIcon: {
    fontSize: 50,
    color: 'white',
  },
});
