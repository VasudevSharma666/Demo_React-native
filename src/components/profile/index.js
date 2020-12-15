import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Animated,
  Linking,
} from 'react-native';
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
import {basicComponentsTwo, basicComponentsOne} from '../../constants/color';
import {Api} from '../../store/api/operation';
import {useDispatch, useSelector} from 'react-redux';
const index = ({navigation}) => {
  const [json, setJson] = useState([]);
  const ApiData = useSelector((state) => state.Api);
  const dispatch = useDispatch();
  const scroll_Y = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scroll_Y, 0, 400);
  const translate_Y = diffClamp.interpolate({
    inputRange: [0, 400],
    outputRange: [0, -400],
  });

  useEffect(() => {
    dispatch(Api('/posts?userId=1', 'profile'));
  }, []);
  useEffect(() => {
    setJson(ApiData.json.profile);
  }, [ApiData.json.profile]);

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
              style={{
                borderRadius: 60,
                height: 70,
                backgroundColor: basicComponentsTwo,
              }}
              onPress={() => Linking.openURL('http://facebook.com/')}
            />
            <Text> </Text>
            <Button
              type="twitter"
              style={{
                borderRadius: 60,
                height: 70,
                backgroundColor: basicComponentsTwo,
              }}
              onPress={() => Linking.openURL('http://twittwe.com/')}
            />
            <Text> </Text>
            <Button
              type="google"
              style={{
                borderRadius: 60,
                height: 70,
                backgroundColor: basicComponentsTwo,
              }}
              onPress={() => Linking.openURL('https://www.google.com/')}
            />
            <Text> </Text>
            <Button
              type="Linkedin"
              style={{
                borderRadius: 60,
                height: 70,
                backgroundColor: basicComponentsTwo,
              }}
              onPress={() => Linking.openURL('https://in.linkedin.com/')}
            />
          </ScrollView>
        </View>
        <View style={[styles.Labels]}>
          <AddressIcon name="address" size={21} color={basicComponentsOne} />
          <Text style={[styles.text, {left: 10}]}> Munster, IN , USA </Text>
        </View>
        <View style={[styles.Labels]}>
          <PhoneIcon
            name="call"
            size={20}
            color={basicComponentsOne}
            style={{left: -30}}
          />
          <Text style={[styles.text, {left: -20}]}>123456789</Text>
        </View>
        <View style={styles.Labels}>
          <MailIcon name="mail" size={20} color={basicComponentsOne} />
          <Text style={[styles.text, {left: 15}]}>Malisa@gmail.com</Text>
        </View>
        <View style={[styles.Labels]}>
          <AboutIcon
            name="group"
            size={20}
            color={basicComponentsOne}
            style={{left: -58}}
          />
          <Text style={[styles.text, {left: -45}]}>About</Text>
        </View>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          scroll_Y.setValue(e.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={{marginTop: 390}}>
        {json.length == 0 ? (
          <ActivityIndicator size="large" color={basicComponentsOne} />
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
