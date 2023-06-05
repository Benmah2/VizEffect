import LoginScreen from "./pages/LoginScreen";
import LandingScreen from "./pages/LandingScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChoosePlatform from "./pages/ChoosePlatform";
import Fontina from "react-native-vector-icons/Fontisto";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            activeTintColor: "black",
            inactiveTintColor: "#E1E1E1",
            backgroundColor: "#3d0909"
        }}
        >
         <Tab.Screen
             name="Home"
             component={LandingScreen}
             options={{tabBarIcon: ({size, color}) => (
                    <Ionicons name="home" size={30} color={color} />
                 )
                 }}
         />
            <Tab.Screen
                name="Studio"
                component={ChoosePlatform}
                options={{tabBarIcon: ({size, color}) => (
                        <Ionicons name="ios-camera" size={30} color={color} />
                    )
                }}
            />
            <Tab.Screen
                 name="Record"
                 component={LoginScreen}
                 options={{
                     tabBarIcon: ({size, color}) => (
                         <Fontina name="record" size={50} color={color}/>
                     )
                 }}
            />
            <Tab.Screen
                name="Stats"
                component={ChoosePlatform}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="bar-chart-sharp" size={30} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={ChoosePlatform}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="ios-settings-outline" size={30} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

function Auth(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Landing"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default Auth;

