import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Animated,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AddressIcon from 'react-native-vector-icons/Entypo';
import PhoneIcon from 'react-native-vector-icons/Ionicons';
import MailIcon from 'react-native-vector-icons/AntDesign';
import AboutIcon from 'react-native-vector-icons/FontAwesome';

import {styles} from './style';
import Header from '../commonComponents/authenticComponentHeader';
import {ProfileDp} from '../../constants/image';
import Button from '../commonComponents/Button';
import {ScrollView} from 'react-native-gesture-handler';
import PostsContainer from '../commonComponents/PostsCard';
import {basicComponentsOne} from '../../constants/color';
import {Api} from '../../store/api/operation';
import {useDispatch, useSelector} from 'react-redux';
import mainStyle from '../commonComponents/mainStyle';
import jsonContainer from './jsonContainer';

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
    <>
      <Header Title="Profile" navigation={navigation} page="Home" />
      <Animated.View
        style={[
          styles.tagBackground,
          {transform: [{translateY: translate_Y}]},
        ]}>
        <View style={styles.ProfileImag}>
          <Image source={ProfileDp} style={styles.Profile} />
        </View>
        <Text style={styles.name}>Melisa</Text>
        <View style={styles.Icon}>
          <ScrollView horizontal>
            {jsonContainer.socialMedia.map((items) => (
              <View key={items.id}>
                <Button
                  type={items.type}
                  style={styles.SocialMedia}
                  onPress={() => Linking.openURL(items.link)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        {jsonContainer.contactData.map((items) => (
          <View style={[styles.Labels]} key={items.id}>
            <Icon
              name={items.Icon}
              style={[mainStyle.IconsCss, styles.AddOtherCss]}
            />
            <Text style={[styles.text]}>{items.data}</Text>
          </View>
        ))}
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          scroll_Y.setValue(e.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={{marginTop: 380}}>
        {json.length == 0 ? (
          <ActivityIndicator size="large" color={basicComponentsOne} />
        ) : (
          json.map((json, index) => (
            <View key={index} style={[mainStyle.PostsContainer]}>
              <PostsContainer json={json} />
            </View>
          ))
        )}
      </Animated.ScrollView>
    </>
  );
};

export default index;
