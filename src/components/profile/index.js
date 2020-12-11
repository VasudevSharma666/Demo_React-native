import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image, Animated} from 'react-native';
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
  const scroll_Y = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scroll_Y, 0, 470);
  const translate_Y = diffClamp.interpolate({
    inputRange: [0, 470],
    outputRange: [0, -470],
  });

  useEffect(() => {
    fetch(BaseUrl + '/posts?userId=2')
      .then((response) => response.json())
      .then((json) => setJson(json))
      .catch((err) => Alert.alert('something is worng' + err));
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#D3D3D3'}}>
      <Header Title="Profile" navigation={navigation} page="Home" />
      <Animated.View
        style={[
          styles.tagBackground,
          {transform: [{translateY: translate_Y}]},
          {
            position: 'absolute',
            top: 55,
            elevation: 2,
            width: '100%',
          },
        ]}>
        <View style={styles.ProfileImag}>
          <Image
            source={ProfileDp}
            style={{width: 120, height: 120, borderRadius: 400 / 2}}
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
          <AddressIcon name="address" size={21} color="red" />
          <Text style={[styles.text, {left: 10}]}> Munster, IN , USA </Text>
        </View>
        <View style={[styles.Labels]}>
          <PhoneIcon name="call" size={20} color="red" style={{left: -30}} />
          <Text style={[styles.text, {left: -20}]}>123456789</Text>
        </View>
        <View style={styles.Labels}>
          <MailIcon name="mail" size={20} color="red" />
          <Text style={[styles.text, {left: 15}]}>Malisa@gmail.com</Text>
        </View>
        <View style={[styles.Labels]}>
          <AboutIcon name="group" size={20} color="red" style={{left: -58}} />
          <Text style={[styles.text, {left: -45}]}>About</Text>
        </View>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          scroll_Y.setValue(e.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={{marginTop: 400}}>
        {json.length == 0 ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          json.map((json, index) => (
            <View key={index} style={{width: '90%', alignSelf: 'center'}}>
              <PostsContainer json={json} />
            </View>
          ))
        )}
      </Animated.ScrollView>
    </View>
  );
};

export default index;
