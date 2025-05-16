import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import * as Yup from "yup";


function ForgotPasswordScreen({ navigation }) {

    const [email, setEmail] = useState();
    const [erro, setErro] = useState();

    const validarEmail = () => {
        if (!email) {
            setErro("E-mail é obrigatório.");
        } else if (!email.includes("@")) {
            setErro("E-mail inválido.");
        } else {
            setErro("");
            alert("Instruções enviadas para o e-mail!");
        }
    }

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                style={{ marginBottom: 16 }}
                label="E-mail"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-adress"
                autoCapitalize="none"
                error={!!erro}
            />
            {erro && <Text style={{marginBottom: 16}}>{erro}</Text>}

            <Button mode="contained" onPress={validarEmail}>
                Enviar
            </Button>
            <Button onPress={() => navigation.navigate("Login")}>
                Voltar para o Login
            </Button>
        </View>
    );
}

export default ForgotPasswordScreen;