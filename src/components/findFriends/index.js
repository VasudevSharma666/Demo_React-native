import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  Pressable,
  Vibration,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import SearchBox from '../commonComponents/SearchBox';
import {findFriendsApi} from '../../store/api/operation';
import {isEmpty, filter} from 'lodash';
import {ProfileDp} from '../../constants/image';
import {styles} from './style';
import Toaster from '../../components/commonComponents/Toaster';
import mainStyle from '../commonComponents/mainStyle';

const findFriends = () => {
  const [data, setData] = useState({
    searchBox: '',
    json: [],
    tempJson: [],
  });
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.Api);

  useEffect(() => {
    dispatch(findFriendsApi('/users'));
  }, []);
  useEffect(() => {
    let object = [];
    if (isEmpty(data.searchBox.trim())) {
      setData({...data, json: apiData.json.findFriends});
    } else {
      object = filter(apiData.json.findFriends, (json) =>
        json.email.includes(data.searchBox),
      );
      if (isEmpty(object)) {
        Toaster('No result found');
        setData({...data, json: []});
      } else {
        setData({...data, json: object});
      }
    }
  }, [apiData.json.findFriends, data.searchBox]);

  const checker = (email) => {
    if (data.tempJson.includes(email)) {
      var array = data.tempJson;
      var index = array.indexOf(email);
      delete array[index];
      setData({...data, tempJson: array});
      Toaster('unfriend');
    } else {
      setData({...data, tempJson: data.tempJson.concat(email)});
      Toaster('request is send');
    }
  };

  const PostContainer = ({json}) => {
    return (
      <>
        <View style={styles.postContainer}>
          <Image
            source={ProfileDp}
            style={[styles.imagCss, styles.marginLeft]}
          />
          <View style={styles.personData}>
            <Text style={styles.marginLeft}>{json.username}</Text>
            <Text style={[styles.marginLeft, styles.color]}>{json.email}</Text>
          </View>
          <Pressable onPress={() => checker(json.email)}>
            {data.tempJson.includes(json.email) ? (
              <Icon
                name="checkcircle"
                style={[mainStyle.IconsCss, styles.fontSizeIcon]}
              />
            ) : (
              <Icon
                name="pluscircle"
                style={[mainStyle.IconsCss, styles.fontSizeIcon]}
              />
            )}
          </Pressable>
        </View>
      </>
    );
  };

  return (
    <>
      <View style={styles.outerPartSearchBox}>
        <View style={styles.searchBoxCss}>
          <SearchBox
            value={data.searchBox}
            handlerState={(value) => setData({...data, searchBox: value})}
          />
        </View>
      </View>

      {isEmpty(data.json) ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data.json}
          renderItem={({item}) => <PostContainer json={item} />}
          keyExtractor={(items) => items.id.toString()}
        />
      )}
    </>
  );
};

export default findFriends;
