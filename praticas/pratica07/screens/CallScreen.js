import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, Text, List, TextInput, IconButton, FAB } from "react-native-paper";


const chamadas = [
    {
        id: 1,
        nome: "Campos Sales",
        data: "28/02/2024",
        hora: "08:45",
    },
    {
        id: 2,
        nome: "Rui Barbosa",
        data: "04/12/2023",
        hora: "09:30",
    },
];

function CallScreen({ navigation }) {
    return (
        <View style={style.container}>
            <ScrollView style={style.calls} >
                {chamadas.map((chamadas) => (
                    <List.Item
                        key={chamadas.id}
                        title={chamadas.nome}
                        description={`${chamadas.data} ${chamadas.hora}`}
                        left={() => <List.Icon icon="account-circle" />}
                        right={() => <List.Icon icon="phone" />}
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
    calls:{
        padding: 16
    }
})

export default CallScreen;