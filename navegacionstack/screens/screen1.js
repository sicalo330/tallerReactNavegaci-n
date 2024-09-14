import React from "react";
import { Button, Text } from "react-native";
import { StackActions } from "@react-navigation/native";

function Screen1({navigation}){
    return(
        <>
            <Text>Bienvenido a la primera pantalla</Text>
            <Button 
                title="Ir a screen2" 
                onPress={() => navigation.navigate('Screen2', { message: 'Hola desde Screen 1' })}></Button>
            <Button 
                title="Ir a replace" 
                onPress={() => navigation.navigate('Replace')}></Button>
            <Button 
                title="Ir a conditional" 
                onPress={() => navigation.navigate('Conditional')}></Button>
        </>
    )
}

export default Screen1