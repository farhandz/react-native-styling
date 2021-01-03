/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconStadion, IconDefaultUser} from '../../assets';

const HeaderInformation = () => {
  return (
    <View style={styles.containerHeaderInformation}>
      <View style={styles.infoUser}>
        <IconDefaultUser />
        <View style={{marginLeft: 7}}>
          <Text style={{fontWeight: 'bold'}}>Hello Bro</Text>
          <Text>Farhan Ammar</Text>
        </View>
      </View>
      <View style={styles.jadwalPertandingan}>
        <IconStadion />
        <View style={{marginRight: 10}}>
          <Text style={{fontWeight: 'bold'}}>!9.00</Text>
          <Text>Sabtu, 01-08-2020</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  containerHeaderInformation: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  infoUser: {
    flexDirection: 'row',
    fontSize: 80,
    alignItems: 'center',
    width: 100,
  },
  jadwalPertandingan: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  JadwalNext: {
    alignItems: 'center',
    height: 30,
  },
});
