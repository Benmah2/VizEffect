import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

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
            <View style={{alignItems: "center", justifyContent: "flex-end", flexDirection: "row", gap: 25, marginBottom: 5,}}>
                <Text style={{color: "#E1E1E1", fontSize: 18, fontWeight: "bold"}}>Live</Text>
                <Text style={{color: "#E1E1E1", fontSize: 18, fontWeight: "bold"}}>0:16</Text>
                <Image
                    source={require('../assets/images/Record.png')}
                    resizeMode="contain"
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
                <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#7D608C", height: 70, width: 70, borderRadius: 50}} >
                    <Image source={require("../assets/images/FlowIcs.png")} style={{height: 40, width: 30}} resizeMode="contain"></Image>
                </View>
                <Image style={styles.image} source={require('../assets/images/Chat.png')} />
                <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#DF737D", height: 70, width: 70, borderRadius: 50}} >
                    <MaterialIcons name={"multitrack-audio"} size={50} color={"white"}/>
                </View>
                <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0.28)", height: 70, width: 70, borderRadius: 50}} >
                    <Ionicons name={"add-outline"} size={50} color={"white"}/>
                </View>
            </View>
            {showPopup && (
                <Modal
                    visible={showPopup}
                    transparent={true}
                    animationType="none">
                    <TouchableWithoutFeedback onPress={closePopup}>
                        <View style={styles.popupContainer}>
                            <View>
                                <Text style={styles.popupText}>Stream ended with VirtualVoyager</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
            <View style={{flexDirection: "row", marginTop: 15, gap: 60, marginLeft: 15}}>
                <Text style={styles.iconText}>Flowics</Text>
                <Text style={styles.iconText}>Chat</Text>
                <Text style={styles.iconText}>Sound</Text>
                <Text style={styles.iconText}>Add</Text>
            </View>
            <LinearGradient style={styles.button} colors={['#EA7F74', '#D9574A']}>
                <TouchableOpacity onPress={() => {navigation.navigate("EndStream")}}>
                    <Text style={styles.buttonText}>End Stream</Text>
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
        paddingHorizontal: 25,
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
        width: "100%",
        height: 400,
        borderRadius: 5,
        borderWidth: 8,
        borderColor: '#000000',
        marginBottom: 20
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
        marginTop: "41%",
        marginBottom: "133%",
        left: "8.3%",
        borderTopLeftRadius: 5,
    },
    popupText: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        top: "50%",
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
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: (windowWidth / 4 - 20) / 2,
        bottom: 300,
        margin: 0,
        backgroundColor: "rgba(255, 255, 255, 0.28)"
    },
    iconText: {
        color: "#E1E1E1",
    },
    button: {
        padding: 10,
        borderRadius: 10,
        width: 150,
        alignSelf: 'center',
        marginTop: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SharedLiveStream;