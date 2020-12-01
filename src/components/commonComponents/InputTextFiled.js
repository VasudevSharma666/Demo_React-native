import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import IconLogo from 'react-native-vector-icons/AntDesign';
import Password from 'react-native-vector-icons/MaterialCommunityIcons';

const InputText = ({type, Icon = null, show = false, handleState, props}) => {
  const IconType = () => {
    switch (Icon) {
      case 'form-textbox-password': {
        return <Password name={Icon} size={40} color="#900" />;
      }
      case Icon == null: {
        return <></>;
      }
      default: {
        return <IconLogo name={Icon} size={40} color="#900" />;
      }
    }
  };

  return (
    <>
      <View style={styles.UsernamePos}>
        <IconType />
        <TextInput
          style={styles.Username}
          placeholder={type}
          secureTextEntry={show}
          placeholderTextColor="#808080"
          value={props}
          onChangeText={(event) => handleState(event)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Username: {
    position: 'absolute',
    left: 35,
    fontSize: 22,
    color: 'white',
    width: 250,
  },
  UsernamePos: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
    width: 300,
    borderRadius: 8,
  },
});
export default InputText;
