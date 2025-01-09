import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetailScreen({route}) {
  const {movie} = route.params; // Film bilgilerini route.params üzerinden alıyoruz

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: imageUrl + movie.poster_path}}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title || movie.name}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
  },
  overview: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify',
  },
  releaseDate: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'left',
  },
});
