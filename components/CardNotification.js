import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function CardNotification({ image, username, content, date, unread }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{date}</Text>
                {unread && <View style={styles.unreadDot}></View>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        marginBottom: 10,
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cdcdcd",
    },
    textContainer: {
        flex: 1,
        gap: 5,
    },
    username: {
        fontFamily: "Montserrat-Bold",
        fontSize: 14,
    },
    content: {
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        color: "#555",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20,
    },
    dateContainer: {
        height: "100%",
        gap: 10,
    },
    date: {
        fontFamily: "Montserrat-Regular",
        fontSize: 10,
        color: "#999",
    },
    unreadDot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "#009DFF",
        marginLeft: 10,
    },
});