import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import mainStyle from '../commonComponents/mainStyle';
import color from '../../constants/color';

const Header = ({title, navigation}) => {
  const Navigation = () => {
    if (title == 'Home') {
      navigation.openDrawer();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.HeaderBlock}>
      <Pressable onPress={() => Navigation()}>
        <Icon
          name={title == 'Home' ? 'menu' : 'chevron-with-circle-left'}
          style={styles.IconCss}
        />
      </Pressable>
      <Text style={[styles.Title, mainStyle.TextBold]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderBlock: {
    flexDirection: 'row',
    backgroundColor: color.basicComponentsOne,
    height: 50,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
  },
  Title: {
    color: color.basicComponentsTwo,
    fontSize: 20,
    marginLeft: 15,
  },
  IconCss: {
    fontSize: 35,
    color: color.basicComponentsTwo,
    marginLeft: 15,
  },
});

export default Header;
