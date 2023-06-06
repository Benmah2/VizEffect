import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LiveStream = () => {
  return (
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
      <Text style={styles.effectsHeaderText}>Effects</Text>
      <View style={styles.imageRow}>
        <Image
          source={require('../assets/images/Chat.png')}
          style={styles.effectImage}
        />
        <Image
          source={require('../assets/images/Sound-effect.png')}
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
      <Text style={styles.chatText}>Chat</Text>
      <Text style={styles.soundText}>Sound</Text>
      <Text style={styles.effectsText}>Effects</Text>
      <Text style={styles.cameraSyncText}>Camera Sync</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>End stream</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    bottom: 25,
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
  effectsHeaderText: {
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
    top: 15,
    width: 55,
    height: 55,
    marginHorizontal: 12,
  },
  chatText: {
    position: 'absolute',
    bottom: 115,
    left: 48,
    fontSize: 12,
    fontWeight: 'bold',
  },
  soundText: {
    position: 'absolute',
    bottom: 115,
    left: 123,
    fontSize: 12,
    fontWeight: 'bold',
  },
  effectsText: {
    position: 'absolute',
    bottom: 115,
    left: 200,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cameraSyncText: {
    position: 'absolute',
    bottom: 115,
    left: 264,
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    top: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LiveStream;