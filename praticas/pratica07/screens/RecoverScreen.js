import { ScrollView, StyleSheet } from "react-native";
import { Text, TextInput, Button, IconButton } from "react-native-paper";



function RecoverScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput label="E-mail" mode="outlined" style={styles.input}></TextInput>
            <Button mode="contained" onPress={() => { }} style={styles.input}>Recuperar Senha</Button>
            <Text style={styles.link}>Voltar para o Login</Text>
        </ScrollView>
    );
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
    link: {
        color: "#6750A4",
        textAlign: "center",
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
});


export default RecoverScreen;
