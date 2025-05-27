import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function OnlineContactCard({ image, username }) {
    return (
        <View style={styles.contactCard}>
            <Image source={image} style={styles.image} />
            <Text style={styles.username}>{username}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contactCard: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },
    image: {
        width: 70,
        height: 70,
    },
    username: {
        fontFamily: "Montserrat-Bold",
        textAlign: "center",
    },
});