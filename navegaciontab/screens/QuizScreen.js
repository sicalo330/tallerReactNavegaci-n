import React, { useState } from "react";
import { View,Text, TextInput,Button, ScrollView } from "react-native";
import { RadioButton } from 'react-native-paper';

export default function QuizScreen(){
    const [answer, setAnswer] = useState({
        answer1:'',
        answer2:'',
        answer3:'',
        answer4:''
    })

    const [allAnswered, setAllAnswered] = useState(false)

    const putAnswer = (addAnswer, value) => {
        setAnswer(prevAnswers => ({
            ...prevAnswers,
            [addAnswer]: value
          }));        
    }

    const allQuestionsAnswered = () => {
        return Object.values(answer).every(answer => answer.trim() !== '');
    };

    // Función que se llama al presionar el botón de enviar
    const handleSubmit = () => {
        if (allQuestionsAnswered()) {
            console.log('Respuestas enviadas:', answer);
            setAllAnswered(true)
        } else {
            alert('Por favor, responde a todas las preguntas')
        }
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* Contenido simple de la pantalla Home */}
            <View>
                <Text>¿Cuál es tu color favortio?</Text>
                <TextInput
                    placeholder="Escribe tu respuesta"
                    value={answer.answer1}
                    onChangeText={text => putAnswer('answer1', text)}
                />
            </View>
            <View>
            <Text>¿Cuál de estos tres dice verde?</Text>
                <RadioButton.Group
                    onValueChange={value => putAnswer('answer2', value)}
                    value={answer.answer2}
                >
                    <RadioButton.Item label="Rojo" value="rojo" />
                    <RadioButton.Item label="Azul" value="azul" />
                    <RadioButton.Item label="Verde" value="verde" />
                </RadioButton.Group>
            </View>
            <View>
            <Text>¿Cuándo se descubrió América?</Text>
                <RadioButton.Group
                    onValueChange={value => putAnswer('answer3', value)}
                    value={answer.answer3}
                >
                    <RadioButton.Item label="1942" value="1942" />
                    <RadioButton.Item label="1492" value="1492" />
                    <RadioButton.Item label="1249" value="1249" />
                </RadioButton.Group>
            </View>
            <View>
            <Text>¿Quién inventó la maquina de Turing?</Text>
                <RadioButton.Group
                    onValueChange={value => putAnswer('answer4', value)}
                    value={answer.answer4}
                >
                    <RadioButton.Item label="Ernest Rutherford" value="Ernest Rutherford" />
                    <RadioButton.Item label="Issac Newton" value="Issac Newton" />
                    <RadioButton.Item label="Alan Turing" value="Alan Turing" />
                </RadioButton.Group>
            </View>
            <Button title="Send answers" onPress={handleSubmit} />
            {allAnswered? 
            <>
                <Text>Respuesta1:{answer.answer1}</Text>
                <Text>Respuesta2:{answer.answer2}</Text>
                <Text>Respuesta3:{answer.answer3}</Text>
                <Text>Respuesta4:{answer.answer4}</Text>
            </>
             :
             <Text>Por favor responder las preguntas</Text>
            }
            </View>
        </ScrollView>
      );
}