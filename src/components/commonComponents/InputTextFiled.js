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
        return <IconLogo name={Icon} style={[styles.IconCss]} />;
      }
      case Icon == null: {
        return <></>;
      }
      default: {
        return <IconLogo name={Icon} style={styles.IconCss} />;
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
    color: basicComponentsTwo,
    width: 230,
  },
  UsernamePos: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: basicComponentsTwo,
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
    color: basicComponentsOne,
    marginLeft: 5,
  },
});

export default InputText;
