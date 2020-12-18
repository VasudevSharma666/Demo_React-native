import React from 'react';
import {ScrollView, ImageBackground} from 'react-native';

import {loginpage} from '../../constants/image';
import mainStyles from '../commonComponents/mainStyle';
import Common from '../commonComponents/startingBackground';
import Header from '../commonComponents/unauthorizedComponentHeader';

const UnAuthLayout = (props) => {
  const {HeaderName = '', navigation, children} = props;
  return (
    <ImageBackground
      source={loginpage}
      style={mainStyles.fullScreen}
      blurRadius={3}>
      {HeaderName != '' && (
        <Header value={HeaderName} navigation={navigation} />
      )}
      <Common />
      <ScrollView style={{flex: 1}}>{children}</ScrollView>
    </ImageBackground>
  );
};

export default UnAuthLayout;
