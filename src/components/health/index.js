import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import PhoneIcon from 'react-native-vector-icons/Ionicons';
import MailIcon from 'react-native-vector-icons/AntDesign';
import AddressIcon from 'react-native-vector-icons/Entypo';

import Header from '../commonComponents/authenticComponentHeader';
import {
  HealthImag,
  hLogo,
  hospitalBuild,
  EmergencyBuild,
} from '../../constants/image';
import Button from '../commonComponents/Button';
import {styles} from './style';
import {
  transparent,
  inputPlaceHolder,
  basicComponentsOne,
} from '../../constants/color';

const index = ({navigation}) => (
  <View style={styles.container}>
    <Header Title="Health" navigation={navigation} />
    <View>
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
          {' '}
          NCH Health Care Clinic for testing purpose{' '}
        </Text>
        <View style={styles.ButtonCss}>
          <Button
            value="Saved"
            colorBody={inputPlaceHolder}
            opacity={0.7}
            type="Saved"
            colorText={basicComponentsOne}
          />
          <View style={{left: 10}}>
            <Button
              value="Report"
              colorBody={inputPlaceHolder}
              opacity={0.7}
              type="Alert"
              colorText={basicComponentsOne}
            />
          </View>
          <View style={{left: 20}}>
            <Button
              value="Claim "
              colorBody={inputPlaceHolder}
              opacity={0.7}
              type="shield"
              colorText={basicComponentsOne}
            />
          </View>
        </View>
      </View>
    </View>
    <View style={{flexDirection: 'row'}}>
      <Image source={hospitalBuild} style={styles.imag} />
      <Image source={hLogo} style={[styles.imag, {left: '25%'}]} />
      <Image source={EmergencyBuild} style={[styles.imag, {left: '35%'}]} />
    </View>
    <View>
      <View style={[styles.Labels]}>
        <AddressIcon name="address" size={20} color={basicComponentsOne} />
        <Text style={[styles.textData]}>Hondai</Text>
      </View>
      <View style={[styles.Labels]}>
        <PhoneIcon name="call" size={20} color={basicComponentsOne} />
        <Text style={[styles.textData]}>123456789</Text>
      </View>
      <View style={[styles.Labels]}>
        <MailIcon name="mail" size={20} color={basicComponentsOne} />
        <Text style={[styles.textData]}>XYZ@gmail.com</Text>
      </View>
    </View>
  </View>
);

export default index;
