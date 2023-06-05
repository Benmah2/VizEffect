import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChoosePlatform from '../pages/ChoosePlatform';
import LoginScreen from "../pages/LoginScreen";
import LandingScreen from "../pages/LandingScreen";
import {LinearGradient} from "expo-linear-gradient";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return <LinearGradient colors={["#192821", "#261213"]} style={{height: "100%"}}><View style={styles.screenContainer} /></LinearGradient>;
}

function StudioScreen() {
    return <LinearGradient colors={["#192821", "#261213"]} style={{height: "100%"}}><View style={styles.screenContainer} /></LinearGradient>;
}

function RecordScreen() {
    return <LinearGradient colors={["#192821", "#261213"]} style={{height: "100%"}}><View style={styles.screenContainer} /></LinearGradient>;
}

function StatsScreen() {
    return <LinearGradient colors={["#192821", "#261213"]} style={{height: "100%"}}><View style={styles.screenContainer} /></LinearGradient>;
}

function SettingsScreen() {
    return <LinearGradient colors={["#192821", "#261213"]} style={{height: "100%"}}><View style={styles.screenContainer} /></LinearGradient>;
}

function CustomTabBar({ state, descriptors, navigation }) {
    const navigateToScreen = (routeName) => {
        navigation.navigate(routeName);
    };

    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigateToScreen(route.name);
                    }
                };

                return (
                    <Ionicons
                        key={route.key}
                        name={options.tabBarIconName}
                        size={30}
                        color={isFocused ? '#a2a2a2' : '#E1E1E1'}
                        onPress={onPress}
                        style={styles.tabBarIcon}
                    />
                );
            })}
        </View>
    );
}

function TabNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Landing">
                    {() => (
                        <Tab.Navigator
                            tabBar={(props) => <CustomTabBar {...props} />}
                            screenOptions={{ headerShown: false }}
                        >
                            <Tab.Screen
                                name="Home"
                                component={LandingScreen}
                                options={{ tabBarIconName: 'home' }}
                            />
                            <Tab.Screen
                                name="Studio"
                                component={ChoosePlatform}
                                options={{ tabBarIconName: 'ios-camera' }}
                            />
                            <Tab.Screen
                                name="Record"
                                component={RecordScreen}
                                options={{ tabBarIconName: 'ios-ellipse-sharp' }}
                            />
                            <Tab.Screen
                                name="Stats"
                                component={StatsScreen}
                                options={{ tabBarIconName: 'bar-chart-sharp' }}
                            />
                            <Tab.Screen
                                name="Settings"
                                component={SettingsScreen}
                                options={{ tabBarIconName: 'ios-settings-outline' }}
                            />
                        </Tab.Navigator>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#261213",
        height: 90,
    },
    tabBarIcon: {
        marginBottom: 5,
    },
});

export default TabNavigation;
