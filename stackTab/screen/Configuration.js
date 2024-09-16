import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation


function Configuration() {
  const navigation = useNavigation(); // Hook para acceder a la navegación
    const termCond = "Al utilizar esta aplicación, usted acepta estos Términos de Servicio. Estos términos establecen un acuerdo legal entre usted y [Nombre de tu empresa]. Al acceder o utilizar cualquier parte de la aplicación, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con todos los términos y condiciones de este acuerdo, entonces no debe utilizar la aplicación."

    const security = "La seguridad de sus datos personales es nuestra prioridad. Hemos implementado medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales de la pérdida, el uso indebido, el acceso no autorizado, la divulgación, la alteración y la destrucción. Sin embargo, tenga en cuenta que ninguna transmisión de datos a través de Internet o sistema de almacenamiento electrónico es completamente segura."

  return (
    <View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:25}}>Aquí se hará uso de replace</Text>
        </View>
      {/* ... otros elementos de configuración ... */}
      <TouchableOpacity onPress={() => navigation.replace('TermsStack',{message:termCond})}>
        <Text style={styles.optionItem}>Términos de Servicio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('TermsStack',{message:security})}>
        <Text style={styles.optionItem}>Seguridad</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.optionItem}>Cambiar tema</Text>{/*El plan es poner muchos temas*/}
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
});

export default Configuration;