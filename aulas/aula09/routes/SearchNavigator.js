import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categorias from "../screens/Categorias"
import Lojas from "../screens/Lojas";

const Stack = createNativeStackNavigator();

function SearchNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Categorias" component={Categorias} />
            <Stack.Screen name="Lojas" component={Lojas} />
        </Stack.Navigator>
    );
}

export default SearchNavigator;