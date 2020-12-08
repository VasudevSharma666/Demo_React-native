import React, {useEffect, useReducer, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Sort from 'react-native-vector-icons/FontAwesome';

import Button from '../commonComponents/Button';
import Header from '../commonComponents/authenticComponentHeader';
import SearchBox from '../commonComponents/SearchBox';
import PostsContainer from '../commonComponents/PostsCard';
import {BaseUrl} from '../../utils/Urls';
import {styles} from './style';

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

  useEffect(() => {
    fetch(BaseUrl + '/albums')
      .then((response) => response.json())
      .then((json) => dispatch({type: 'json', value: json}))
      .catch((err) => Alert.alert('something is wrong' + err));
  }, []);
  return (
    <View style={{flex: 2, flexDirection: 'column'}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.wrapper}>
          <Header Title="Home" navigation={navigation} />
          <View style={{flex: 1, flexWrap: 'wrap'}}>
            <SearchBox
              value={state.searchBox}
              handlerState={(value) =>
                dispatch({type: 'searchBox', value: value})
              }
            />
          </View>
          <View style={styles.backgroundBox} />
          <Text style={styles.text1}>{state.json.length} Result found</Text>
          <View></View>
          <View style={styles.Filter}>
            <Button value="Filter" colorBody="#000000" radius={0} />
          </View>
          <View style={styles.IconFilter}>
            <Icon name="filter" size={20} color="#77b5fe" />
          </View>
          <View style={styles.Sort}>
            <Button value="Sort" colorBody="#000000" radius={0} />
          </View>
          <View style={styles.IconShort}>
            <Sort name="sort-amount-desc" size={15} color="#77b5fe" />
          </View>
          <View style={styles.Reset}>
            <Button value="Reset" colorBody="#000000" radius={0} />
          </View>
          <View style={styles.IconReset}>
            <Icon name="retweet" size={20} color="#77b5fe" />
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.PostsCont}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {state.json.length == 0 ? (
            <ActivityIndicator size="large" color="red" />
          ) : (
            state.json.map((json, index) => (
              <View key={index}>
                <PostsContainer json={json} />
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;
