import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconJadwal,
  IconJadwalActive,
  IconUser,
  IconUserActive,
  IconDefaultUser,
  IconStadion,
  IconBooking,
  IconLangganan,
  IconJoinTeam,
} from '../../assets/index';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'Akun') {
      return isFocused ? <IconUserActive /> : <IconUser />;
    }
    if (label === 'Jadwal') {
      return isFocused ? <IconJadwalActive /> : <IconJadwal />;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerActive : styles.container}>
      <Icon />
      <Text style={isFocused ? styles.text : styles.textActive}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  containerActive: {
    alignContent: 'center',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#ede2e1',
  },
  text: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textActive: {
    fontSize: 20,
    color: '#ffffff',
  },
});
