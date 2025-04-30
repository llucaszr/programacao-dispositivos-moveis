import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Text, List } from "react-native-paper";


const musicas = [
    {
        id: 1,
        nome: "Música 1",
        artista: "Artista 1",
    },
    {
        id: 2,
        nome: "Música 2",
        artista: "Artista 2",
    },
    {
        id: 3,
        nome: "Música 3",
        artista: "Artista 3",
    },
    {
        id: 4,
        nome: "Música 4",
        artista: "Artista 4",
    },
];

function MusicScreen({ navigation }) {
    return (
        <View style={style.container}>
            <ScrollView style={style.music}>
                {musicas.map((musicas) => (
                    <List.Item
                        key={musicas.id}
                        title={musicas.nome}
                        description={musicas.artista}
                        left={() => <List.Icon icon="music" />}
                        right={() => <Text>{musicas.hora}</Text>}
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
    music: {
        padding: 16,
    }
})

export default MusicScreen;