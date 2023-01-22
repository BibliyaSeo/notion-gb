import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import PlaceListScreen from '../screens/PlaceListScreen';
import PlanScreen from '../screens/PlanScreen';
import PlaceListDetailScreen from '../screens/PlaceListDetailScreen';
import ReservationScreen from '../screens/ReservationScreen';
import FoodScreen from '../screens/FoodScreen';
import PayScreen from '../screens/PayScreen';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Food" component={FoodScreen} />
      <Stack.Screen name="Place" component={PlaceListScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceListDetailScreen} />
      <Stack.Screen name="Plan" component={PlanScreen} />
      <Stack.Screen name="Pay" component={PayScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />
    </Stack.Navigator>
  );
}
