import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

function ContactScreen() {
  return (
    <View style={style.container}>
      <Appbar.Header>
        <Appbar.Content title="Contatos" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactScreen;
