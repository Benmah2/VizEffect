import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email format');
        }

        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError('Password must contain at least one special character');
        }

        if (email !== '' && password !== '' && emailError === '' && passwordError === '') {
            navigation.navigate('Landing');
        }
    };

    return (
        <LinearGradient colors={['#192821', '#261213']} style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logoImage}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.logoContainer2}>
                <Image
                    source={require('../assets/images/loginbilde.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.label}>Email</Text>
            <View style={[styles.inputContainer, emailError && styles.errorInputContainer]}>
                <AntDesign name="mail" size={30} style={styles.icon} />
                <TextInput
                    placeholder="Email address"
                    style={[styles.input, emailError && styles.errorInput]}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            {emailError && <Text style={styles.errorText}>{emailError}</Text>}

            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputContainer, passwordError && styles.errorInputContainer]}>
                <Ionicons name="ios-lock-closed-outline" size={30} style={styles.icon} />
                <TextInput
                    placeholder="Password"
                    style={[styles.input, passwordError && styles.errorInput]}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

            <TouchableOpacity style={styles.forgotPasswordBtn} onPress={() => {}}>
                <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>

            <LinearGradient style={styles.button} colors={['#EA7F74', '#D9574A']}>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            </LinearGradient>

            <Text style={styles.orText}>----- Or -----</Text>

            <LinearGradient style={styles.button} colors={['#EA7F74', '#D9574A']}>
            <TouchableOpacity>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            </LinearGradient>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    logoContainer2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logoImage: {
        width: 130,
        height: 25,
        marginTop: 30,
        marginBottom: 20,
        paddingTop: 20,
    },
    logo: {
        width: 300,
        height: 300,
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
        color: '#E1E1E1',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(92, 88, 87, 0.28)',
        borderRadius: 10,
        height: 60,
    },
    errorInputContainer: {
        borderColor: 'red',
        borderWidth: 1,
    },
    input: {
        flex: 1,
        color: 'white',
    },
    icon: {
        color: '#E1E1E1',
        marginHorizontal: 5,
    },
    errorInput: {
        color: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    forgotPasswordBtn: {
        alignSelf: 'flex-end',
        marginBottom: 40,
    },
    forgotPasswordText: {
        color: '#D9574A',
        fontSize: 12,
    },
    button: {
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#252525',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
    },
    orText: {
        marginBottom: 20,
        textAlign: 'center',
        color: '#E1E1E1',
        fontSize: 12,
    },
});

export default LoginScreen;
