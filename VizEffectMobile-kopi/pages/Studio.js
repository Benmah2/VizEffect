import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
                <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#7D608C", height: 90, width: 90, borderRadius: 50}} >
                    <Image source={require("../assets/images/FlowIcs.png")} style={{height: 50, width: 40}} resizeMode="contain"></Image>
                </View>
                <Image style={styles.image} source={require('../assets/images/Chat.png')} />
                <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#DF737D", height: 90, width: 90, borderRadius: 50}} >
                    <MaterialIcons name={"multitrack-audio"} size={50} color={"white"}/>
                </View>
                <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0.28)", height: 90, width: 90, borderRadius: 50}} >
                    <Ionicons name={"add-outline"} size={50} color={"white"}/>
                </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 15, gap: 65, marginLeft: 40}}>
                <Text style={styles.iconText}>Flowics</Text>
                <Text style={styles.iconText}>Chat</Text>
                <Text style={styles.iconText}>Sound</Text>
                <Text style={styles.iconText}>Add</Text>
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
        width: 90,
        height: 90,
        borderRadius: (windowWidth / 4 - 20) / 2,
        bottom: 300,
        margin: 0,
        backgroundColor: "rgba(255, 255, 255, 0.28)"
    },
    iconText: {
        color: "#E1E1E1",
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