import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  // Importamos los íconos, fundamental para que los iconos funcionen

// Importamos las pantallas
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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            //Se declara el nombre del ícono
            let iconName;

            // Aquí seleccionamos el ícono basado en el nombre de la ruta
            if (route.name === 'Image') {
              iconName = 'image';
            } else if (route.name === 'Option') {
              iconName = 'cog';  
            } else if (route.name === 'Quiz') {
              iconName = 'account-question';
            }

            // Retornamos el ícono de MaterialCommunityIcons con su color y tamaño
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple',  // Color de íconos activos
          tabBarInactiveTintColor: 'gray',  // Color de íconos inactivos
          tabBarStyle: {
            height: 80, // Ajusta la altura total de la barra de pestañas
            paddingHorizontal: 20, // Espaciado interior horizontal de la barra de pestañas
            paddingBottom: 10, // Espaciado inferior de la barra de pestañas
            paddingTop: 10, // Espaciado superior de la barra de pestañas
          },
          tabBarItemStyle: {
            marginHorizontal: 10, // Margen entre los botones
            paddingVertical: 5, // Espaciado vertical dentro de cada botón
          },
          tabBarLabelStyle: {
            fontSize: 14, // Tamaño del texto de la etiqueta
          },
        })}
      >
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Option" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
