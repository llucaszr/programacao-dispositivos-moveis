import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home"
import SearchNavigator from "./SearchNavigator";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MainNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (props) => <MaterialIcons {...props} name="home" />,
                }}
            />
            <Tab.Screen
                name="Busca"
                component={SearchNavigator}
                options={{
                    tabBarIcon: (props) => <MaterialIcons {...props} name="search" />,
                }}
            />
        </Tab.Navigator>
    );
}

export default MainNavigator;