import React from "react";
import { Button, Text } from "react-native";

function Screen2({route,navigation}){
    const {message} = route.params;
    return(
        <>
            <Text>HEEY{message}</Text>
            <Button title="Ir a Screen 3" 
            onPress={() => navigation.navigate('Screen3',{message: 'Hola dede Screen2'})}></Button>
            <Button
                title="Regresar" 
                onPress={() => navigation.goBack(null)}></Button>
        </>
    )
}

export default Screen2