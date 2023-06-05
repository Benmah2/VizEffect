import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const ChoosePlatform = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Text style={styles.title}>Choose platform</Text>
            <View style={styles.row}>
                <Image style={styles.image} source={require('../assets/images/twitch.png')} />
                <Image style={styles.image} source={require('../assets/images/youtube.png')} />
                <Image style={styles.image} source={require('../assets/images/tik-tok.png')} />
            </View>
            <View style={styles.row}>
                <Image style={styles.image} source={require('../assets/images/instagram.png')} />
                <Image style={styles.image} source={require('../assets/images/twitter.png')} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sync and go live</Text>
            </TouchableOpacity>
            <Text style={styles.cancelText}>Cancel</Text>
        </View>
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
        width: 123,
        height: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginLeft: 25,
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 10,
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cancelText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ChoosePlatform;