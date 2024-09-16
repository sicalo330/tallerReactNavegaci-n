import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  // Importamos los íconos, fundamental para que los iconos funcionen


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screen/Home';
import Account from './screen/Account';
import Configuration from './screen/Configuration';
import Pictures from './screen/Pictures';
import Terms from './screen/terms';
import Theme from './screen/Theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator que incluye las pantallas de Account y Pictures
function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountScreen" component={Account} />
      <Stack.Screen name="Pictures" component={Pictures} />
    </Stack.Navigator>
  );
}

function ConfigurationStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="ConfigurationStack" component={Configuration} />
      <Stack.Screen name="TermsStack" component={Terms} />
      <Stack.Screen name="ThemeStack" component={Theme} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            //Se declara el nombre del ícono
            let iconName;

            // Aquí seleccionamos el ícono basado en el nombre de la ruta
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Account') {
              iconName = 'account';  
            } else if (route.name === 'Configuration') {
              iconName = 'cog';
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
        <Tab.Screen name="Home" component={Home} />
        {/* Reemplazamos la pantalla Account por el AccountStack */}
        <Tab.Screen name="Account" component={AccountStack} />
        <Tab.Screen name="Configuration" component={ConfigurationStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
