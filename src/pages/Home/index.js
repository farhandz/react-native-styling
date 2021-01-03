import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import HeaderInformation from '../../components/HeaderInformaion';
import Banner from '../../assets/images/Banner.png';
import TimFutsal from '../../components/TimFutsal';
import Sparing from '../../components/Sparing';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.containerHome}>
      <ScrollView>
        <View style={styles.HeaderWrapper}>
          <HeaderInformation />
        </View>
        <Image style={styles.Images} source={Banner} />
        <View>
          <TimFutsal />
        </View>
        <View>
          <Sparing />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
  },
  HeaderWrapper: {
    padding: 10,
    marginTop: 20,
  },
  Images: {
    width: '100%',
    height: Height * 0.19,
  },
});
