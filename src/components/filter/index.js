import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Animated,
  FlatList,
} from 'react-native';

import Toaster from '../commonComponents/Toaster';
import Button from '../commonComponents/Button';
import Header from '../commonComponents/authenticComponentHeader';
import SearchBox from '../commonComponents/SearchBox';
import PostsContainer from '../commonComponents/PostsCard';
import {Api} from '../../store/api/operation';
import {styles} from './style';
import {buttonBackground} from '../../constants/color';
import mainStyle from '../commonComponents/mainStyle';
import {useDispatch, useSelector} from 'react-redux';

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
    dispatch(Api('/albums?userId=2', 'filter'));
  }, []);
  useEffect(() => {
    DispatchData('json', ApiData.json.filter);
  }, [ApiData.json.filter]);
  return (
    <>
      <Header Title="Home" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: buttonBackground}}>
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
            <View style={styles.ButtonWidth}>
              <Button
                value="Filter"
                type="filter"
                style={styles.ButtonStyle}
                onPress={() => Toaster('Filter')}
              />
            </View>
            <View style={styles.ButtonWidth}>
              <Button
                value="Sort"
                type="sort"
                style={styles.ButtonStyle}
                onPress={() => Toaster('Sort')}
              />
            </View>
            <View style={styles.ButtonWidth}>
              <Button
                value="Reset"
                type="reset"
                style={styles.ButtonStyle}
                onPress={() => Toaster('Reset')}
              />
            </View>
          </View>
          <Text style={styles.textResult}>{Data.json.length}Result found</Text>
        </Animated.View>
        <View style={mainStyle.PostsContainer}>
          {Data.json.length == 0 ? (
            <ActivityIndicator size="large" color="red" />
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
