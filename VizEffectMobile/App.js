import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LoginScreen from "./pages/LoginScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LandingScreen from "./pages/LandingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
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
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

