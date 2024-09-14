import React from "react";
import { Button, Text } from "react-native";
import { CommonActions } from "@react-navigation/native";

function Screen3({route, navigation}) {
    const { message } = route.params;

    return (
        <>
            <Text>Hola {message}</Text>
            <Button
                title="Regresar" 
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Reiniciar pilas" 
                onPress={() => navigation.dispatch(CommonActions.reset({
                    index: 0, // Índice de la ruta inicial
                    routes: [{ name: 'Screen1' }] // Ruta a la que se reseteará el stack
                }))}
            />
        </>
    );
}

export default Screen3;
