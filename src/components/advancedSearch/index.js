import React, {useState} from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-community/picker';

import Header from '../commonComponents/authenticComponentHeader';
import Button from '../commonComponents/Button';
import {styles} from './style';
import color from '../../constants/color';
import Toaster from '../commonComponents/Toaster';
import jsonContainer from './jsonContainer';

const index = ({navigation}) => {
  const [Data, setData] = useState({
    category: '',
    price: '',
  });
  return (
    <>
      <Header Title="Advanced Search" navigation={navigation} />
      <Icon name="location-pin" style={styles.pinIcon} />
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
              <Picker.Item
                label="Search Category"
                color={color.inputPlaceHolder}
              />
              {jsonContainer.category.map((items) => (
                <Picker.Item
                  label={items.label}
                  value={items.label}
                  key={items.id}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.PickerElement}>
            <Picker
              selectedValue={Data.price}
              onValueChange={(itemValue) =>
                setData({...Data, price: itemValue})
              }>
              <Picker.Item
                label="Search Price Type"
                value="nullData"
                color={color.inputPlaceHolder}
              />
              {jsonContainer.prices.map((items) => (
                <Picker.Item
                  label={items.label}
                  value={items.value}
                  key={items.id}
                />
              ))}
            </Picker>
          </View>
          <TextInput
            style={styles.InputBox}
            placeholder="Location"
            placeholderTextColor={color.inputPlaceHolder}
          />
          <Text style={styles.status}>Status</Text>
          <View style={styles.button}>
            <Button
              value="Open Now"
              colorText={color.TextColor}
              style={styles.ButtonStyle}
              onPress={() => Toaster('Open Now')}
            />
          </View>
          <Text style={[styles.status]}>Rated As</Text>
          <View style={[styles.button, styles.OtherButtonStyle]}>
            {jsonContainer.Button_High_Low.map((items) => (
              <View key={items.id}>
                <Button
                  value={items.value}
                  colorText={color.TextColor}
                  style={styles.ButtonStyle}
                  onPress={() => Toaster(items.value)}
                />
              </View>
            ))}
          </View>
          <TextInput
            style={[styles.InputBox, styles.Shift]}
            placeholder="Current Location"
            placeholderTextColor={color.inputPlaceHolder}
          />
        </ScrollView>
        <Button value="search" onPress={() => Toaster('searching...')} />
      </View>
    </>
  );
};

export default index;
