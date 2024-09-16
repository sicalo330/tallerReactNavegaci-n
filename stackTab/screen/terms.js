import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation


function Terms({route}) {
    const navigation = useNavigation()
    const {message} = route.params
  return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Información adicional</Text>
        <Text>{message}</Text>
        <Button title='Volver' onPress={() => navigation.replace('ConfigurationStack')} />
      </View>
  );
}

export default Terms;