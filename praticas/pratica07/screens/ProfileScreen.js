import { View, StyleSheet } from "react-native";
import { Card, Avatar, Text, Button } from "react-native-paper";

function RecoverScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Avatar.Text size={80} label="JS" style={styles.avatar} />
          <Text style={styles.nome}>João da Silva</Text>
          <Text style={styles.email}>joao.silva@email.com.br</Text>
          <Text style={styles.telefone}>(61) 99999-9999</Text>
        </Card.Content>
          <Button style={styles.actions} mode="contained" onPress={() => {}}>Editar Perfil</Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    paddingVertical: 24,
    borderRadius: 12,
  },
  content: {
    alignItems: "center",
  },
  avatar: {
    marginBottom: 16,
    backgroundColor: "#6200ee",
  },
  nome: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  telefone: {
    fontSize: 14,
    color: "gray",
    marginBottom: 12,
  },
  actions: {
    justifyContent: "center",
    width: 150,
    alignSelf: "center"
  },
});

export default RecoverScreen;
