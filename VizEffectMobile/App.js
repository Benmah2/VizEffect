import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LoginScreen from "./pages/LoginScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LandingScreen from "./pages/LandingScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Auth from "./Auth"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Auth />
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

