import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
      <Tab.Navigator>
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
