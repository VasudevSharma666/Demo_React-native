import React, {useEffect, useReducer, useState} from 'react';
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Header from '../commonComponents/authenticComponentHeader';
import {HomeBackground} from '../../constants/image';
import Search from '../commonComponents/SearchBox';
import ButtonWithIcon from '../commonComponents/TagCard';
import Button from '../commonComponents/Button';
import PostsContainer from '../commonComponents/PostsCard';
import {BaseUrl} from '../../utils/Urls';
import {styles} from './style';

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

  useEffect(() => {
    fetch(BaseUrl + '/albums')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'json', value: json}))
      .catch((err) => Alert.alert('something is wrong' + err));
  }, []);

  const ReturnBackScroll = () => {
    return (
      <View style={styles.ButtonBack}>
        <Button
          type="backScroll"
          colorBody="red"
          setScroll={state.scroll_To}
          value=""
          height={50}
          radius={60}
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
        <View
          style={[
            {
              top: -20,
              height: 430,
              width: '100%',
            },
          ]}>
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
              backgroundColor="#00000000"
              value={state.searchBox}
              handlerState={(value) =>
                dispatch({type: 'searchBox', value: value})
              }
            />
          </View>
          <View style={styles.ButtonWithIcone}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ButtonWithIcon Icon="car" TextData="Automotive" />
              <Text> </Text>
              <ButtonWithIcon Icon="clockcircleo" TextData="Service" />
              <Text> </Text>
              <ButtonWithIcon Icon="woman" TextData="Beauty" />
              <Text> </Text>
              <ButtonWithIcon
                Icon="pluscircle"
                TextData="Hospital"
                navigation={navigation}
                page="Health"
              />
              <Text> </Text>
              <ButtonWithIcon Icon="customerservice" TextData="Service" />
              <View style={{width: 50}} />
            </ScrollView>
          </View>
          <Text style={styles.LatestTitle}>Latest Listings</Text>
          <View style={styles.ViewAllButton}>
            <Button
              value="View All"
              colorBody="red"
              radius={3}
              navigation={navigation}
              page="Filter search"
            />
          </View>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          {state.json.length == 0 ? (
            <ActivityIndicator size="large" color="red" />
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
