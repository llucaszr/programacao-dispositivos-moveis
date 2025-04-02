import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Text, List, TextInput, IconButton, FAB} from "react-native-paper";


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


function ChatScreen() {
    return(
        <View style={style.container}>
            <Appbar.Header>
                <Appbar.Content title="Conversas"/>
                <Appbar.Action icon="dots-vertical" onPress={ () => {}} />
            </Appbar.Header>
            <ScrollView>
                {conversas.map((conversas) => (
                    <List.Item
                        key={conversas.id}
                        title={conversas.nome}
                        description={conversas.mensagem}
                        left={ () => <List.Icon icon="account-circle" />}
                        right={ () => <Text>{conversas.hora}</Text>}
                        onPress={ () => {}}
                    />
                ))}
            </ScrollView>
            <View style={style.bottomBar}>
                <IconButton icon="camera" onPress={ () => {}} />
                <TextInput mode="outlined" placeholder="Mensagem" />
                <IconButton icon="send" onPress={ () => {}} />
            </View>
            <FAB icon="plus" onPress={ () => {}} style={style.fab} />
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 8,
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 60,
    },
})


export default ChatScreen;