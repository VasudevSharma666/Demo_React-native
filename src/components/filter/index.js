import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Animated} from 'react-native';
import {isEmpty} from 'lodash';

import Toaster from '../commonComponents/Toaster';
import Button from '../commonComponents/Button';
import Header from '../commonComponents/authenticComponentHeader';
import SearchBox from '../commonComponents/SearchBox';
import PostsContainer from '../commonComponents/PostsCard';
import {FilterApi} from '../../store/api/operation';
import {styles} from './style';
import color from '../../constants/color';
import mainStyle from '../commonComponents/mainStyle';
import {useDispatch, useSelector} from 'react-redux';
import jsonContainer from './jsonContainer';
import Skeleton from '../commonComponents/skeletonLoader';

const index = ({navigation}) => {
  const dispatch = useDispatch();
  const ApiData = useSelector((state) => state.Api);
  const [Data, setData] = useState({
    json: [],
    searchBox: '',
  });
  const DispatchData = (type, value) => {
    setData({
      ...Data,
      [type]: value,
    });
  };

  useEffect(() => {
    dispatch(FilterApi('/albums?userId=2'));
  }, []);
  useEffect(() => {
    DispatchData('json', ApiData.json.filter);
  }, [ApiData.json.filter]);
  return (
    <>
      <Header Title="Home" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: color.buttonBackground}}>
        <Animated.View style={[styles.SectionContainer]}>
          <View style={styles.backgroundBox}>
            <View style={styles.searchBox}>
              <SearchBox
                value={Data.searchBox}
                handlerState={(value) => DispatchData('searchBox', value)}
              />
            </View>
          </View>
          <View style={styles.ButtonSection}>
            {jsonContainer.buttonData.map((items) => (
              <View key={items.id} style={styles.ButtonWidth}>
                <Button
                  value={items.value}
                  type={items.value}
                  style={styles.ButtonStyle}
                  onPress={() => Toaster(items.value)}
                />
              </View>
            ))}
          </View>
          <Text style={styles.textResult}>{Data.json.length}Result found</Text>
        </Animated.View>
        <View style={mainStyle.PostsContainer}>
          {isEmpty(Data.json) ? (
            <Skeleton />
          ) : (
            Data.json.map((json, index) => (
              <View key={index}>
                <PostsContainer json={json} />
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default index;
