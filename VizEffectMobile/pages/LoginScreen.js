import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        // Reset previous error messages
        setEmailError('');
        setPasswordError('');

        // Validation logic
        if (email === '') {
            setEmailError('Email is required');
        }
        if (password === '') {
            setPasswordError('Password is required');
        }

        // Perform login logic if validation passes
        if (email !== '' && password !== '') {
            navigation.navigate('Landing');
        }
    };

    return (
        <LinearGradient colors={['#192821', '#261213']} style={{ height: '100%' }}>
            <View style={styles.container}>
                <View style={{ marginTop: 30, flexDirection: 'row', marginBottom: 20, paddingTop: 20 }}>
                    <Image resizemode="contain" source={require('../assets/images/logo.png')} style={styles.logoBilde} />
                </View>
                <View style={styles.logoContainer}>
                    <Image resizemode="contain" source={require('../assets/images/loginbilde.png')} style={styles.logo} />
                </View>

                {/* Email input */}
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#E1E1E1', marginBottom: 20 }}>Email</Text>
                <View style={[styles.inputContainer, emailError && styles.errorInputContainer]}>
                    <AntDesign name="mail" size={30} style={{ color: '#E1E1E1', marginRight: 10, marginLeft: 10 }} />
                    <TextInput
                        placeholder="Email address"
                        style={[styles.input, emailError && styles.errorInput]}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                {/* Password input */}
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#E1E1E1', marginBottom: 20 }}>Password</Text>
                <View style={[styles.inputContainer, passwordError && styles.errorInputContainer]}>
                    <Ionicons
                        name="ios-lock-closed-outline"
                        size={30}
                        style={{ color: '#E1E1E1', marginRight: 10, marginLeft: 10 }}
                    />
                    <TextInput
                        placeholder="Password"
                        style={[styles.input, passwordError && styles.errorInput]}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                {/* Forgot password btn */}
                <TouchableOpacity style={{ flexDirection: 'row', left: 252, marginBottom: 40 }} onPress={() => {}}>
                    <Text style={{ paddingRight: 5, color: '#D9574A', fontSize: 12 }}>Forgot</Text>
                    <Text style={{ color: '#E1E1E1', fontSize: 12 }}>Password</Text>
                </TouchableOpacity>

                {/* Login btn */}
                <LinearGradient style={{ marginBottom: 20, borderRadius: 10 }} colors={['#EA7F74', '#D9574A']}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={{ paddingRight: 5, color: '#E1E1E1', fontSize: 15, fontWeight: '700', textAlign: 'center' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={{ marginBottom: 20, textAlign: 'center', color: '#E1E1E1', fontSize: 12 }}>----- Or -----</Text>

                {/* Sign up btn */}
                <LinearGradient style={{ marginBottom: 30, borderRadius: 10 }} colors={['#EA7F74', '#D9574A']}>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={{ paddingRight: 5, color: '#E1E1E1', fontSize: 15, fontWeight: '700', textAlign: 'center' }}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
    },
    logoContainer: {
        alignItems: 'center',
    },
    image: {
        top: 40,
        width: 150,
        height: 25,
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 5,
    },
    logoBilde: {
        width: 130,
        height: 25,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 20,
        backgroundColor: 'rgba(92, 88, 87, 0.28)',
        borderRadius: 10,
        height: 60,
    },
    errorInputContainer: {
        borderColor: "red",
        borderWidth: 1,
    },
    input: {
        flex: 1,
        paddingHorizontal: 0,
        color: "white",
    },
    errorInput: {
        color: "red",
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    button: {
        padding: 15,
    },
});

export default LoginScreen;
