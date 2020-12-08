import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import AddressIcon from 'react-native-vector-icons/Entypo';
import PhoneIcon from 'react-native-vector-icons/Ionicons';
import MailIcon from 'react-native-vector-icons/AntDesign';
import AboutIcon from 'react-native-vector-icons/FontAwesome';

import {styles} from './style';
import Header from '../commonComponents/authenticComponentHeader';
import {ProfileDp} from '../../constants/image';
import Button from '../commonComponents/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {BaseUrl} from '../../utils/Urls';
import PostsContainer from '../commonComponents/PostsCard';

const index = ({navigation}) => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    fetch(BaseUrl + '/posts?userId=2')
      .then((response) => response.json())
      .then((json) => setJson(json))
      .catch((err) => Alert.alert('something is worng' + err));
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#D3D3D3'}}>
      <View style={styles.tagBackground}>
        <Header Title="Profile" navigation={navigation} page="Home" />
        <View style={styles.ProfileImag}>
          <Image
            source={ProfileDp}
            style={{width: 100, height: 100, borderRadius: 400 / 2}}
          />
        </View>
        <Text style={styles.name}>Melisa</Text>
        <View style={styles.Icon}>
          <ScrollView horizontal>
            <Button
              type="facebook"
              radius={60}
              colorBody="white"
              height={70}
              url="http://facebook.com/"
              value=""
            />
            <Text> </Text>
            <Button
              type="twitter"
              radius={60}
              colorBody="white"
              height={70}
              url="http://twittwe.com/"
            />
            <Text> </Text>
            <Button
              type="google"
              radius={60}
              colorBody="white"
              height={70}
              url="https://www.google.com/"
            />
            <Text> </Text>
            <Button
              type="Linkedin"
              radius={60}
              colorBody="white"
              height={70}
              url="https://in.linkedin.com/"
            />
          </ScrollView>
        </View>
        <View style={[styles.Labels]}>
          <AddressIcon
            name="address"
            size={20}
            color="red"
            style={{top: 10, left: 10}}
          />
          <Text style={[styles.text, {top: 10, left: 10}]}>
            {' '}
            Munster, IN , USA{' '}
          </Text>
        </View>
        <View style={[styles.Labels]}>
          <PhoneIcon
            name="call"
            size={20}
            color="red"
            style={{top: 10, left: 10}}
          />
          <Text style={[styles.text, {top: 10, left: 10}]}>123456789</Text>
        </View>
        <View style={styles.Labels}>
          <MailIcon
            name="mail"
            size={20}
            color="red"
            style={{top: 10, left: 10}}
          />
          <Text style={[styles.text, {top: 10, left: 10}]}>
            Malisa@gmail.com
          </Text>
        </View>
        <View style={[styles.Labels]}>
          <AboutIcon
            name="group"
            size={20}
            color="red"
            style={{top: 10, left: 10}}
          />
          <Text style={[styles.text, {top: 10, left: 10}]}>About</Text>
        </View>
      </View>
      <View style={styles.PostsCont}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {json.length == 0 ? (
            <ActivityIndicator size="large" color="red" />
          ) : (
            json.map((json, index) => (
              <View key={index}>
                <PostsContainer json={json} />
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
