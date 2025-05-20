import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function CardNotification({ username, content, date }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cards}>
                <FontAwesome name="user-circle-o" size={30} color="gray" style={styles.inputIcon} />
                <View style={styles.texts}>
                    <Text style={styles.title}>{username}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={{ height: 2, backgroundColor: "#EDEDED", width: "80%", borderRadius: 50 }} />
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        width: "99%",
    },
    cards: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15,
        padding: 15,
        width: "95%",
    },
    texts: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "70%",
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
        width: "15%",
        textAlign: "right"
    }
})
