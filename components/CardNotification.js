import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function CardNotification({ username, content, date }) {
    return (
        <View style={styles.card}>
            <Image source={require("../assets/img/user1.png")} />
            <View style={styles.texts}>
                <Text style={styles.title}>{username}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-center",
        gap: 15,
        padding: 15,
    },
    texts: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: 14,
        fontFamily: "Montserrat-Bold",
    },
    content: {
        fontSize: 12,
        fontFamily: "Montserrat-Regular",
    },
    date: {
        fontSize: 12,
        fontFamily: "Montserrat-Regular",
        marginLeft: 100,
    }
})