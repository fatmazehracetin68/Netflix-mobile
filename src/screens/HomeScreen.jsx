import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Header from '../components/Header';
import MovieScreen from './MovieScreen';
FlatList;

export default function HomeScreen() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]); // Popüler filmler için state
  const apiKey = '0201de6449ad2382bd23f008a3950ef6'; // TMDb API anahtarı
  const imageUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchNewReleases = async () => {
      const endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Failed to fetch new releases:', error);
      }
    };

    const fetchPopularMovies = async () => {
      const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setPopularMovies(data.results || []);
      } catch (error) {
        console.error('Failed to fetch popular movies:', error);
      }
    };

    fetchNewReleases();
    fetchPopularMovies();
  }, []);

  return (
    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
      <Header />
      <View style={styles.title}>
        <Text style={styles.text}>Diziler</Text>
        <TouchableOpacity onPress={() => navigation.navigate(MovieScreen)}>
          <Text style={styles.text}>Filmler</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Kategoriler</Text>
      </View>
      <View>
        <Image
          style={{height: 300, weight: 100, marginVertical: 20}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ngIkLyE0l5jv1sehxIE6h60qvvqG-aQNovkXWt6KOe-jU4rChxipBDd452dUkJg0fzI&usqp=CAU',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 50,
        }}>
        <TouchableOpacity style={styles.button}>
          <Icon name="play" />
          <Text>Oynat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="plus" />
          <Text>Listem</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 'column'}}>
        <Text style={{fontSize: '20', fontWeight: 'bold', margin: 12}}>
          Yeni Çıkanlar
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movies.slice().reverse()}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              <Image
                source={{uri: imageUrl + item.poster_path}}
                style={styles.image}
              />
            </View>
          )}
        />
      </View>
      <View style={{flex: 'column'}}>
        <Text style={{fontSize: '20', fontWeight: 'bold', margin: 12}}>
          En Çok Arananlar
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              <Image
                source={{uri: imageUrl + item.poster_path}}
                style={styles.image}
              />
            </View>
          )}
        />
      </View>
      <View style={{flex: 'column'}}>
        <Text style={{fontSize: '20', fontWeight: 'bold', margin: 12}}>
          Türkiye'de Bugünün Top 10 Listesi
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <FontAwesome6 name="1" size={70} />
            <Image
              style={{width: 60, height: 80}}
              source={{
                uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUhIeREhopcvBBuQ6RVefxWkdui5vUbLezt3EVczAxAkpvUhhMhDoPzz1FVoAqck-zdtCkG2NyMGmnWwRgPsQvnAGmFFIwhI0u_vt1-dWiMiD0f1i5xBUtKAoiK8eJtnHdzH4B22Hery55svkGsCGu6U_D2wuDnP_apKRgAVr5pRKzSMSljtfO2MBwN9UHZTan0IVYXJHBpoxAt1wEqawz37L5II0xwWThj7Mju-89fLLLZP28H9BHkd6K3THc_eCYN1Il2lyd57x-MX8NbYKCXbho9xTg8BJnlx-kBrtQCoN0yxu-Pa.jpg?r=f50',
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <FontAwesome6 name="2" size={70} />
            <Image
              style={{width: 60, height: 80}}
              source={{
                uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfuXDhHZ1oEtDkppkd5cu67uSb958NqzHsSTJVKCuS9l_m9CjhYNFnqF0K2LFO8qmwWKhOv3WuF31TMIiEEmX4KSMxUREzsAS1SjYrbH2w7N-eKt2RgNoR_GrYgJ46EsyyliKo7cmrIuU4tEE1WqQPYoNGyh_KGlePkR5AeRTdbBzsCEDnCEhZGofRolPMjq5Rbro4SpGQBY8iOdp5xz74m3OoDRQHCttSBNUn4Wrfck8SvE1Crm-q-EcgLE2CPav7W0l5lSaGPDCbL5Cv9p4AkDVSXa-kHVcCgcUyqGy0AW-Py49_AHgrg.jpg?r=da7',
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <FontAwesome6 name="3" size={70} />
            <Image
              style={{width: 60, height: 80}}
              source={{
                uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZxDRduW7ei02ETnKH9rrGj_rOqonXeFhQmrw-dtq1WFSiZU9Wf338dOlotydzPvkbRwfMhdPAiJYosy_VxEs1n3_zE7svmubSQVIvxAusztf-8nsOD-rk_zy6YqrTooyEcTULhJXez_9FzOzZNhtkCcCsOtwlxVFCOKNQ5q_V5Z0E_WD5Bw5ZjuvUfh8KUQ6JFvOAVBj11Ykzk-6boldk74aUlJfnZ8-GZ-0sgwPCQbQXAwSImkkwv4nD3ufaW_Oi9mcomIcLOd3sQqmGssP-1ujBaV1k12HBN1sqqq17Brv5l7uXen2ds.jpg?r=9ea',
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <FontAwesome6 name="4" size={70} />
            <Image
              style={{width: 60, height: 80}}
              source={{
                uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRNDgU0JPYWsIYJJTOh9VwBHuuq0aJnKNZeiWuyhVs4JQz9chYBGyru-YgPj7MmbN3tz8Fk9ZHGuf6DoZ1t3lOUfq0fjohwI7m-A-P06hTdfZXvXi9bXgUjnrDDV563oUYUjBg.jpg?r=0e7',
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <FontAwesome6 name="5" size={70} />
            <Image
              style={{width: 60, height: 80}}
              source={{
                uri: 'https://occ-0-7292-2706.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRviIND3ew8MJdrgBSBZzIy0TCDyAauEgi1oABGXuK7FEEm2uBThDUbUmZQVF5KvYjwOoKfw16Hgw0Fl-_UC3HQJNnzkFLqrorJPjtkJwcHKGC9GPah45pIT9kEEv7BFCdhFkHPjhUc6ELFxno96fyKTgjS7OrGN51pVlK0Mb--KtH91vO1nGS56kOkIz8YbjpWJYRJdt-lGl28uMY4sV5JwxRxD52oKZyLjrXhZdyGaeGi8e3AkmxSaYjcJqDP2I-pk9IAY6rm1P8gUJpT9RT9woVSM9LRNfiVdGW2ppnZymVq2ALwt.jpg?r=7d7',
              }}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 3,
    marginTop: 3,
  },
  text: {
    border: 5,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#cdcdcd',
    width: 90,
    height: 30,
    textAlign: 'center',
    padding: 5,
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: '#cdcdcd',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    fontSize: 'large',
    borderRadius: 10,
  },
  image: {width: 100, height: 150, border: 3, marginHorizontal: 5},
  movieItem: {flexDirection: 'row'},
});
