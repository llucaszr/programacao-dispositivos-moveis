import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import RecoverScreen from "./screens/RecoverScreen";
import StackNavigator from "./routes/StackNavigator";
import MusicScreen from "./screens/MusicScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import BottomTabNavigator from "./routes/BottomTabNavigator";
import CallScreen from "./screens/CallScreen";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CallScreen></CallScreen>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
