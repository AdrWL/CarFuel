import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FuelCalculator } from '../screens/FuelCalculator';
import { CarAdd } from '../screens/CarAdd'; 
import { Home } from '../screens/Home'; 
import { RootStackParamList } from '../navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        title: "",
        headerBackTitle: "",
        headerShadowVisible: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen 
        name="FuelCalculator" 
        component={FuelCalculator} 
      />
      <Stack.Screen 
        name="CarAdd" 
        component={CarAdd} 
        options={{ title: 'CarAdd' }} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
      />
    </Stack.Navigator>
  );
}
