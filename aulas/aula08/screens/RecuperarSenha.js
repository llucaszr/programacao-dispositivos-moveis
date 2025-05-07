import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";


function RecuperarSenha() {

    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    const validarEmail = () => {
        if (!email) {
            setErro("E-mail é obrigatório")
            return false;
        }
        if (!email.includes("@")) {
            setErro("E-mail inválido");
            return false;
        }

        setErro("");
        return true;
    }


    const tratarDigitar = (text) => {
        setEmail(text);
        validarEmail();
    }

    const tratarEnvio = () => {
        if (!validarEmail()) {
            return;
        }
        setEmail("");
        alert("E-mail enviado com sucesso.");
    }

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                label="E-mail"
                mode="outlined"
                value={email}
                onChangeText={tratarDigitar}
                keyboardType="email-adress"
                autoCapitalize="none"
                error={erro}
            />
            <HelperText type="error" visible={erro}>
                {erro}
            </HelperText>
            <Button mode="contained" onPress={tratarEnvio}>
                Enviar
            </Button>
        </View>
    );
}

export default RecuperarSenha;