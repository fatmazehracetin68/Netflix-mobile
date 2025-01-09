import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

export default function UserScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kim izliyor?</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{
              uri: 'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg',
            }}
          />
          <Text style={styles.userTitle}>Kaan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg',
            }}
          />
          <Text style={styles.userTitle}>Fatma</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{
              uri: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg',
            }}
          />
          <Text style={styles.userTitle}>Gökçe</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="circle-with-plus"
            size={95}
            style={styles.image}
            color="grey"
          />
          <Text style={styles.userTitle}>Profil Ekle</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textProfil}>Profil Yönetimi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black', flexDirection: 'column'},
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginVertical: 130,
  },
  image: {width: 100, height: 100, marginHorizontal: 30, marginBottom: 20},
  userTitle: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -80,
  },
  textProfil: {
    fontSize: 25,
    color: 'grey',
    borderWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
    marginTop: 110,
    width: 180,
    marginHorizontal: 'auto',
    padding: 5,
  },
});
