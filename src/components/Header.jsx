import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '../components/Logo';

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon name="menuunfold" size={30} style={{marginTop: 8}} />
      <Logo />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(AppScreens.Search);
          }}>
          <Icon name="search1" size={30} style={{marginTop: 8}} />
        </TouchableOpacity>
        <Image
          style={{width: 30, height: 30, marginTop: 5, borderRadius: 5}}
          source={{
            uri: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    alignItems: 'center',
  },
});
