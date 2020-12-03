import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddressIcon from 'react-native-vector-icons/Entypo';
import PhoneIcon from 'react-native-vector-icons/Ionicons';
import MailIcon from 'react-native-vector-icons/AntDesign';
import AboutIcon from 'react-native-vector-icons/FontAwesome';

import Header from '../commonComponents/authenticComponentHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../commonComponents/Button';
import {ScrollView} from 'react-native-gesture-handler';

const index = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white '}}>
        <Header Title="Profile" navigation={navigation} page="Home" />
        <View style={styles.ProfileImag}>
          <Icon name="user" size={100} color="red" />
        </View>
        <Text style={styles.name}>Melisa</Text>
        <View style={styles.Icon}>
          <ScrollView horizontal>
            <Button
              type="facebook"
              radius={60}
              colorBody="white"
              height={40}
              url="http://facebook.com/"
            />
            <Text> </Text>
            <Button
              type="twitter"
              radius={60}
              colorBody="white"
              height={40}
              url="http://twittwe.com/"
            />
            <Text> </Text>
            <Button
              type="google"
              radius={60}
              colorBody="white"
              height={40}
              url="https://www.google.com/"
            />
            <Text> </Text>
            <Button
              type="Linkedin"
              radius={60}
              colorBody="white"
              height={40}
              url="https://in.linkedin.com/"
            />
          </ScrollView>
        </View>
        <View style={[styles.Labels, {top: 40}]}>
          <AddressIcon
            name="address"
            size={30}
            color="red"
            style={{top: 10, left: 10}}
          />
          <Text style={[styles.text, {top: 10, left: 10}]}>
            {' '}
            Munster, IN , USA{' '}
          </Text>
        </View>
        <View style={[styles.Labels, {top: 40}]}>
          <PhoneIcon
            name="call"
            size={30}
            color="red"
            style={{top: 10, left: 10}}
          />
          <Text style={[styles.text, {top: 10, left: 10}]}>123456789</Text>
        </View>
        <View style={[styles.Labels, {top: 40}]}>
          <MailIcon
            name="mail"
            size={30}
            color="red"
            style={{top: 10, left: 10}}
          />
          <Text style={[styles.text, {top: 10, left: 10}]}>
            Malisa@gmail.com
          </Text>
        </View>
        <View style={[styles.Labels, {top: 40}]}>
          <AboutIcon
            name="group"
            size={30}
            color="red"
            style={{top: 10, left: 10}}
          />
          <Text style={[styles.text, {top: 10, left: 10}]}>About</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ProfileImag: {
    top: 20,
    left: 20,
    backgroundColor: 'gray',
    width: 100,
    height: 100,
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
    padding: '0.5%',
  },
  name: {
    top: 23,
    left: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  Icon: {
    top: 28,
    left: 15,
  },
  Labels: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderTopColor: 'gray',
    borderWidth: 0.5,
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default index;
