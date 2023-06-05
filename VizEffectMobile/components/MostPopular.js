import React, {Component} from "react";
import {Image, StyleSheet, View} from "react-native";

class MostPopular extends Component {
    render() {
        return (
            <View style={{height: 150, width: 190}}>
                <View style={{flex: 1, marginRight: 15,}}>
                    <Image source={this.props.imageUri} style={styles.Images}></Image>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Images: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "fill",
        borderRadius: 15,
    }
    }
)

export default MostPopular;