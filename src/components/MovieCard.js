// // src/components/MovieCard.js

// import React from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';

// export default function MovieCard({movie}) {
//   if (!movie) {
//     return (
//       <View style={styles.card}>
//         <Text style={styles.errorText}>Film bilgisi yüklenemedi.</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.card}>
//       {movie.Poster && (
//         <Image
//           source={{uri: movie.Poster}}
//           style={styles.poster}
//           resizeMode="contain"
//         />
//       )}
//       <Text style={styles.title}>{movie.Title || "Başlık Bulunamadı"}</Text>
//       <Text style={styles.subtitle}>{movie.Year || "Yıl Bilgisi Yok"}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     margin: 10,
//     width: '100%',
//     height: 300,
//     borderRadius: 10,
//     backgroundColor: '#000000',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   poster: {
//     width: "100%",
//     height: 180,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   title: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subtitle: {
//     color: 'gray',
//     fontSize: 14,
//     marginTop: 5,
//   },
//   errorText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });
