import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const EndStream = ({navigation}) => {
    return (
        <LinearGradient colors={['#192821', '#261213']} style={{ height: '100%' }}>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <View style={[styles.square, styles.opacityContainer]}>
                <Text style={styles.textHeader}>Stream time: 12:03:22</Text>
                <Text style={styles.text}>Donations: $ 307,43</Text>
                <Text style={styles.text}>New subscribers: 17</Text>
                <Text style={styles.text}>Ad revenue: $ 100</Text>
            </View>
            <View style={[styles.square, styles.imageContainer]}>
                <View style={styles.imageWrapper}>
                    {/*<Image
                        source={require('../assets/images/Views.png')}
                        style={styles.image}
                    />*/}
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Home")}}>
                <Text style={styles.buttonText}>See all stats</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        position: 'absolute',
        top: 59,
        left: 25,
        width: 130,
        height: 25,
        resizeMode: 'contain',
    },
    square: {
        width: 250,
        height: 225,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    imageContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 185,
        height: 108,
    },
    opacityContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        top: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginBottom: 8,
        textAlign: 'left',
        left: 25,
    },
    textHeader: {
        color: 'white',
        fontSize: 18,
        marginBottom: 35,
        marginTop: 35,
        textAlign: 'left',
        left: 25,
    },
});

export default EndStream;