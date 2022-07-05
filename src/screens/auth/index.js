import React, { useState, useReducer } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, Text, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { Input } from "../../components";
import { UPDATED_FORM, onInputChange, onFocusOut } from "../../utils/forms";
import { signin, signup } from "../../store/action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const initialState = {
    email: { value: '', touched: false, hasError: true, error: '' },
    password: { value: '', touched: false, hasError: true, error: '' },
    isFormValid: false,
};

const formReducer = (state, action) => {
    switch(action.type) {
        case UPDATED_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
            };
        default:
            return state;
    }
};

const Auth = () => {
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Iniciar sesión' : 'Registrarse';
    const message = isLogin ? '¿Aún no tienes una cuenta?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Registrarte' : 'Ingresar';
    const buttonText = isLogin ? 'Iniciar' : 'Registrarte';

    const onChangeText = (text, type) => {
        onInputChange(type, text, dispatchFormState, formState)
    }

    const onBlurInput = (text, type) => {
        onFocusOut(type, text, dispatchFormState, formState);
    };

    const onHandlerSubmit = () => {
        dispatch(isLogin ? signin(formState.email.value, formState.password.value) : signup(formState.email.value, formState.password.value));
    }

   

    const onChangeAuth = () => {
        formState.password.value;
        formState.email.value;
        setIsLogin(!isLogin)
    };

    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input
                label= 'Correo electrónico'
                placeholder= 'Digita tu Correo'
                placeholderTextColor={colors.defaultLight}
                keyboardType= 'email-address'
                autoCapitalize="none"
                autoCorrect={false}
                value={formState.email.value}
                onChangeText={(text) => onChangeText(text, "email")}
                onBlur={(text) => onBlurInput(formState.email.value, "email")}
                hasError={formState.email.hasError}
                error={formState.email.error}
                touched={formState.email.touched}
                />
                <Input
                placeholder= 'Digita tu Contraseña'
                label= 'Contraseña'
                placeholderTextColor={colors.defaultLight}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={formState.password.value}
                onChangeText={(text) => onChangeText(text, "password")}
                onBlur={(text) => onBlurInput(formState.password.value, "password")}
                hasError={formState.password.hasError}
                error={formState.password.error}
                touched={formState.password.touched}
                />
                <View style={styles.button}>
                    <Button 
                    color={colors.default}
                    title={buttonText}
                    onPress={() => onHandlerSubmit()}
                    />
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => onChangeAuth()}>
                        <Text style={styles.propmtButton}>{messageAction}</Text>
                    </TouchableOpacity>
            </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth;