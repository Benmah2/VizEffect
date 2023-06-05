import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";

class MostPopular extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={this.props.imageUri} style={styles.image} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 190,
    },
    imageContainer: {
        flex: 1,
        marginRight: 15,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
        borderRadius: 15,
    },
});

export default MostPopular;
