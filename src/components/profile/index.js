import React, {useEffect, useState} from 'react';
import {View, Text, Image, Animated, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import Icon from 'react-native-vector-icons/Entypo';

import {styles} from './style';
import Header from '../commonComponents/authenticComponentHeader';
import {ProfileDp} from '../../constants/image';
import Button from '../commonComponents/Button';
import {ScrollView} from 'react-native-gesture-handler';
import PostsContainer from '../commonComponents/PostsCard';
import {ProfileApi} from '../../store/api/operation';
import mainStyle from '../commonComponents/mainStyle';
import JsonContainer from './jsonContainer';
import Skeleton from '../commonComponents/skeletonLoader';

const index = ({navigation}) => {
  const [json, setJson] = useState([]);
  const apiData = useSelector((state) => state.Api);
  const dispatch = useDispatch();
  const scroll_Y = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scroll_Y, 0, 400);
  const translate_Y = diffClamp.interpolate({
    inputRange: [0, 400],
    outputRange: [0, -400],
  });

  useEffect(() => {
    dispatch(ProfileApi('/posts?userId=1'));
  }, []);
  useEffect(() => {
    setJson(apiData.json.profile);
  }, [apiData.json.profile]);

  return (
    <>
      <Header title="Profile" navigation={navigation} page="Home" />
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
            {JsonContainer.socialMedia.map((items) => (
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
        {JsonContainer.contactData.map((items) => (
          <View style={[styles.Labels]} key={items.id}>
            <Icon
              name={items.Icon}
              style={[mainStyle.IconsCss, styles.AddOtherCss]}
            />
            <Text style={[styles.text]}>{items.data}</Text>
          </View>
        ))}
      </Animated.View>
      <View style={mainStyle.marginBottom}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={(e) => {
            scroll_Y.setValue(e.nativeEvent.contentOffset.y);
          }}
          contentContainerStyle={{marginTop: 380}}>
          {isEmpty(json) ? (
            <Skeleton />
          ) : (
            json.map((json, index) => (
              <View key={index} style={[mainStyle.PostsContainer]}>
                <PostsContainer json={json} />
              </View>
            ))
          )}
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default index;
