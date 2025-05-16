import { View, ScrollView } from "react-native";
import { TextInput, HelperText, Text, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    senha: Yup.string()
        .min(6, "Senha deve ter no mínimo 6 caracteres")
        .required("Senha é obrigatória"),
    confirmaSenha: Yup.string()
        .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
        .required("Confirme a senha"),
});



function SignUpScreen({ navigation }) {
    const onSubmit = (data) => {
        alert("Conta criada com sucesso!");
    }

    const { control, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });


    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 16 }}>
                <Controller
                    control={control}
                    name="nome"
                    render={({ field: { value, onChange, } }) => (
                        <TextInput
                            label="Nome"
                            autoCapitalize="words"
                            mode="outlined"
                            value={value}
                            onChangeText={onChange}
                            error={!!errors.nome}
                        />
                    )}
                />

                {errors.nome && <Text>{errors.nome.message}</Text>}

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { value, onChange } }) => (
                        <TextInput
                            label="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            mode="outlined"
                            value={value}
                            onChangeText={onChange}
                            error={!!errors.email}
                        />
                    )}
                />
                {errors.email && <Text>{errors.email.message}</Text>}
                <Controller
                    control={control}
                    name="senha"
                    render={({ field: { value, onChange } }) => (
                        <TextInput
                            label="Senha"
                            secureTextEntry
                            mode="outlined"
                            value={value}
                            onChangeText={onChange}
                            error={!!errors.senha}
                        />
                    )}
                />
                {errors.senha && <Text>{errors.senha.message}</Text>}
                <Controller
                    control={control}
                    name="confirmaSenha"
                    render={({ field: { value, onChange } }) => (
                        <TextInput
                            label="Confirma senha"
                            mode="outlined"
                            secureTextEntry
                            value={value}
                            onChangeText={onChange}
                            error={!!errors.confirmaSenha}
                        />
                    )}
                />
                {errors.confirmaSenha && <Text>{errors.confirmaSenha.message}</Text>}
                <Button style={{marginBottom: 16}} mode="contained" onPress={handleSubmit(onSubmit)}>
                    Criar
                </Button>
                <Button mode="text" onPress={() => navigation.navigate("Login")}>
                    Voltar para Login
                </Button>
            </View>
        </ScrollView>
    );
}

export default SignUpScreen;