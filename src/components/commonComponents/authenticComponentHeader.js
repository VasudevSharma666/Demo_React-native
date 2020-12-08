import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Back from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckConditon = ({Title, navigation}) => {
  switch (Title) {
    case 'Home': {
      return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{left: '3%'}}>
            <Icon name="menu-outline" size={40} color="white" left="20" />
          </View>
        </TouchableOpacity>
      );
    }
    default: {
      return (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{}}>
            <View style={{left: '3%'}}>
              <Back name="arrowleft" size={30} color="white" left="20" />
            </View>
          </TouchableOpacity>
          <View />
        </>
      );
    }
  }
};
const Header = ({Title, navigation}) => {
  return (
    <View style={styles.HeaderBlock}>
      <Text style={styles.Title}>{Title}</Text>
      <CheckConditon Title={Title} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderBlock: {
    backgroundColor: 'red',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
  },
  Title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: '16%',
  },
});

export default Header;
