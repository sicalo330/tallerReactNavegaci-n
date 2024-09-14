import React from "react";
import { Text } from "react-native";

function DestinyConditional({route}){
    const {message} = route.params
    return(
        <Text>Mensaje: {message}</Text>
    )
}

export default DestinyConditional