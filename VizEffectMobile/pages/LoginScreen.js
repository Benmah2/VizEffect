import {LinearGradient} from 'expo-linear-gradient';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, Dimensions, Button, ViewComponent} from "react-native";

const {height} = Dimensions.get("window");

const LoginScreen = () => {
    return (
        <LinearGradient colors={["#192821", "#261213"]} style={{height: "100%"}}>
            <Text style={{color: "magenta"}}>Hello!</Text>
        </LinearGradient>
    );
}

export default LoginScreen;

