import React, {useEffect, useReducer} from 'react';
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
  ToastAndroid,
} from 'react-native';

import Header from '../commonComponents/authenticComponentHeader';
import {HomeBackground} from '../../constants/image';
import Search from '../commonComponents/SearchBox';
import ButtonWithIcon from '../commonComponents/TagCard';
import Button from '../commonComponents/Button';
import PostsContainer from '../commonComponents/PostsCard';
import {Api} from '../../store/api/operation';
import {styles} from './style';
import {basicComponentsOne, transparent} from '../../constants/color';
import {useDispatch, useSelector} from 'react-redux';

const initialState = {
  json: [],
  searchBox: '',
  backToUp: false,
  scroll_To: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'json': {
      return {...state, json: action.value};
    }
    case 'searchBox': {
      return {...state, searchBox: action.value};
    }
    case 'backToUp': {
      return {...state, backToUp: action.value};
    }
    case 'scrollTo': {
      return {...state, scroll_To: action.value};
    }
  }
};
const index = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchRedux = useDispatch();
  const ApiData = useSelector((state) => state.Api);
  useEffect(() => {
    dispatchRedux(Api('/albums', 'home'));
  }, []);
  useEffect(() => {
    dispatch({type: 'json', value: ApiData.json.homepage});
  }, [ApiData.json.homepage]);

  const ReturnBackScroll = () => {
    return (
      <View style={styles.ButtonBack}>
        <Button
          type="backScroll"
          onPress={() => state.scroll_To.scrollTo({x: 0, y: 0, animated: true})}
          style={{borderRadius: 60, height: 50}}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header Title="Home" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={(c) => dispatch({type: 'scrollTo', value: c})}
        bounces={false}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y <= 30) {
            dispatch({type: 'backToUp', value: false});
          } else {
            dispatch({type: 'backToUp', value: true});
          }
        }}>
        <View style={styles.MainContainer}>
          <ImageBackground
            source={HomeBackground}
            style={styles.HomeBackground}
            imageStyle={{
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
            }}
            resizeMode="cover"
            blurRadius={2}
          />

          <Text style={styles.FirstText}>Find Nearby Attractions</Text>
          <Text style={styles.SecondText}>
            let's discover the best place to eat drink and shop nearest to you
          </Text>
          <View style={styles.Search}>
            <Search
              value={state.searchBox}
              handlerState={(value) =>
                dispatch({type: 'searchBox', value: value})
              }
              style={{backgroundColor: transparent}}
            />
          </View>
          <View style={styles.ButtonWithIcone}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ButtonWithIcon
                Icon="car"
                TextData="Automotive"
                onPress={() =>
                  ToastAndroid.showWithGravityAndOffset(
                    'Automotive',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    10,
                    50,
                  )
                }
              />
              <ButtonWithIcon
                Icon="clockcircleo"
                TextData="Service"
                onPress={() =>
                  ToastAndroid.showWithGravityAndOffset(
                    'server',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    10,
                    50,
                  )
                }
              />
              <ButtonWithIcon
                Icon="woman"
                TextData="Beauty"
                onPress={() =>
                  ToastAndroid.showWithGravityAndOffset(
                    'Beauty',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    10,
                    50,
                  )
                }
              />
              <ButtonWithIcon
                Icon="pluscircle"
                TextData="Hospital"
                onPress={() => navigation.navigate('Health')}
              />
              <ButtonWithIcon
                Icon="customerservice"
                TextData="Service"
                onPress={() =>
                  ToastAndroid.showWithGravityAndOffset(
                    'server',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    10,
                    50,
                  )
                }
              />
              <View style={{width: 50}} />
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.LatestTitle}>Latest Listings</Text>
            <View style={styles.ViewAllButton}>
              <Button
                value="View All"
                style={{borderRadius: 3}}
                onPress={() => navigation.navigate('Filter search')}
              />
            </View>
          </View>
        </View>
        <View style={styles.TagContainer}>
          {state.json.length == 0 ? (
            <ActivityIndicator size="large" color={basicComponentsOne} />
          ) : (
            state.json.map((json, index) => (
              <View key={index}>
                <PostsContainer json={json} />
              </View>
            ))
          )}
        </View>
      </ScrollView>
      {state.backToUp != false ? <ReturnBackScroll /> : null}
    </View>
  );
};

export default index;
