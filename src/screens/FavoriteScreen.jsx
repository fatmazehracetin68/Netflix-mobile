import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Listem</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcll3ekKRP_Gd1-G-bVLFDFBgRgTWMQhPH0xMY1PAonVqJS3Euuo4EooVHNz6ncFL35dGDmyQwwfMYKDp-JUlz-oxKmiA6c7BDN8PmDt_Mpwr6hVGmC6KMECrdquMq2NWlx6.jpg?r=578',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSaFAaNKwDDZyhGKIpySvjt7KCcwi3a6Cj_1lQWhA2fpgLERij88ErWO909Xsk4hJHyAO_Ak4H2P1bdFwVoUiCbeTCImwvmYEWHWj-3hQGZjsx4JjM71Dl66qR5B5WTuslIxa1WfgVqI8cnK0fZe1p0F2zj-5IzMMqA.jpg?r=353',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  text: {fontSize: 30, color: 'white', padding: 10},
  image: {width: 350, height: 200, marginBottom: 10},
});
