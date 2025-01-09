import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Logo from '../components/Logo';
import {useNavigation} from '@react-navigation/native';

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABc9ACA1iQFbNPP1-n3X0yz6wUBWQIiI_jcETqy4m-R94mH4qWhhzpg735anlhbfr2tcNNRCF27_xvKaJoDPXXhQQnLifvOK0RZxs.jpg?r=376',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZhqrijVzr6zlZf2xwC7zAKi0FhavDysOGhgcCnOVybLYuKmw1ey6L9lJ7t-LA0VK_UQPnQk6aKykyCC1p84cKDJUd8AkQAbrcit.jpg?r=d2a',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcHAIt7mBYE9zS06vCPP0KuIZ8kU_FWvh1UFDfg8v871bA1gCcVxNIHGt_eKe6seeZqoI21c0If5NqExIXdhIr8kDiynqsje_MaF.jpg?r=137',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbAuHOj0XqLPIHaaYFtmnnGZrGruMO1uKNLe6wqvl0PO6df5is63OZPNAw_08h3BsY6xIwkaLTkQdxG8nW8eM3sfvKawIRowf3vc.jpg?r=797',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWL0p7klRJDmkNzvBO3Tg4vWL2coWk1UayRandKpr0fwxxZxOtT_3YPkpxB2McxNOcZOnKMS-Dx4ENrvnvh-rQ7qyz9wMRkJ4sml.jpg?r=215',
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABY_yoVJDdCx4dvn_MQ-hjomLyf_pH9Yt0N-x1rk309joLo-SRcuTW-ymJWO0P4B_jNfoaRvuyAVHXvAHYXYcYCNvQCia6L43eJ23.jpg?r=98e',
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('UserScreen')}>
        <Text style={styles.text}>Başlayalım</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    borderWidth: 3,
    width: 250,
    padding: 4,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'red',
    marginTop: 8,
  },
  image: {width: 150, height: 190, margin: 5},
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
