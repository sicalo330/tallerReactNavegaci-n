import React from "react";
import { Button } from "react-native";

function Replace({navigation}){
    return(
        <Button 
        title="Reemplazar"
        onPress={() => navigation.replace('ReplacedComponent')}></Button>
    )
}

export default Replace