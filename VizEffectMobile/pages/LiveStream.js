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

const LiveStream = ({navigation}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleCameraSyncClick = () => {
        setClickCount(clickCount + 1);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        if (clickCount > 0) {
            setShowPopup(true);
        }
    }, [clickCount]);

    const sharedLiveStreamClick = () => {
        navigation.navigate("SharedLiveStream")
        closePopup()
    }

    return (
        <LinearGradient colors={['#192821', '#261213']} style={{ height: '100%' }}>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
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
                <View style={styles.flipMuteContainer}>
                    <TouchableOpacity onPress={handleCameraSyncClick}>
                        <Image
                            source={require('../assets/images/Flip-mute-icon.png')}
                            style={styles.flipMuteImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.effectsHeaderText}>Effects</Text>
                <View style={styles.imageRow}>
                    <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#7D608C", height: 70, width: 70, borderRadius: 50}} >
                        <Image source={require("../assets/images/FlowIcs.png")} style={{height: 40, width: 30}} resizeMode="contain"></Image>
                    </View>
                    <Image style={styles.image} source={require('../assets/images/Chat.png')} />
                    <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#DF737D", height: 70, width: 70, borderRadius: 50}} >
                        <MaterialIcons name={"multitrack-audio"} size={50} color={"white"}/>
                    </View>
                    <TouchableOpacity onPress={handleCameraSyncClick}>
                        <Image
                            source={require('../assets/images/Sync-icon.png')} style={{height: 70, width: 70}}
                        />
                    </TouchableOpacity>
                </View>
            {showPopup && (
                <Modal visible={showPopup} transparent={true} animationType="fade">
                    <TouchableWithoutFeedback onPress={closePopup}>
                        <View style={styles.popupOverlay}>
                            <View style={styles.popup}>
                                <Text style={styles.popupHeader}>Invite</Text>
                                <Text style={styles.popupCancel}>x</Text>
                                <Image
                                    source={require('../assets/images/Bluetooth.png')}
                                    style={styles.bluetoothImage}
                                />
                                <Text style={styles.popupText}>TwitchTornado</Text>
                                <Image
                                    source={require('../assets/images/Bluetooth.png')}
                                    style={styles.bluetoothImage}
                                />
                                <Text style={styles.popupText}>VirtualVoyager</Text>
                                <TouchableOpacity style={styles.sendButton} onPress={() => {sharedLiveStreamClick()}}>
                                    <Text style={styles.popupSend}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
            <View style={{flexDirection: "row", marginTop: 15, gap: 60, marginLeft: 25, marginBottom: 60}}>
                <Text style={styles.iconText}>Flowics</Text>
                <Text style={styles.iconText}>Chat</Text>
                <Text style={styles.iconText}>Sound</Text>
                <Text style={styles.iconText}>Add</Text>
            </View>
            <LinearGradient style={styles.button} colors={['#EA7F74', '#D9574A']}>
            <TouchableOpacity onPress={() => {navigation.navigate("EndStream")}}>
                <Text style={styles.buttonText}>End stream</Text>
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
    logoContainer: {
        top: -10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        marginBottom: 10,
    },
    logo: {
        width: 130,
        height: 25,
        marginTop: 30,
        marginBottom: 20,
        paddingTop: 20,
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
    flipMuteContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        padding: 4,
        borderRadius: 5,
    },
    flipMuteImage: {
        width: 35,
        height: 80,
    },
    effectsHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#E1E1E1"
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
        marginTop: 20,
    },
    buttonText: {
        color: '#252525',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    popupOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255,255,255)',
        width: '86%',
        height: 60,
        marginTop: 600,
        marginBottom: 130,
        left: "6%",
        borderRadius: 5,
        padding: 10,
    },
    popupHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        right: "28%",
        top: "17%",
    },
    popupCancel: {
        fontSize: 16,
        fontWeight: 'bold',
        left: "60%",
        bottom: "0%",
    },
    sendButton: {
        backgroundColor: 'orange',
        width: 60,
        borderRadius: 25,
        paddingVertical: 5,
        bottom: "18%",
        left: "43%",
    },
    popupSend: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    popupText: {
        fontSize: 16,
        textAlign: 'center',
        bottom: "4%",
        right: "15%"
    },
    bluetoothImage: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        right: "25%",
        top: "10%"
    },
});

export default LiveStream;