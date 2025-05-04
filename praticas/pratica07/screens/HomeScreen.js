import { Text, View, StyleSheet } from "react-native"

function HomeScreen({ navigation }) {
    return(
        <View style={style.container}>
            <Text style={style.texto}>
                Bem-vindo ao meu App!{'\n'} 
                Navegue pelo menu lateral para{'\n'} 
                acessar seu perfil. 
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }, 
    texto: {
        textAlign: 'center',    
        fontSize: 18
    }
});

export default HomeScreen;