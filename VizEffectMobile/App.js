import {SafeAreaViewComponent, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabNavigation from "./components/TabNavigation"
import LoginScreen from "./pages/LoginScreen";
import { SafeAreaView} from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <TabNavigation />
      /*<NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                  name="Landing"
                  component={LandingScreen}
              />
          </Stack.Navigator>
      </NavigationContainer>*/
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

