import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MostPopular from "../components/MostPopular";
import YourDownloads from "../components/YourDownloads";

const LandingScreen = ({navigation}) => {
    return (
        <LinearGradient colors={["#192821", "#261213"]} style={{height: "100%"}}>
            <View style={styles.container}>
                <View style={{marginTop: 30, flexDirection: "row", marginBottom: 20, paddingTop: 20,}}>
                    <Image resizemode="contain" source={require('../assets/images/logo.png')} style={styles.logoBilde} />
                </View>

            <ScrollView scrollEventThrottle={16}>
                <View style={{flex: 1, paddingTop: 20}}>
                    <Text style={styles.title}>Most popular by Flowics</Text>
                    <View style={{height: 150, marginTop: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <MostPopular imageUri={
                                require("../assets/images/starting.png")}
                                name="Starting 1"
                            />
                            <MostPopular imageUri={
                                require("../assets/images/startingsoon.png")}
                                         name="Starting Soon"
                            />
                            <MostPopular imageUri={
                                require("../assets/images/starting2.png")}
                                         name="Starting 2"
                            />
                            <MostPopular imageUri={
                                require("../assets/images/starting3.png")}
                                         name="Starting 3"
                            />
                            <MostPopular imageUri={
                                require("../assets/images/starting4.png")}
                                         name="Starting 4"
                            />
                        </ScrollView>
                    </View>
                </View>

                <View style={{flex: 1, paddingTop: 20}}>
                    <Text style={styles.title}>Your Downloads</Text>
                    <View style={{height: 150, marginTop: 20, marginBottom: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <YourDownloads imageUri={
                                require("../assets/images/StartingDownload.png")}
                                         name="Download 1"
                            />
                            <YourDownloads imageUri={
                                require("../assets/images/StartingSoonDownload.png")}
                                         name="Download 2"
                            />
                            <YourDownloads imageUri={
                                require("../assets/images/starting4.png")}
                                         name="Download 3"
                            />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>

                <View style={{flexDirection: "row", gap: "160"}}>
                    <Text style={styles.title}>Weekly Statistics</Text>
                    <Text style={styles.title}>Week 32</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.stats}>AVG Views:</Text>
                    <Text style={styles.statsNumber}>32</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.stats}>Subscribers gained this period:</Text>
                    <Text style={styles.statsNumber}>45</Text>
                </View>

                {/*<LinearGradient style={{marginBottom: 20, borderRadius: 10}} colors={["#EA7F74", "#D9574A"]}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate("Login")
                    }}>
                        <Text style={{paddingRight: 5, color: "#E1E1E1", fontSize: 15, fontWeight: 700, textAlign: "center"}}>Sign Out</Text>
                    </TouchableOpacity>
                </LinearGradient>*/}

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 25,
    },
    logoBilde: {
        width: 130,
        height: 25,
    },
    logo: {
        width: 150,
        height: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 15,
        marginHorizontal: 10,
        marginTop: 20,
        fontWeight: "400",
        color: "#E1E1E1"
    },
    stats: {
        fontSize: 18,
        margin: 10,
        fontWeight: 600,
        color: "#E1E1E1",
    },
    statsNumber: {
        fontSize: 18,
        color: "#91D3CD",
        fontWeight: 600,
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
    card: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 20,
        backgroundColor: "rgba(92, 88, 87, 0.28)",
        borderRadius: 10,
        height: 70,
        width: "93%",

    }
});

export default LandingScreen;