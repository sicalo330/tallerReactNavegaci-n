import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, View, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

function Theme() {
    const navigation = useNavigation(); // Hook para acceder a la navegación
  const theme = [
    {
      image: "https://img.freepik.com/fotos-premium/pared-blanca-fondo-blanco-que-dice-palabra-cita_994023-371201.jpg",
    },
    {
      image: "https://img.freepik.com/vector-gratis/fondo-oscuro-grunge_1048-11745.jpg",
    },
    {
      image: "https://img.freepik.com/foto-gratis/fondo_53876-42300.jpg",
    },
    {
      image: "https://thumbs.dreamstime.com/b/fondo-verde-de-la-textura-del-papel-cart%C3%B3n-modelo-claro-154882885.jpg",
    },
  ];

  return (
    <View style={styles.container}>
        <Button title='Volver' onPress={() => navigation.replace('ConfigurationStack')} />
      <FlatList
        data={theme}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Ocupa todo el espacio disponible
      padding: 10,
    },
    imageContainer: {
      flex: 1, // Cada imagen ocupa el mismo espacio
      aspectRatio: 1,
      margin: 5,
    },
    image: {
        borderRadius:500,
        flex: 1,
        resizeMode: 'cover', // Escala la imagen para cubrir todo el contenedor
    },
  });
  
export default Theme;