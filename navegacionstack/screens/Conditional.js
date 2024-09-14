import React, { useState } from "react";
import { Text, TextInput, View,StyleSheet, Button } from "react-native";

function Conditional({navigation}){
    const [component, setComponent] = useState("")

    const findComponent = (text) => {
        if(text != "DestinyConditional"){
            alert("No se introdujo bien el componente a ir")
            return
        }
        navigation.navigate(text,{message:"Hola desde Conditional"})
    }

    return(
        <View>
            <TextInput
                onChangeText={(text) => setComponent(text)}
                style={styles.input}
                placeholder="Introduce the component"
                placeholderTextColor="#999"
            />
            <Button title="Submit" onPress={() => findComponent(component)} />
            <Text>Introducir DestinyConditional</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        backgroundColor: '#ccc', // Fondo gris
    },
    input: {
        height: 40,
        borderColor: '#000',  // Color del borde negro
        borderWidth: 1,
        borderRadius: 5,      // Bordes redondeados
        backgroundColor: '#fff', // Fondo blanco del TextInput
        paddingHorizontal: 10,
        color: '#000' // Color del texto
    },
    text: {
        marginTop: 10,
        color: '#000', // Color del texto
    }
});

export default Conditional