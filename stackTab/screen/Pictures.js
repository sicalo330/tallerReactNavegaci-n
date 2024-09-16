import React from "react";
import { Text, View ,Image,StyleSheet } from "react-native";

function Pictures({route}){
    const {picture} = route.params

    return(
        <>
        <View style={styles.container}>
            <Text>{picture.description}</Text>
            <Image source={{uri: picture.image}} style={styles.image} />
        </View>
        </>
)
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },  
    image: {
        width: 250,
        height: 150,
        margin: 5,
    },
  });
  

export default Pictures