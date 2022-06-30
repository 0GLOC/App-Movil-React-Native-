import React, { useState } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../store/action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Auth = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Iniciar sesión' : 'Registrarse';
    const message = isLogin ? '¿Aún no tienes una cuenta?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Registrarte' : 'Ingresar';
    const buttonText = isLogin ? 'Iniciar' : 'Registrarte';

    const onChangeText = (text, type) => {
        if (type === 'email') {
            setEmail(text);
        } else {
            setPassword(text);
        }
    }

    const onHandlerSubmit = () => {
        dispatch(isLogin ? signin(email, password) : signup(email, password));
    }

    const onChangeAuth = () => {
        setPassword('');
        setEmail('');
        setIsLogin(!isLogin);
    }

    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                style={styles.input}
                placeholder= 'Email address'
                placeholderTextColor={colors.defaultLight}
                keyboardType= 'email-address'
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(text) => onChangeText(text, 'email')}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                style={styles.input}
                placeholder= 'Password'
                placeholderTextColor={colors.defaultLight}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(text) => onChangeText(text, 'password')}
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