import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../commonComponents/authenticComponentHeader';

const authContainer = (props) => {
  const {HeaderName, navigation} = props;
  return (
    <>
      <Header Title="Home" navigation={navigation} />
    </>
  );
};

export default authContainer;
