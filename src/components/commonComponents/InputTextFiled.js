import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import IconLogo from 'react-native-vector-icons/AntDesign';
import EyeIcon from 'react-native-vector-icons/Ionicons';

import color from '../../constants/color';

const InputText = ({title, icon = null, hide = false, handleState, value}) => {
  const [show, setShow] = useState(hide);

  const IconType = () => {
    switch (title) {
      case 'password': {
        return <IconLogo name={icon} style={[styles.IconCss]} />;
      }
      case icon == null: {
        return <></>;
      }
      default: {
        return <IconLogo name={icon} style={styles.IconCss} />;
      }
    }
  };

  return (
    <View style={styles.UsernamePos}>
      <IconType />
      <TextInput
        style={styles.Username}
        placeholder={title}
        secureTextEntry={show}
        placeholderTextColor={color.inputPlaceHolder}
        value={value}
        autoCapitalize="none"
        onChangeText={(value) => handleState(value)}
      />
      {title == 'password' ? (
        <TouchableOpacity
          style={styles.eye}
          onPress={() => {
            setShow(!show);
          }}>
          {show == false ? (
            <EyeIcon name="eye" style={styles.IconCss} />
          ) : (
            <EyeIcon name="eye-off" style={styles.IconCss} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  Username: {
    fontSize: 22,
    color: color.basicComponentsTwo,
    width: 230,
  },
  UsernamePos: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: color.basicComponentsTwo,
    width: 300,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
  },
  eye: {
    width: 50,
  },
  IconCss: {
    fontSize: 25,
    color: color.basicComponentsOne,
    marginLeft: 5,
  },
});

export default InputText;
