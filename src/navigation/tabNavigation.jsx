import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppScreens} from './types';
import FavoriteScreen from '../screens/FavoriteScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {StackNavigation} from './stackNavigation';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="home" size={24} color={color} />
          ),
        }}
        name={AppScreens.StackHome}
        component={StackNavigation}
      /> */}
      <Tab.Screen
        name={AppScreens.StackHome}
        component={StackNavigation}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          const hiddenRoutes = [AppScreens.Start, AppScreens.User]; // Tab bar'ın gizleneceği ekranlar
          return {
            tabBarStyle: hiddenRoutes.includes(routeName)
              ? {display: 'none'}
              : {}, // Gizle veya göster
            tabBarIcon: ({color, size}) => (
              <Fontisto name="home" size={24} color={color} />
            ),
          };
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="heart" size={size} color={color} />
          ),
        }}
        name={AppScreens.Favorites}
        component={FavoriteScreen}
      />
    </Tab.Navigator>
  );
};
