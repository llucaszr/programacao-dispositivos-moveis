import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Text, List } from "react-native-paper";


const favoriteMusic = [
    {
        id: 1,
        nome: "Música Favorita 1",
        artista: "Artista 1",
    },
    {
        id: 2,
        nome: "Música Favorita 2",
        artista: "Artista 2",
    },
];

function FavoriteScreen({ navigation }) {
    return (
        <View style={style.container}>
            <ScrollView style={style.favoriteMusics}>
                {favoriteMusic.map((favoriteMusic) => (
                    <List.Item
                        key={favoriteMusic.id}
                        title={favoriteMusic.nome}
                        description={favoriteMusic.artista}
                        left={() => <List.Icon icon="heart-outline" />}
                        right={() => <Text>{favoriteMusic.hora}</Text>}
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
    favoriteMusics: {
        padding: 16,
    },
})

export default FavoriteScreen;