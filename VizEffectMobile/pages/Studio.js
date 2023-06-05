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

const Studio = ({ navigation }) => {
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
                <Text>
                    Studio
                </Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
    },
    logoBilde: {
        width: 130,
        height: 25,
    },
});

export default Studio;
