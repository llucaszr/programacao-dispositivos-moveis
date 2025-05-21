import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const categorias = [
    "Restaurantes",
    "Lanchonetes",
    "Bares",
    "Pizzarias",
    "Mercados",
    "Sorveterias",
    "Cafeterias",
    "Padarias"
];

function Grid() {
    const navigation = useNavigation();

    return (
        <View>
            <Text variant="titleMedium">Categorias</Text>
            <FlatList
                data={categorias}
                numColumns={2}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, marginBottom: 8, marginRight: 8 }}>
                        <Button mode="outlined" onPress={() => navigation.navigate("Lojas", { categoria: item })}>
                            {item}
                        </Button>
                    </View>
                )}
            />
        </View>
    );
}

export default Grid;