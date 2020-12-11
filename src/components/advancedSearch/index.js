import React, {useReducer} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PinIcon from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-community/picker';
var PickerItem = Picker.Item;

import Header from '../commonComponents/authenticComponentHeader';
import Button from '../commonComponents/Button';
import {styles} from './style';

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
              onValueChange={(itemValue, itemIndex) =>
                dispatch({type: 'category', value: itemValue})
              }>
              <PickerItem
                label="Search Category"
                value="nullData"
                color="gray"
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
              onValueChange={(itemValue, itemIndex) =>
                dispatch({type: 'price', value: itemValue})
              }>
              <PickerItem
                label="Search Price Type"
                value="nullData"
                color="gray"
              />
              <PickerItem label="10k-1L" value="thousand" />
              <PickerItem label="1L-10L" value="Lake" />
              <PickerItem label="10L-1C" value="crore" />
            </Picker>
          </View>
          <TextInput
            style={styles.InputBox}
            placeholder="Location"
            placeholderTextColor="gray"
          />
          <Text style={styles.status}>Status</Text>
          <View style={styles.button}>
            <Button
              value="Open Now"
              colorBody="#D3D3D3"
              colorText="black"
              radius={20}
            />
          </View>
          <Text style={[styles.status, {top: 20}]}>Rated As</Text>
          <View style={[styles.button, {flexDirection: 'row', top: '7%'}]}>
            <Button
              value="High to Low"
              colorBody="#D3D3D3"
              colorText="black"
              radius={20}
            />
            <View style={{width: 10}} />
            <Button
              value="Low to High"
              colorBody="#D3D3D3"
              colorText="black"
              radius={20}
            />
          </View>
          <TextInput
            style={[styles.InputBox, {top: '10%'}]}
            placeholder="Current Location"
            placeholderTextColor="gray"
          />
        </ScrollView>
      </View>
      <View>
        <Button value="search" />
      </View>
    </View>
  );
};

export default index;
