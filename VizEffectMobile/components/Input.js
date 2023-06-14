import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, Image} from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

const TextBoxComponent = ({navigation}) => {
  
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [monitorString, setMonitorString] = useState("");

    const handlePress = (deviceName) => {
        setMonitorString(deviceName);
        console.log(monitorString.deviceName);
    };

    useEffect(() => {
        fetchData();
    }, []);

   const fetchData = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:5000/api/Viz');
            setResponse(response.data);
            setLoading(false);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const postURL = 'http://10.0.2.2:5000/api/Viz/DISPLAY';
    const postData = {
        "monitor": monitorString.deviceName
    };
    const postConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

   const startStream = async () => {
        try {
            const response = await axios.post(postURL, postData, postConfig);
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
        }
        navigation.navigate("Stream")
    }

    return (
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../../../../../Downloads/VizEffect/VizEffectMobile/assets/images/logo.png')} />
                <Text style={styles.title}>Choose Input Source</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          response.map((item, index) => (
            <TouchableOpacity style={styles.btn} onPress={() => handlePress(item)}>
              <Text style={styles.btnText}>Display</Text>
            </TouchableOpacity>
          ))
        )}
         <LinearGradient style={styles.button} colors={['#EA7F74', '#D9574A']}>
         <TouchableOpacity  onPress={() => {startStream()}}>
              <Text style={styles.buttonText}>Start Stream</Text>
            </TouchableOpacity>
         </LinearGradient>
      </View>
    );    

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#192821"
  },
  button: {
    paddingVertical: 15,
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    width: "70%"
},
btn: {
  marginBottom: 20,
  padding: 20,
  width: "50%",
  backgroundColor: "rgba(92, 88, 87, 0.28)",
  borderRadius: 10,
},
buttonText: {
    color: '#252525',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
},
btnText: {
  color: '#E1E1E1',
  fontSize: 15,
  fontWeight: '700',
  textAlign: 'center',
},
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  responseText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    color: "#E1E1E1",
    fontWeight: "bold"
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
    color: "#E1E1E1",
},
});

export default TextBoxComponent;


/*const [monitorString, setMonitorString] = useState("");

  const handlePress = (deviceName) => {
    setMonitorString(deviceName);
    console.log(monitorString);
  };*/

  /*const postURL = 'http://localhost:5000/api/Viz/DISPLAY';
  const postData = {
    "monitor": "\\\\.\\DISPLAY1"
  };
  const postConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const startStream = () => {
    //navigate('Stream');
    axios.post(postURL, postData, postConfig)
      .then(response => {
        console.log(response.data);
        navigate('Stream');
      })
      .catch(error => {
        console.log(error);
      });
  }*/
