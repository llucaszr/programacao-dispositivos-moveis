import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Text, List} from "react-native-paper";


const conversas = [
    {
        id: 1,
        nome: "Ana Souza",
        mensagem: "Oi, tudo bem?",
        hora: "08:45",
    },
    {
        id: 2,
        nome: "Carlos Lima",
        mensagem: "Vamos marcar aquela reunião?",
        hora: "09:30",
    },
    {
        id: 3,
        nome: "Mariana Santos",
        mensagem: "Enviei um arquivo para você.",
        hora: "10:10",
    },
];



function ChatScreen({ navigation }) {
    return (
        <View style={style.container}>
            <ScrollView style={style.chats}>
                {conversas.map((conversas) => (
                    <List.Item
                        key={conversas.id}
                        title={conversas.nome}
                        description={conversas.mensagem}
                        left={() => <List.Icon icon="account-circle" />}
                        right={() => <Text>{conversas.hora}</Text>}
                        onPress={() => { }}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 60,
    },
    chats:{
        padding: 16
    }
})


export default ChatScreen;