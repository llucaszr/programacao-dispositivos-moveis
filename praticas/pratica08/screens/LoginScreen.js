import { View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";



function LoginScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("Login realizado com sucesso!");
    }


    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Controller control={control} name="email"
                rules={{
                    required: { value: true, message: "E-mail é obrigatório." },
                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "E-mail inválido" }
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput label="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none" // desligar o teclado para entrar com letra mauscula
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        error={!!errors.email}
                    />
                )}
            />
            <Text>{errors.email?.message}</Text>


            <Controller control={control} name="senha"
                rules={{
                    required: "Senha é obrigatória.",
                    minLength: {
                        value: 8,
                        message: "Sua senha deve ter no mínimo 8 caracteres."
                    },
                }}
                render={({ field: { value, onChange } }) => (
                    <TextInput label="Senha"
                        mode="outlined"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                        error={!!errors.senha}
                    />
                )}
            />

            <Text>{errors.senha?.message}</Text>

            <Button mode="contained" onPress={handleSubmit(onSubmit)}>Entrar</Button>
            <Button mode="text" onPress={() => navigation.navigate("RecuperarSenha")}>Esqueceu sua senha? Recuperar Senha</Button>
            <Button mode="text" onPress={() => navigation.navigate("CriarConta")}>Criar Conta</Button>
        </View>
    );
}


export default LoginScreen;