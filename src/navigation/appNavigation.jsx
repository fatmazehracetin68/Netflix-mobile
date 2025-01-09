import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigation} from './tabNavigation';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
