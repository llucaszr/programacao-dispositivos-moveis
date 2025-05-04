import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { List } from "react-native-paper";

const contatos = [
  {
    id: 1,
    nome: "Nome do contato",
    numero: "(99) 99999-9999",
  },
  {
    id: 2,
    nome: "Nome do contato",
    numero: "(99) 99999-9999",
  },
  {
    id: 3,
    nome: "Nome do contato",
    numero: "(99) 99999-9999",
  },
];

function ContactScreen({ navigation }) {
  return (
    <View style={style.container}>
      <ScrollView style={style.calls}>
        {contatos.map((contatos) => (
          <List.Item
            key={contatos.id}
            title={contatos.nome}
            description={`${contatos.numero}`}
            left={() => <List.Icon icon="account-circle" />}
            onPress={() => {}}
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
  calls: {
    padding: 16,
  },
});

export default ContactScreen;
