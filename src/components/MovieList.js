// MovieList.js

import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {MovieContex} from '../context/MovieContex';
import MovieCard from './MovieCard';

export default function MovieList() {
  const {movies, loading, error} = useContext(MovieContex);

  // Yükleniyor durumu
  if (loading) {
    return (
      <View>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  // Hata durumu
  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  // Eğer movies boşsa, kullanıcıya bilgi ver
  if (!movies.length) {
    return (
      <View>
        <Text>Henüz gösterilecek film yok</Text>
      </View>
    );
  }

  // Film listesi varsa, her birini MovieCard bileşeninde listele
  return (
    <View>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </View>
  );
}
