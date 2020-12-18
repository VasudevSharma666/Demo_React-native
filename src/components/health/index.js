import React from 'react';
import {Text, View, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/Entypo';

import Header from '../commonComponents/authenticComponentHeader';
import {HealthImag} from '../../constants/image';
import Button from '../commonComponents/Button';
import {styles} from './style';
import {transparent, basicComponentsOne} from '../../constants/color';
import Toaster from '../commonComponents/Toaster';
import mainStyle from '../commonComponents/mainStyle';
import jsonContainer from './jsonContainer';

const index = ({navigation}) => (
  <View style={styles.container}>
    <Header Title="Health" navigation={navigation} />
    <SliderBox
      images={HealthImag}
      sliderBoxHeight={250}
      circleLoop={true}
      autoplay={true}
      dotColor={transparent}
      inactiveDotColor={transparent}
    />
    <View style={styles.SilderText}>
      <Text style={styles.text}>
        NCH Health Care Clinic for testing purpose
      </Text>
      <View style={[styles.ButtonCss]}>
        {jsonContainer.buttonData.map((items) => (
          <View key={items.id}>
            <Button
              value={items.value}
              type={items.type}
              colorText={basicComponentsOne}
              style={styles.ButtonStyle}
              onPress={() => Toaster(items.value)}
            />
          </View>
        ))}
      </View>
    </View>
    <View style={styles.imgContainer}>
      {jsonContainer.Image.map((items) => (
        <Image
          source={items.value}
          style={styles.imag}
          key={`Imag-${items.id}`}
        />
      ))}
    </View>
    <View>
      {jsonContainer.contactData.map((items) => (
        <View style={[styles.Labels]} key={items.id}>
          <Icon name={items.Icon} style={mainStyle.IconsCss} />
          <Text style={[styles.textData]}>{items.data}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default index;
