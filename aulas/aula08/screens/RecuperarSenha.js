import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import * as Yup from "yup";

function RecuperarSenha() {
    const schema = Yup.object().shape({
        email: Yup.string().required("E-mail é obrigatório.").email("E-mail inválido")
    });

    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    const validarEmail = async () => {
        try {
            await schema.validate({ email });
            setErro("");
            return true;
        } catch (erro) {
            setErro(erro.errors);
            return false;
        }
    }


    // const validarEmail = () => {
    //     if (!email) {
    //         setErro("E-mail é obrigatório")
    //         return false;
    //     }
    //     if (!email.includes("@")) {
    //         setErro("E-mail inválido");
    //         return false;
    //     }

    //     setErro("");
    //     return true;
    // }


    const tratarDigitar = async (text) => {
        setEmail(text);
        await validarEmail();
    }

    const tratarEnvio = async () => {
        if (! await validarEmail()) {
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