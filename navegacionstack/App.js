import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importamos las pantallas desde la carpeta 'screens'
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';
import Replace from './screens/replace';
import ReplacedComponent from './screens/replacedComponent';
import Conditional from './screens/Conditional';
import DestinyConditional from './screens/DestinyConditional';

// Creamos un StackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    // El NavigationContainer es el contenedor principal que maneja toda la navegación en la app
    <NavigationContainer>
      {/* El Stack.Navigator maneja la pila de pantallas para la navegación de stack */}
      <Stack.Navigator initialRouteName="Screen1">
        {/* Cada Stack.Screen representa una pantalla en el stack */}
        {/* 'navigation' será automáticamente pasado a cada pantalla */}
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Replace" component={Replace} />
        <Stack.Screen name="ReplacedComponent" component={ReplacedComponent} />
        <Stack.Screen name="Conditional" component={Conditional} />
        <Stack.Screen name="DestinyConditional" component={DestinyConditional} />
        {/*        
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
