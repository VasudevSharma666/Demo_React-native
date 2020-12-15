import React, {useEffect, useReducer} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Animated,
  FlatList,
  ToastAndroid,
} from 'react-native';

import Button from '../commonComponents/Button';
import Header from '../commonComponents/authenticComponentHeader';
import SearchBox from '../commonComponents/SearchBox';
import PostsContainer from '../commonComponents/PostsCard';
import {BaseUrl} from '../../utils/Urls';
import {styles} from './style';
import {
  basicComponentsOne,
  basicComponentsTwo,
  TextColor,
} from '../../constants/color';

const initialState = {
  json: [],
  searchBox: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'json': {
      return {...state, json: action.value};
    }
    case 'searchBox': {
      return {...state, searchBox: action.value};
    }
    default: {
      return {...state};
    }
  }
};
const index = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const scroll_Y = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scroll_Y, 0, 190);
  const translate_Y = diffClamp.interpolate({
    inputRange: [0, 190],
    outputRange: [0, -190],
  });
  useEffect(() => {
    fetch(BaseUrl + '/posts?userId=1')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'json', value: json}))
      .catch((err) => Alert.alert('something is wrong' + err));
  }, []);
  return (
    <>
      <Header Title="Home" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          scroll_Y.setValue(e.nativeEvent.contentOffset.y);
        }}
        style={{backgroundColor: '#D8D8D8'}}>
        <Animated.View
          style={[
            {transform: [{translateY: translate_Y}]},
            {
              height: 190,
              backgroundColor: basicComponentsTwo,
              elevation: 2,
            },
          ]}>
          <View style={styles.backgroundBox}>
            <View style={styles.searchBox}>
              <SearchBox
                value={state.searchBox}
                handlerState={(value) =>
                  dispatch({type: 'searchBox', value: value})
                }
              />
            </View>
          </View>
          <View style={styles.ButtonSection}>
            <View style={styles.ButtonWidth}>
              <Button
                value="Filter"
                type="filter"
                style={{
                  backgroundColor: TextColor,
                  borderRadius: 0,
                  flexDirection: 'row',
                }}
                onPress={() =>
                  ToastAndroid.showWithGravityAndOffset(
                    'Filtering...',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    10,
                    50,
                  )
                }
              />
            </View>
            <View style={styles.ButtonWidth}>
              <Button
                value="Sort"
                type="sort"
                style={{
                  backgroundColor: TextColor,
                  borderRadius: 0,
                  flexDirection: 'row',
                }}
                onPress={() =>
                  ToastAndroid.showWithGravityAndOffset(
                    'Sorting...',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    10,
                    50,
                  )
                }
              />
            </View>
            <View style={styles.ButtonWidth}>
              <Button
                value="Reset"
                type="reset"
                style={{
                  backgroundColor: TextColor,
                  borderRadius: 0,
                  flexDirection: 'row',
                }}
                onPress={() =>
                  ToastAndroid.showWithGravityAndOffset(
                    'Reset...',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    10,
                    50,
                  )
                }
              />
            </View>
          </View>
          <Text style={styles.textResult}>{state.json.length}Result found</Text>
        </Animated.View>
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
    </>
  );
};

export default index;
