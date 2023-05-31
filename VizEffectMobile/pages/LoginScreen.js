import React, {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, Dimensions, Button, ViewComponent} from "react-native";

const {height} = Dimensions.get("window");

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Perform login logic here using the email and password values
      console.log('Logging in...');
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    const handleSignup = () => {
      // Perform signup logic here using the email and password values
      console.log('Signing up...');
      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
    <LinearGradient colors={["#192821", "#261213"]} style={{height: "100%"}}>
      <Text style={{color: "magenta"}}>Hello!</Text>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.image}
          />
        </View>
        <Image source={require('../assets/images/loginbilde.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />

      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} style={styles.button} />
        <Text style={styles.orText}>or</Text>
        <Button title="Sign up" onPress={handleSignup} style={styles.button} />
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 16,
    zIndex: 1,
  },
  image: {
    top: 20,
    width: 150,
    height: 25,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    marginVertical: 8,
  },
  orText: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },  textOrange: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textBehind: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen;