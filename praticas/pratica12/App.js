import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
