import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, SafeAreaView } from 'react-native';
import logo from '../images/VizEffect_Logo.png';

export default function App() {
  const popularTitles = ['Popular 1', 'Popular 2', 'Popular 3', 'Popular 4', 'Popular 5'];
  const downloadTitles = ['Download 1', 'Download 2', 'Download 3'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.title}>Most popular by flowics</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
        <View style={styles.buttonContainer}>
          {popularTitles.map((title, i) => (
            <View style={[styles.buttonItem, i === 2 && styles.buttonItemLarge]} key={i}>
              <Button title={title} onPress={() => {}} />
            </View>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.title}>Your downloads</Text>
      <ScrollView horizontal>
        <View style={styles.buttonContainer}>
          {downloadTitles.map((title, i) => (
            <View style={styles.buttonItem} key={i}>
              <Button title={title} onPress={() => {}} />
            </View>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.stats}>Weekly Statistics</Text>
      <Text style={styles.stats}>Week 32</Text>

      <Text style={styles.stats}>AVG Views: 32</Text>
      <Text style={styles.stats}>Subscribers gained this period: 45</Text>
      
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>See more</Text>
      </View>

      <View style={styles.navigationBar}>
        {[1, 2, 3, 4, 5].map((number) => (
          <View style={[styles.circleButton, number === 3 && styles.circleButtonLarge]} key={number}>
            <Text style={styles.buttonNumber}>{number}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: 40,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  logo: {
    width: 150,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 20,
  },
  scrollContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  buttonItem: {
    marginRight: 10,
  },
  buttonItemLarge: {
    marginRight: 10,
    width: 100,
    height: 40,
  },
  stats: {
    fontSize: 18,
    margin: 10,
  },
  seeMoreContainer: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  seeMoreText: {
    fontSize: 12,
    color: 'gray',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonLarge: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  buttonNumber: {
    fontSize: 14,
  },
});
