import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import Header from '../commonComponents/authenticComponentHeader';
import {HomeBackground} from '../../constants/image';
import Search from '../commonComponents/SearchBox';
import ButtonWithIcon from '../commonComponents/TagCard';
import Button from '../commonComponents/Button';
import PostsContainer from '../commonComponents/PostsCard';
import {BaseUrl} from '../../utils/Urls';
import {styles} from './style';

const index = ({navigation}) => {
  const [Json, setJson] = useState([]);
  useEffect(() => {
    fetch(BaseUrl + '/albums')
      .then((response) => response.json())
      .then((json) => setJson(json))
      .catch((err) => Alert.alert('something is worng' + err));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header Title="Home" navigation={navigation} />
      <Image
        source={HomeBackground}
        style={styles.HomeBackground}
        resizeMode="cover"
        blurRadius={3}
      />
      <Text style={styles.FirstText}>Find Nearby Attractions</Text>
      <Text style={styles.SecondText}>
        let's discover the best place to eat drink and shop nearest to you
      </Text>
      <View style={styles.Search}>
        <Search backgroundColor="#00000000" />
      </View>
      <View style={styles.ButtonWithIcone}>
        <ScrollView
          horizontal
          style={{flex: 1, flexDirection: 'row'}}
          showsHorizontalScrollIndicator={false}>
          <ButtonWithIcon Icon="car" TextData="Automotive" />
          <Text> </Text>
          <ButtonWithIcon Icon="clockcircleo" TextData="Service" />
          <Text> </Text>
          <ButtonWithIcon Icon="woman" TextData="Beauty" />
          <Text> </Text>
          <ButtonWithIcon Icon="pluscircle" TextData="Hospital" />
          <Text> </Text>
          <ButtonWithIcon Icon="customerservice" TextData="Service" />
        </ScrollView>
      </View>
      <Text style={styles.LatestTitle}>Latest Listings</Text>
      <View style={styles.ViewAllButton}>
        <Button value="View All" colorBody="red" radius={3} />
      </View>
      <View style={styles.PostsCont}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Json.length == 0 ? (
            <ActivityIndicator size="large" color="red" />
          ) : (
            Json.map((json, index) => (
              <View key={index}>
                <PostsContainer json={json} />
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
