import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
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
import JsonContainer from './jsonContainer';
import Skeleton from '../commonComponents/skeletonLoader';

const index = ({navigation}) => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.Api);
  const [data, setData] = useState({
    json: [],
    searchBox: '',
  });

  const DispatchData = (type, value) => {
    setData({
      ...data,
      [type]: value,
    });
  };

  useEffect(() => {
    dispatch(FilterApi('/albums?userId=2'));
  }, []);
  useEffect(() => {
    DispatchData('json', apiData.json.filter);
  }, [apiData.json.filter]);

  return (
    <>
      <Header title="Home" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: color.buttonBackground}}>
        <Animated.View style={[styles.SectionContainer]}>
          <View style={styles.backgroundBox}>
            <View style={styles.searchBox}>
              <SearchBox
                value={data.searchBox}
                handlerState={(value) => DispatchData('searchBox', value)}
              />
            </View>
          </View>
          <View style={styles.ButtonSection}>
            {JsonContainer.buttonData.map((items) => (
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
          <Text style={styles.textResult}>{data.json.length}Result found</Text>
        </Animated.View>
        <View style={mainStyle.PostsContainer}>
          {isEmpty(data.json) ? (
            <Skeleton />
          ) : (
            data.json.map((json, index) => (
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
