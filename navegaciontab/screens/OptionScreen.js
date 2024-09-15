import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function OptionsScreen() {
  const [options, setOptions] = useState([
    { id: '1', title: 'Cuenta' },
    { id: '2', title: 'Notificaciones' },
    { id: '3', title: 'Reproducciones y rendimiento' },
    { id: '4', title: 'Privacidad' },
    { id: '5', title: 'Aplicaciones activadas' },
    { id: '6', title: 'Términos y Condiciones' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerText}>Opciones de Configuración</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            //TouchableOpacity da la sensación de que se presionó 
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
});
