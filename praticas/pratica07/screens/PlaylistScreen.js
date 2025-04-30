import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Text, List } from "react-native-paper";


const playlist = [
    {
        id: 1,
        nome: "Playlist 1",
        musicas: "10 músicas",
    },
    {
        id: 2,
        nome: "Playlist 2",
        musicas: "5 músicas",
    },
    {
        id: 3,
        nome: "Playlist 3",
        musicas: "8 músicas",
    },
];

function PlaylistScreen({ navigation }) {
    return (
        <View style={style.container}>
            <ScrollView style={style.playlists}>
                {playlist.map((playlist) => (
                    <List.Item
                        key={playlist.id}
                        title={playlist.nome}
                        description={playlist.musicas}
                        left={() => <List.Icon icon="playlist-music" />}
                        right={() => <Text>{playlist.hora}</Text>}
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
    playlists: {
        padding: 16,
    }
})


export default PlaylistScreen;