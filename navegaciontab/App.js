import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

// Importamos las pantallas desde la carpeta 'screens'
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionScreen';
import QuizScreen from './screens/QuizScreen';

// Creamos el BottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // El NavigationContainer es el contenedor principal que maneja la navegación de toda la app
    <NavigationContainer>
      {/* El BottomTabNavigator renderiza las pestañas en la parte inferior */}
      <Tab.Navigator>
        {/* Cada Tab.Screen representa una pestaña */}
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Option" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
