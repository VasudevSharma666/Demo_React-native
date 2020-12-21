import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
  Animated,
} from 'react-native';
import {isEmpty} from 'lodash';

import Header from '../commonComponents/authenticComponentHeader';
import {HomeBackground} from '../../constants/image';
import Search from '../commonComponents/SearchBox';
import ButtonWithIcon from '../commonComponents/TagCard';
import Button from '../commonComponents/Button';
import PostsContainer from '../commonComponents/PostsCard';
import {HomeApi} from '../../store/api/operation';
import {styles} from './style';
import color from '../../constants/color';
import {useDispatch, useSelector} from 'react-redux';
import Toaster from '../commonComponents/Toaster';
import mainStyle from '../commonComponents/mainStyle';
import jsonCollector from './jsonContainer';

const index = ({navigation}) => {
  const [Data, setData] = useState({
    json: [],
    searchBox: '',
    backToUp: false,
  });
  const [refScroll, setRefScroll] = useState(0);
  const DispatchData = (type, value) => {
    setData({
      ...Data,
      [type]: value,
    });
  };
  const dispatchRedux = useDispatch();
  const ApiData = useSelector((state) => state.Api);
  useEffect(() => {
    dispatchRedux(HomeApi('/albums'));
  }, []);
  useEffect(() => {
    DispatchData('json', ApiData.json.homepage);
  }, [ApiData.json.homepage]);

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
      <Header Title="Home" navigation={navigation} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        ref={(value) => {
          setRefScroll(value);
        }}
        bounces={false}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y <= 30) {
            DispatchData('backToUp', false);
          } else {
            DispatchData('backToUp', true);
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
              value={Data.searchBox}
              handlerState={(value) => DispatchData('searchBox', value)}
              style={mainStyle.transparent}
            />
          </View>
          <View style={styles.ButtonWithIcone}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {jsonCollector.categories.map((items) => (
                <View key={`Categories-${items.id}`}>
                  <ButtonWithIcon
                    Icon={items.icon}
                    TextData={items.textData}
                    onPress={() => {
                      !isEmpty(items.page)
                        ? navigation.navigate(items.page)
                        : Toaster(items.textData);
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
          {isEmpty(Data.json) ? (
            <ActivityIndicator size="large" color={color.basicComponentsOne} />
          ) : (
            Data.json.map((json, index) => (
              <View key={index}>
                <PostsContainer json={json} />
              </View>
            ))
          )}
        </View>
      </Animated.ScrollView>
      {Data.backToUp == true && <ReturnBackScroll />}
    </>
  );
};

export default index;
