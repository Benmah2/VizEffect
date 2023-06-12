import React, {useState} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const StudioLiveStream = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

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
                <View style={styles.flipMuteContainer}>
                    <Image
                        source={require('../assets/images/Flip-mute-icon.png')}
                        style={styles.flipMuteImage}
                    />
                </View>
            </View>
            <Text style={styles.themeHeaderText}>Flowics Downloads - Choose your theme</Text>
            <TouchableWithoutFeedback onPress={openModal}>
                <Image
                    source={require('../assets/images/Pretty-pastels-package.png')}
                    style={styles.effectImage}
                />
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>This is the modal content</Text>
                    <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                        <Text>Close Modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.imageRow}>
                <Image
                    source={require('../assets/images/Pretty-pastels-package.png')}
                    style={styles.effectImage}
                />
                <Image
                    source={require('../assets/images/Neon-package.png')}
                    style={styles.effectImage}
                />
                <Image
                    source={require('../assets/images/Frosty-hues-package.png')}
                    style={styles.effectImage}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => {navigation.navigate("EndStream")}}>End stream</Text>
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
    },
    header: {
        position: 'absolute',
        top: 16,
        right: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    liveText: {
        top: 65,
        marginRight: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    recordingImage: {
        top: 66,
        marginRight: 15,
        width: 20,
        height: 20,
    },
    imageContainer: {
        position: 'relative',
        width: 300,
        height: 400,
        bottom: 10,
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
    flipMuteContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        padding: 4,
        borderRadius: 5,
    },
    flipMuteImage: {
        right: 10,
        width: 35,
        height: 80,
    },
    themeHeaderText: {
        position: 'absolute',
        bottom: 210,
        left: 32,
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 0,
    },
    effectImage: {
        top: 20,
        width: 85,
        height: 85,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginHorizontal: 11,
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        top: 55,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default StudioLiveStream;