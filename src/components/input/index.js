import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

const Input = ({ value, onChangeText }) => {
    return (
        <TextInput 
        style={styles.textInput} 
        placeholder='Agrega una nueva tarea'
        value={value}
        onChangeText={onChangeText}
        />
    )
};

export default Input;