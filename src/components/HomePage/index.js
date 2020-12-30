import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
  Animated,
  FlatList,
} from 'react-native';
import {isEmpty, filter} from 'lodash';

import Header from '../commonComponents/authenticComponentHeader';
import {HomeBackground} from '../../constants/image';
import Search from '../commonComponents/SearchBox';
import ButtonWithIcon from '../commonComponents/TagCard';
import Button from '../commonComponents/Button';
import PostsContainer from '../commonComponents/PostsCard';
import {HomeApi} from '../../store/api/operation';
import {styles} from './style';
import color from '../../constants/color';
import Toaster from '../commonComponents/Toaster';
import mainStyle from '../commonComponents/mainStyle';
import JsonCollector from './jsonContainer';

const index = ({navigation}) => {
  const [data, setData] = useState({
    json: [],
    searchBox: '',
    backToUp: false,
  });
  const [refScroll, setRefScroll] = useState(0);
  const apiData = useSelector((state) => state.Api);
  const dispatchRedux = useDispatch();

  useEffect(() => {
    dispatchRedux(HomeApi('/albums'));
  }, []);
  useEffect(() => {
    const string = data.searchBox;
    if (isEmpty(data.searchBox.trim())) {
      dispatchData('json', apiData.json.homepage);
    } else {
      const data = filter(apiData.json.homepage, (json) =>
        json.title.includes(string),
      );
      if (isEmpty(data)) {
        Toaster('No result found');
        dispatchData('json', []);
      } else {
        dispatchData('json', data);
      }
    }
  }, [data.searchBox, apiData.json.homepage]);
  const dispatchData = (type, value) => {
    setData({
      ...data,
      [type]: value,
    });
  };

  const ReturnBackScroll = () => {
    return (
      <View style={styles.ButtonBack}>
        <Button
          type="backScroll"
          onPress={() => refScroll.scrollTo({x: 0, y: 0, animated: true})}
          style={styles.scrollup}
        />
      </View>
    );
  };

  return (
    <>
      <Header title="Home" navigation={navigation} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        ref={(value) => {
          setRefScroll(value);
        }}
        bounces={false}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y <= 30) {
            dispatchData('backToUp', false);
          } else {
            dispatchData('backToUp', true);
          }
        }}>
        <View style={styles.MainContainer}>
          <ImageBackground
            source={HomeBackground}
            style={styles.HomeBackground}
            imageStyle={styles.ImageStyle}
            resizeMode="cover"
            blurRadius={2}
          />
          <Text style={[styles.FirstText, mainStyle.TextBold]}>
            Find Nearby Attractions
          </Text>
          <Text style={[styles.SecondText, mainStyle.TextBold]}>
            let's discover the best place to eat drink and shop nearest to you
          </Text>
          <View style={styles.Search}>
            <Search
              value={data.searchBox}
              handlerState={(value) => dispatchData('searchBox', value)}
              style={mainStyle.transparent}
            />
          </View>
          <View style={styles.ButtonWithIcone}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {JsonCollector.categories.map((items) => (
                <View key={`Categories-${items.id}`}>
                  <ButtonWithIcon
                    icon={items.icon}
                    textData={items.textData}
                    onPress={() => {
                      isEmpty(items.page)
                        ? Toaster(items.textData)
                        : navigation.navigate(items.page);
                    }}
                  />
                </View>
              ))}
              <View style={{width: 50}} />
            </ScrollView>
          </View>
          <View style={styles.LastLine}>
            <Text style={[styles.LatestTitle, mainStyle.TextBold]}>
              Latest Listings
            </Text>
            <View style={styles.ViewAllButton}>
              <Button
                value="View All"
                style={{borderRadius: 3}}
                onPress={() => navigation.navigate('Filter search')}
              />
            </View>
          </View>
        </View>
        <View style={mainStyle.PostsContainer}>
          {isEmpty(data.json) ? (
            <ActivityIndicator size="large" color={color.basicComponentsOne} />
          ) : (
            data.json.map((json, index) => (
              <View key={index}>
                <PostsContainer json={json} />
              </View>
            ))
          )}
        </View>
      </Animated.ScrollView>
      {data.backToUp == true && <ReturnBackScroll />}
    </>
  );
};

export default index;
