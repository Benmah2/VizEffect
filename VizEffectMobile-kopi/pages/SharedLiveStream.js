import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const SharedLiveStream = ({navigation}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleRemoveStreamerClick = () => {
        setClickCount(clickCount + 1);
    };

    const closePopup = () => {
        setShowPopup(false);
        setClickCount(0);
    };

    useEffect(() => {
        if (clickCount > 0) {
            setShowPopup(true);
        }
    }, [clickCount]);

    return (
        <LinearGradient colors={['#192821', '#261213']} style={{ height: '100%' }}>
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.header}>
                <Text style={styles.liveText}>Live</Text>
                <Image
                    source={require('../assets/images/Record.png')}
                    style={styles.recordingImage}
                />
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/Livestream-img.png')}
                    style={styles.mainImage}
                />
                {clickCount === 0 && (
                    <View style={styles.removeImagesContainer}>
                        <TouchableOpacity onPress={handleRemoveStreamerClick}>
                            <Image
                                source={require('../assets/images/Virtual-voyager-img.png')}
                                style={styles.virtualVoyagerImage}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../assets/images/Username-background.png')}
                            style={styles.virtualVoyagerBackground}
                        />
                        <Text style={styles.virtualVoyagerText}>VirtualVoyager</Text>
                        <View style={styles.removeStreamerContainer}>
                            <Image
                                source={require('../assets/images/Remove-streamer.png')}
                                style={styles.removeStreamer}
                            />
                        </View>
                    </View>
                )}
                {showPopup && (
                    <Modal
                        visible={showPopup}
                        transparent={true}
                        animationType="none">
                        <TouchableWithoutFeedback onPress={closePopup}>
                            <View style={styles.popupContainer}>
                                <View style={styles.popup}>
                                    <Text style={styles.popupText}>Stream ended with VirtualVoyager</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                )}
                <Image
                    source={require('../assets/images/Twitch-tornado-img.png')}
                    style={styles.twitchTornadoImage}
                />
                <Image
                    source={require('../assets/images/Username-background.png')}
                    style={styles.twitchTornadoBackground}
                />
                <Text style={styles.twitchTornadoText}>TwitchTornado</Text>
                <View style={styles.flipMuteContainer}>
                    <Image
                        source={require('../assets/images/Flip-mute-icon.png')}
                        style={styles.flipMuteImage}
                    />
                </View>
                <Image
                    source={require('../assets/images/Remove-streamer.png')}
                    style={styles.removeTwitchTornado}
                />
            </View>
            <View style={styles.imageRow}>
                <Text style={styles.effectsHeaderText}>Effects</Text>
                <Image
                    source={require('../assets/images/Chat.png')}
                    style={styles.effectImage}
                />
                <Image
                    source={require('../assets/images/Soundeffect.png')}
                    style={styles.effectImage}
                />
                <Image
                    source={require('../assets/images/Effects.png')}
                    style={styles.effectImage}
                />
                <Image
                    source={require('../assets/images/Sync-icon.png')}
                    style={styles.effectImage}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("EndStream")}}>
                <Text style={styles.buttonText}>End stream</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.chatText}>Chat</Text>
                <Text style={styles.soundText}>Sound</Text>
                <Text style={styles.effectsText}>Effects</Text>
                <Text style={styles.cameraSyncText}>Camera Sync</Text>
            </View>
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
    },
    header: {
        position: 'absolute',
        top: 16,
        right: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    liveText: {
        top: 70,
        marginRight: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    recordingImage: {
        top: 70,
        marginRight: 15,
        width: 20,
        height: 20,
    },
    imageContainer: {
        position: 'absolute',
        bottom: 225,
        width: 300,
        height: 400,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lightgray',
        marginVertical: 16,
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    virtualVoyagerImage: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 5,
    },
    twitchTornadoImage: {
        position: 'absolute',
        bottom: "0%",
        height: "50%",
        width: "45%",
        borderBottomLeftRadius: 5,
    },
    virtualVoyagerBackground: {
        bottom: "9%",
        width: "79%",
    },
    twitchTornadoBackground: {
        position: 'absolute',
        bottom: "0%",
        width: "35%",
    },
    virtualVoyagerText: {
        position: 'absolute',
        marginLeft: 5,
        top: "90.5%",
    },
    removeStreamerContainer: {
        position: 'absolute',
        left: "82%",
        top: "5%",
    },
    twitchTornadoText: {
        position: 'absolute',
        top: "95.5%",
        marginLeft: 5,
    },
    removeImagesContainer: {
        bottom: "100%",
        height: "50%",
        width: "45%",
    },
    removeVirtualVoyager: {
        left: "37%",
    },
    removeTwitchTornado: {
        position: 'absolute',
        left: "37%",
        top: "52%",
    },
    popupContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '37.5%',
        marginTop: 85,
        marginBottom: 441,
        left: "8.3%",
        borderTopLeftRadius: 5,
    },
    popupText: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        top: "40%",
    },
    flipMuteContainer: {
        position: 'absolute',
        bottom: "75%",
        left: "82%",
        padding: 4,
        borderRadius: 5,
    },
    flipMuteImage: {
        width: 36,
        height: 80,
    },
    effectsHeaderText: {
        position: 'absolute',
        bottom: 70,
        left: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        top: "57%"
    },
    effectImage: {
        width: 55,
        height: 55,
        marginHorizontal: 12,
    },
    chatText: {
        position: 'absolute',
        top: 210,
        right: 106.2,
        fontSize: 12,
        fontWeight: 'bold',
    },
    soundText: {
        position: 'absolute',
        top: 210,
        right: 23,
        fontSize: 12,
        fontWeight: 'bold',
    },
    effectsText: {
        position: 'absolute',
        top: 210,
        left: 20,
        fontSize: 12,
        fontWeight: 'bold',
    },
    cameraSyncText: {
        position: 'absolute',
        top: 210,
        left: 85,
        fontSize: 12,
        fontWeight: 'bold',
    },
    button: {
        position: 'absolute',
        backgroundColor: 'orange',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        top: "90%"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SharedLiveStream;