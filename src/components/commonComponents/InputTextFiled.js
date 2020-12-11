import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import IconLogo from 'react-native-vector-icons/AntDesign';
import Password from 'react-native-vector-icons/MaterialCommunityIcons';
import EyeIcon from 'react-native-vector-icons/Ionicons';

const InputText = ({Title, Icon = null, show = false, handleState, props}) => {
  const [Show, setShow] = useState(show);
  const IconType = () => {
    switch (Title) {
      case 'password': {
        return (
          <IconLogo name={Icon} size={25} color="#900" style={{top: '25%'}} />
        );
      }
      case Icon == null: {
        return <></>;
      }
      default: {
        return (
          <IconLogo name={Icon} size={25} color="#900" style={{left: '2%'}} />
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
        placeholderTextColor="#808080"
        value={props}
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
            <EyeIcon name="eye" size={25} color="#900" />
          ) : (
            <EyeIcon name="eye-off" size={25} color="#900" />
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
    color: 'white',
    width: 250,
  },
  UsernamePos: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
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
