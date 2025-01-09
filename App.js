import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import {MovieProvider} from './src/context/MovieContex';

export default function App() {
  return (
    <MovieProvider>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation />
      </SafeAreaView>
    </MovieProvider>
  );
}
