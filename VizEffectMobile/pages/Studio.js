import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const Studio = () => {
  return (
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go Live</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  logo: {
    position: 'absolute',
    top: 59,
    left: 25,
    width: 130,
    height: 25,
  },
  studioHeader: {
    position: 'relative',
    top: 50,
    left: 25,
    fontSize: 22,
    fontWeight: 'bold',
  },
  panelHeader: {
    position: 'relative',
    top: 75,
    left: 25,
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 20,
    top: 65,
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
  },
  graphicPackageImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  prettyPastelsImage: {
    top: 35,
    width: windowWidth - 40,
    resizeMode: 'contain',
  },
  oceanicDreamsImage: {
    top: 25,
    width: windowWidth - 40,
    resizeMode: 'contain',
  },
  button: {
    top: 20,
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Studio;