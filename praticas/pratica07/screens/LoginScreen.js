import { ScrollView, StyleSheet } from "react-native";
import { Text, TextInput, Button, IconButton } from "react-native-paper";

function LoginScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text variant="displaySmall" style={styles.title}>Login</Text>
            <TextInput label="E-mail" mode="outlined" style={styles.input}></TextInput>
            <TextInput label="Senha" mode="outlined" secureTextEntry style={styles.input}></TextInput>
            <Button mode="contained" onPress={() => { }} style={styles.input}>Entrar</Button>
            <Text style={styles.info}>Esqueceu senha? <Text style={styles.link}>Recuperar senha</Text></Text>
        </ScrollView>);
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        marginBottom: 24,
        marginTop: 16,
    },
    input: {
        marginBottom: 16,
    },
    info: {
        textAlign: "center",
        marginBottom: 16,
    },
    link: {
        color: "#6750A4"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
});


export default LoginScreen;