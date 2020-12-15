import React, {useReducer} from 'react';
import {Text, View, ScrollView, ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PinIcon from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-community/picker';
var PickerItem = Picker.Item;

import Header from '../commonComponents/authenticComponentHeader';
import Button from '../commonComponents/Button';
import {styles} from './style';
import {
  inputPlaceHolder,
  buttonBackground,
  TextColor,
} from '../../constants/color';

const initialState = {
  category: '',
  price: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'category': {
      return {...state, category: action.value};
    }
    case 'price': {
      return {...state, price: action.value};
    }
  }
};
const index = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={styles.container}>
      <Header Title="Advanced Search" navigation={navigation} />
      <PinIcon name="location-pin" size={30} style={styles.pinIcon} />
      <View style={styles.formArea}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <TextInput
            style={styles.InputBox}
            placeholder="Search(e.g. Pizza or Burger)"
            placeholderTextColor="gray"
          />
          <View style={styles.PickerElement}>
            <Picker
              selectedValue={state.category}
              onValueChange={(itemValue) =>
                dispatch({type: 'category', value: itemValue})
              }>
              <PickerItem
                label="Search Category"
                value="nullData"
                color={inputPlaceHolder}
              />
              <PickerItem label="Foods" value="foods" />
              <PickerItem label="Travels" value="travels" />
              <PickerItem label="Clothes" value="clothes" />
              <PickerItem label="Health" value="health" />
            </Picker>
          </View>
          <View style={styles.PickerElement}>
            <Picker
              selectedValue={state.price}
              onValueChange={(itemValue) =>
                dispatch({type: 'price', value: itemValue})
              }>
              <PickerItem
                label="Search Price Type"
                value="nullData"
                color={inputPlaceHolder}
              />
              <PickerItem label="10k-1L" value="thousand" />
              <PickerItem label="1L-10L" value="Lake" />
              <PickerItem label="10L-1C" value="crore" />
            </Picker>
          </View>
          <TextInput
            style={styles.InputBox}
            placeholder="Location"
            placeholderTextColor={inputPlaceHolder}
          />
          <Text style={styles.status}>Status</Text>
          <View style={styles.button}>
            <Button
              value="Open Now"
              colorText={TextColor}
              style={{backgroundColor: buttonBackground, borderRadius: 20}}
              onPress={() =>
                ToastAndroid.showWithGravityAndOffset(
                  'Open now',
                  ToastAndroid.SHORT,
                  ToastAndroid.TOP,
                  10,
                  50,
                )
              }
            />
          </View>
          <Text style={[styles.status, {top: 20}]}>Rated As</Text>
          <View style={[styles.button, {flexDirection: 'row', top: '7%'}]}>
            <Button
              value="High to Low"
              colorText={TextColor}
              style={{backgroundColor: buttonBackground, borderRadius: 20}}
              onPress={() =>
                ToastAndroid.showWithGravityAndOffset(
                  'High to low',
                  ToastAndroid.SHORT,
                  ToastAndroid.TOP,
                  10,
                  50,
                )
              }
            />
            <View style={{width: 10}} />
            <Button
              value="Low to High"
              colorText={TextColor}
              style={{backgroundColor: buttonBackground, borderRadius: 20}}
              onPress={() =>
                ToastAndroid.showWithGravityAndOffset(
                  'low to High',
                  ToastAndroid.SHORT,
                  ToastAndroid.TOP,
                  10,
                  50,
                )
              }
            />
          </View>
          <TextInput
            style={[styles.InputBox, {top: '10%'}]}
            placeholder="Current Location"
            placeholderTextColor={inputPlaceHolder}
          />
        </ScrollView>
      </View>
      <View>
        <Button
          value="search"
          onPress={() =>
            ToastAndroid.showWithGravityAndOffset(
              'Searching...',
              ToastAndroid.SHORT,
              ToastAndroid.TOP,
              10,
              50,
            )
          }
        />
      </View>
    </View>
  );
};

export default index;
