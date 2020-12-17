import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import IconLogo from 'react-native-vector-icons/AntDesign';
import EyeIcon from 'react-native-vector-icons/Ionicons';

import {
  basicComponentsOne,
  basicComponentsTwo,
  inputPlaceHolder,
} from '../../constants/color';

const InputText = ({Title, Icon = null, hide = false, handleState, value}) => {
  const [Show, setShow] = useState(hide);
  const IconType = () => {
    switch (Title) {
      case 'password': {
        return (
          <IconLogo
            name={Icon}
            size={25}
            color={basicComponentsOne}
            style={{top: '25%', left: 5}}
          />
        );
      }
      case Icon == null: {
        return <></>;
      }
      default: {
        return (
          <IconLogo
            name={Icon}
            size={25}
            color={basicComponentsOne}
            style={{left: '2%'}}
          />
        );
      }
    }
  };

  return (
    <View style={styles.UsernamePos}>
      <IconType />
      <TextInput
        style={styles.Username}
        placeholder={Title}
        secureTextEntry={Show}
        placeholderTextColor={inputPlaceHolder}
        value={value}
        autoCapitalize="none"
        onChangeText={(value) => handleState(value)}
      />
      {Title == 'password' ? (
        <TouchableOpacity
          style={styles.eye}
          onPress={() => {
            setShow(!Show);
          }}>
          {Show == false ? (
            <EyeIcon name="eye" size={25} color={basicComponentsOne} />
          ) : (
            <EyeIcon name="eye-off" size={25} color={basicComponentsOne} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  Username: {
    position: 'absolute',
    left: 35,
    fontSize: 22,
    color: basicComponentsTwo,
    width: 250,
  },
  UsernamePos: {
    borderWidth: 3,
    borderColor: basicComponentsTwo,
    width: 300,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
  },
  eye: {
    width: '10%',
    left: '90%',
    top: '-30%',
  },
});

export default InputText;
