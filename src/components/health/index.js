import React from 'react';
import {Text, View, ToastAndroid, Image} from 'react-native';
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
import Toaster from '../commonComponents/Toaster';
import mainStyle from '../commonComponents/mainStyle';

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
        <Button
          value="Saved"
          type="Saved"
          colorText={basicComponentsOne}
          style={styles.ButtonStyle}
          onPress={() => Toaster('saved...')}
        />
        <Button
          value="Report"
          type="Alert"
          colorText={basicComponentsOne}
          style={[styles.ButtonStyle, {marginLeft: 5}]}
          onPress={() => Toaster('Report...')}
        />
        <Button
          value="Claim "
          type="shield"
          colorText={basicComponentsOne}
          style={[styles.ButtonStyle, {marginLeft: 5}]}
          onPress={() => Toaster('Claim...')}
        />
      </View>
    </View>
    <View style={styles.imgContainer}>
      <Image source={hospitalBuild} style={styles.imag} />
      <Image source={hLogo} style={[styles.imag, {marginLeft: 5}]} />
      <Image source={EmergencyBuild} style={[styles.imag, {marginLeft: 5}]} />
    </View>
    <View>
      <View style={[styles.Labels]}>
        <AddressIcon name="address" style={mainStyle.IconsCss} />
        <Text style={[styles.textData]}>Hondai</Text>
      </View>
      <View style={[styles.Labels]}>
        <PhoneIcon name="call" style={mainStyle.IconsCss} />
        <Text style={[styles.textData]}>123456789</Text>
      </View>
      <View style={[styles.Labels]}>
        <MailIcon name="mail" style={mainStyle.IconsCss} />
        <Text style={[styles.textData]}>XYZ@gmail.com</Text>
      </View>
    </View>
  </View>
);

export default index;
