import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import MovieDetailScreen from './MovieDetail';

export default function MovieScreen({route}) {
  const [movies, setMovies] = useState([]);
  const apiKey = '0201de6449ad2382bd23f008a3950ef6'; // Dış uygulamadan aldığın API key
  const imageUrl = 'https://image.tmdb.org/t/p/w500';

  // Parametreleri route.params üzerinden alıyoruz
  const searchParams = route?.params?.searchParams || {};
  const navigation = useNavigation();
  useEffect(() => {
    const fetchMovies = async () => {
      const endpoint = searchParams.genre
        ? `https://api.themoviedb.org/3/movie/${searchParams.genre}?api_key=${apiKey}&language=en-US&page=1`
        : `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, [searchParams]);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Filmler</Text>

      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.movieItem}
            onPress={() =>
              navigation.navigate('MovieDetailScreen', {movie: item})
            }>
            <Image
              source={{uri: imageUrl + item.poster_path}}
              style={styles.image}
            />
            <Text style={styles.movieTitle}>{item.title || item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'start',
    marginLeft: 10,
  },
  movieItem: {
    marginBottom: 20,
    alignItems: 'center',
    gap: 3,
  },
  image: {
    width: 180,
    height: 225,
    borderRadius: 10,
    margin: 8,
  },
  movieTitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});
