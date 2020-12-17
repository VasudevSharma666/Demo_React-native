import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
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
import Toaster from '../commonComponents/Toaster';

const index = ({navigation}) => {
  const [Data, setData] = useState({
    category: '',
    price: '',
  });
  return (
    <View style={styles.container}>
      <Header Title="Advanced Search" navigation={navigation} />
      <PinIcon name="location-pin" style={styles.pinIcon} />
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
              selectedValue={Data.category}
              onValueChange={(itemValue) =>
                setData({...Data, category: itemValue})
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
              selectedValue={Data.price}
              onValueChange={(itemValue) =>
                setData({...Data, price: itemValue})
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
              onPress={() => Toaster('Open Now')}
            />
          </View>
          <Text style={[styles.status, {top: 20}]}>Rated As</Text>
          <View style={[styles.button, styles.OtherButtonStyle]}>
            <Button
              value="High to Low"
              colorText={TextColor}
              style={{backgroundColor: buttonBackground, borderRadius: 20}}
              onPress={() => Toaster('High to Low')}
            />
            <View style={{width: 10}} />
            <Button
              value="Low to High"
              colorText={TextColor}
              style={{backgroundColor: buttonBackground, borderRadius: 20}}
              onPress={() => Toaster('Low to high')}
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
        <Button value="search" onPress={() => Toaster('searching...')} />
      </View>
    </View>
  );
};

export default index;
