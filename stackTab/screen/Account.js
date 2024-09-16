import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

export default function Account() {
  const navigation = useNavigation(); // Hook para acceder a la navegación

  const [URL, setURL] = useState([
    {
      title: "Alfredo Morales",
      image:
        "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
    },
  ]);

  const [image, setImage] = useState([
    {
      description: "Comiendo saludable jajaaja",
      image:"https://static8.depositphotos.com/1000339/1004/i/450/depositphotos_10047390-stock-photo-chicken-salad.jpg",
    },
    {
      description: "Comiendo un filete en una tabla de cortar, no sé qué más decir",
      image:"https://www.shutterstock.com/image-photo/grilled-beef-fillet-steaks-herbs-260nw-2502229381.jpg",
    },
    {
      description: "Viendo el everest",
      image:"https://c.files.bbci.co.uk/89DF/production/_115959253_gettyimages-629600855.jpg",
    },
    {
      description: "Sacando a mis hijos",
      image:"https://st3.depositphotos.com/1913515/32088/i/450/depositphotos_320883414-stock-photo-two-happy-dogs-playing-together.jpg",
    },
    {
      description: "Yo con los reales",
      image:"https://www.shutterstock.com/shutterstock/photos/2076019483/display_1500/stock-photo-football-game-defender-knocks-ball-from-the-attacker-2076019483.jpg",
    },
    {
      description: "Reparando la casa con mi compa",
      image:"https://media.istockphoto.com/id/973812618/es/foto/hombre-en-escalera-limpiar-canal%C3%B3n-de-la-casa-de-las-hojas-y-suciedad.jpg?s=612x612&w=0&k=20&c=2JY-TMLJzUWqWUF0U04yjbT3cTIez_mibxb3A_CRTr8=",
    },
    {
      description: "Tocando la ballada de chopin en re mayor",
      image:"https://media.gq.com.mx/photos/6255e3d685bcb733bbcbae2d/16:9/w_2560%2Cc_limit/piano-1195436529.jpg",
    },
    {
      description: "Por fin termineeeee",
      image:"https://png.pngtree.com/background/20230517/original/pngtree-drawing-an-eye-in-pencils-with-a-person-drawing-picture-image_2637922.jpg",
    },
  ]);

  // Agrupar imágenes en filas de 4
  const chunkedImages = [];
  for (let i = 0; i < image.length; i += 4) {
    chunkedImages.push(image.slice(i, i + 4));
  }

  const handlePress = (picture) => {
    // Navegar a una pantalla específica con el objeto de navegación
    navigation.navigate('Pictures', { picture });
  };

  return (
    <View style={styles.container}>
      {URL.map((item, index) => (
        <View key={index} style={styles.AccountPicture}>
          <Image source={{ uri: item.image }} style={styles.profileImage} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      ))}
      <View>
        {chunkedImages.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                onPress={() => handlePress(item)} // Navegación al hacer clic
              >
                <Image source={{ uri: item.image }} style={styles.image} />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f6f7",
    padding: 10,
  },
  AccountPicture: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
    marginRight: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // Espacio uniforme entre las imágenes
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    margin: 5,
  },
});
