import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppScreens} from './types';
import HomeScreen from '../screens/HomeScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import MovieScreen from '../screens/MovieScreen';
import UserScreen from '../screens/UserScreen';
import StartScreen from '../screens/StartScreen';
import MovieDetailScreen from '../screens/MovieDetail';

const Stack = createNativeStackNavigator();
export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AppScreens.Start}>
      <Stack.Screen
        name={AppScreens.Start}
        component={StartScreen}
        options={{
          tabBarStyle: {display: 'none'}, // StartScreen'de tab bar'ı gizle
        }}
      />
      <Stack.Screen name={AppScreens.User} component={UserScreen} />
      <Stack.Screen name={AppScreens.Home} component={HomeScreen} />
      <Stack.Screen name={AppScreens.Movie} component={MovieScreen} />
      <Stack.Screen name={AppScreens.Person} component={PersonScreen} />
      <Stack.Screen
        name={AppScreens.MovieDetail}
        component={MovieDetailScreen}
      />
      <Stack.Screen name={AppScreens.Search} component={SearchScreen} />
    </Stack.Navigator>
  );
};
