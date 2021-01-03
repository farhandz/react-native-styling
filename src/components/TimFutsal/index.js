import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconLangganan, IconBooking, IconJoinTeam} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TimFutsal = () => {
  const [langganan, setLangganan] = React.useState(false);
  const [join, setJoin] = React.useState(false);
  const [booking, setBooking] = React.useState(false);
  const hanleLanggana = () => {
    setLangganan(true);
    setBooking(false);
    setJoin(false);
  };
  const handleJoin = () => {
    setLangganan(false);
    setBooking(false);
    setJoin(true);
  };
  const handleBooking = () => {
    setLangganan(false);
    setBooking(true);
    setJoin(false);
  };
  return (
    <View>
      <Text style={styles.futsaltext}>Futsall Skuyyy</Text>
      <View style={styles.content}>
        <TouchableOpacity onPress={hanleLanggana}>
          <View style={styles.langganan(langganan)}>
            <View style={styles.IconLanggnanan}>
              <IconLangganan />
            </View>
            <View style={styles.TextLangganan}>
              <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>
                Paket
              </Text>
              <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>
                langganan
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleJoin}>
          <View style={styles.Join(join)}>
            <View style={styles.IconLanggnanan}>
              <IconBooking />
            </View>
            <View style={styles.TextLangganan}>
              <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>
                booking
              </Text>
              <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>
                Lapangan
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBooking}>
          <View style={styles.joinTim(booking)}>
            <View style={styles.iconJoin}>
              <IconJoinTeam />
            </View>
            <View style={styles.TextJoin}>
              <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>
                Join
              </Text>
              <Text style={{color: 'gray', fontSize: 16, fontWeight: 'bold'}}>
                Tim
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimFutsal;

const styles = StyleSheet.create({
  futsaltext: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 18,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  langganan: (data) => ({
    alignItems: 'center',
    backgroundColor: data ? '#d4a1ed' : '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    paddingTop: 10,
    paddingBottom: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  }),
  TextLangganan: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Join: (data) => ({
    alignItems: 'center',
    backgroundColor: data ? '#d4a1ed' : '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    paddingTop: 10,
    paddingBottom: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  }),
  joinTim: (data) => ({
    alignItems: 'center',
    backgroundColor: data ? '#d4a1ed' : '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    paddingTop: 10,
    paddingBottom: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  }),
  TextJoin: {
    flexDirection: 'column',
  },
});
