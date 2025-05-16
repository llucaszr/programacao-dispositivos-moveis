import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import StackNavigator from "./routes/StackNavigator";


function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

