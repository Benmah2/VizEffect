import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const Studio = ({navigation}) => {
    return (
        <LinearGradient colors={['#192821', '#261213']} style={{ height: '100%' }}>
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View>
                <Text style={styles.studioHeader}>Studio</Text>
                <Text style={styles.panelHeader}>Stream panel</Text>
            </View>
            <View style={styles.row}>
                <Image style={styles.image} source={require('../assets/images/Chat-img.png')} />
                <Image style={styles.image} source={require('../assets/images/Chat-img.png')} />
                <Image style={styles.image} source={require('../assets/images/Chat-img.png')} />
                <Image style={styles.image} source={require('../assets/images/Chat-img.png')} />
            </View>
            <View>
                <Text style={styles.flowicsDownloadsTxt}>Flowics Downloads</Text>
                <Text style={styles.chatTxt}>Chat</Text>
                <Text style={styles.soundTxt}>Sound</Text>
                <Text style={styles.addTxt}>Add</Text>
            </View>
            <View>
                <Text style={styles.downloadsTxt}>Your Flowics Downloads</Text>
            </View>
            <View style={styles.graphicPackageImageContainer}>
                <Image style={styles.prettyPastelsImage} source={require('../assets/images/Pretty-pastels.png')} />
                <Image style={styles.oceanicDreamsImage} source={require('../assets/images/Oceanic-dreams.png')} />
            </View>
            <LinearGradient style={styles.button} colors={['#EA7F74', '#D9574A']}>
            <TouchableOpacity onPress={() => {navigation.navigate("Choose")}}>
                <Text style={styles.buttonText}>Go Live</Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
        </LinearGradient>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        top: 50,
        left: 25,
        width: 130,
        height: 25,
        resizeMode: 'contain',
    },
    studioHeader: {
        position: 'relative',
        left: 25,
        fontSize: 22,
        fontWeight: 'bold',
        color: "#E1E1E1",
        marginTop: 90,
    },
    panelHeader: {
        marginTop: 30,
        position: 'relative',
        left: 25,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#E1E1E1"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    image: {
        width: windowWidth / 4 - 20,
        height: windowWidth / 4 - 20,
        borderRadius: (windowWidth / 4 - 20) / 2,
        backgroundColor: 'brown',
        bottom: 300,
        margin: 0,
    },
    flowicsDownloadsTxt: {
        position: 'relative',
        top: 70,
        maxWidth: 80,
        left: 25,
        fontSize: 14,
        fontWeight: 'bold',
    },
    chatTxt: {
        position: 'relative',
        top: 40,
        left: 123,
        fontSize: 14,
        fontWeight: 'bold',
    },
    soundTxt: {
        position: 'relative',
        top: 22,
        left: 203,
        fontSize: 14,
        fontWeight: 'bold',
    },
    addTxt: {
        position: 'relative',
        top: 5,
        left: 295,
        fontSize: 14,
        fontWeight: 'bold',
    },
    downloadsTxt: {
        position: 'relative',
        top: 50,
        left: 25,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#E1E1E1"
    },
    graphicPackageImageContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    prettyPastelsImage: {
        marginTop: 40,
        width: windowWidth - 40,
        resizeMode: 'contain',
    },
    oceanicDreamsImage: {
        marginTop: 20,
        width: windowWidth - 40,
        resizeMode: 'contain',
    },
    button: {
        padding: 10,
        borderRadius: 10,
        width: 150,
        alignSelf: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#252525',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Studio;