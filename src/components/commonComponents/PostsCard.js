import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import {TagDemo} from '../../constants/image';
import color from '../../constants/color';

const PostsCard = ({json}) => (
  <View style={styles.Container}>
    <Image source={TagDemo} style={styles.Image} />
    <View style={styles.text1}>
      <Text style={{color: color.LiteText}}>ID {json.id}</Text>
    </View>
    <View style={styles.text2}>
      <Text style={{fontWeight: 'bold'}} numberOfLines={3}>
        {json.title}
      </Text>
    </View>
    <View style={styles.text3}>
      <Text style={{color: color.LiteText}}>UserID {json.userId} </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
  },
  Image: {
    width: 170,
    height: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  text1: {
    position: 'absolute',
    top: 0,
    left: 190,
  },
  text2: {
    position: 'absolute',
    top: 25,
    left: 190,
    width: 110,
  },
  text3: {
    position: 'absolute',
    top: 100,
    left: 190,
  },
});
export default PostsCard;
