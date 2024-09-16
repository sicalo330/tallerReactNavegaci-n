import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

export default function Home() {
    const navigation = useNavigation()
  const [URL, setURL] = useState([
    {
      title: "Alfredo Morales",
      image: "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png",
    },
    {
      title: "Will Smith",
      image: "https://es.web.img2.acsta.net/pictures/17/02/08/16/50/452749.jpg",
    },
    {
      title: "Zendaya",
      image: "https://media.vogue.mx/photos/5de2ec5638e2b300084b0fc7/1:1/w_2000,h_2000,c_limit/Zendaya.jpg",
    },
    {
      title: "Leonardo Dicaprio",
      image: "https://pics.filmaffinity.com/107096988846060-nm_200.jpg",
    },
    {
      title: "Mark Sinclair Vincent",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png",
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



  return (
    <>
        {/*Esto genera un scroll view que se mueve de forma horizontalm y hace que la barra no se vea*/}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {URL.map((item, index) => (
            <TouchableOpacity key={index}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>
                {item.title.length > 5 //Si los caracteres superan los 5 aparecen ... despuéss
                  ? item.title.substring(0, 5) + "..."
                  : item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.containerPicture}>
        <FlatList
            data={image}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.imageContainerPicture}>
                <TouchableOpacity onPress={() => {navigation.navigate('Account')}}>
                    <View style={{flexDirection:"row"}}>
                        <Image source={{uri: 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png'}} style={{width:50, height:50}} />
                        <Text style={{marginTop:15}}>Alfredo Morales</Text>
                    </View>
                </TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.imagePicture} />
            </TouchableOpacity>
            )}
            keyExtractor={(item) => item.image}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f4f6f7",
      padding: 0,
      margin: 0, // Asegúrate de que no haya margen adicional en el contenedor
    },
    row: {
      flexDirection: "row",
      margin: 0, // Eliminar márgenes
      padding: 0, // Eliminar padding
    },
    image: {
      width: 80,
      height: 80,
      margin: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    containerPicture: {
      flex: 1,
      padding: 0, // Reducir cualquier padding en el contenedor de las imágenes
      marginTop: -550, // Asegúrate de no tener márgenes superiores entre las secciones
    },
    imageContainerPicture: {
      aspectRatio: 1,
      margin: 5,
    },
    imagePicture: {
      borderRadius: 500,
      flex: 1,
    },
  });
  