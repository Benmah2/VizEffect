import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const ChoosePlatform = ({navigation}) => {
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handlePlatformPress = (platform) => {
        if (platform === "tiktok") {
            setSelectedPlatform(platform);
        } else {
            setSelectedPlatform(null);
        }
    };

    const handleSyncButtonPress = () => {
        if (selectedPlatform !== "tiktok") {
            setModalVisible(true);
        } else {
            navigation.navigate('Record');
        }
    };

    const handleOkPress = () => {
        setModalVisible(false);
    };

    return (
        <LinearGradient colors={['#192821', '#261213']} style={{ height: '100%' }}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <Text style={styles.title}>Choose platform</Text>

                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => handlePlatformPress("twitch")}
                        style={[selectedPlatform === "twitch"]}
                    >
                        <Image style={styles.image} source={require('../assets/images/twitch.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePlatformPress("youtube")}
                        style={[selectedPlatform === "youtube"]}
                    >
                        <Image style={styles.image} source={require('../assets/images/youtube.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePlatformPress("tiktok")}
                        style={[selectedPlatform === "tiktok"]}
                    >
                        <View style={selectedPlatform === "tiktok" ? styles.tiktokImageWrapper : null}>
                            <Image style={styles.image} source={require('../assets/images/tik-tok.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => handlePlatformPress("instagram")}
                        style={[selectedPlatform === "instagram"]}
                    >
                        <Image style={styles.image} source={require('../assets/images/instagram.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePlatformPress("twitter")}
                        style={[selectedPlatform === "twitter"]}
                    >
                        <Image style={styles.image} source={require('../assets/images/twitter.png')} />
                    </TouchableOpacity>
                </View>

                <LinearGradient style={styles.button} colors={['#EA7F74', '#D9574A']}>
                    <TouchableOpacity onPress={handleSyncButtonPress}>
                        <Text style={styles.buttonText}>Sync and go live</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                {selectedPlatform !== "tiktok" && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalText}>You have to choose a platform to sync and go live.</Text>
                                <TouchableOpacity onPress={handleOkPress}>
                                    <Text style={styles.modalButton}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                )}
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    logo: {
        position: 'absolute',
        top: 50,
        left: 25,
        width: 130,
        height: 25,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginTop: "70%",
        color: "#E1E1E1",
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 30,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    tiktokImageWrapper: {
        borderWidth: 3,
        borderColor: '#D9574A',
        borderRadius: 50,
    },
    button: {
        borderRadius: 25,
        marginVertical: 20,
        padding: 10,
        width: 200,
        marginTop: 30,
    },
    buttonText: {
        color: '#252525',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cancelText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#E1E1E1"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'rgba(255,255,255,0.83)',
        padding: 20,
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40
    },
    modalText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: "bold"
    },
    modalButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default ChoosePlatform;