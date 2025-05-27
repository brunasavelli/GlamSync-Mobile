import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ImageBackground, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import CardNotification from "../components/CardNotification";
import Header from "../components/Header"


export default function Notifications() {
    const notificacoes = [
        { id: 1, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "20min ago", unread: false },
        { id: 2, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "30min ago", unread: false },
        { id: 3, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "50min ago", unread: false },
        { id: 4, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "1h ago", unread: false },
        { id: 5, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "1h30 ago", unread: false },
        { id: 6, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "2h ago", unread: false },
        { id: 7, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "2h ago", unread: false },
        { id: 8, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "3h ago", unread: false },
        { id: 9, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "3h ago", unread: false },
        { id: 10, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "4h ago", unread: false },
        { id: 11, image: require("../assets/img/usergray.png"), username: "@username", content: "Started following you", date: "4h ago", unread: false },
    ];

    return (
        <ImageBackground
            source={require("../assets/img/background2-mobile-glamsync.png")}
            style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <Header />
                    <View style={styles.main}>
                        <Text style={styles.h1}>Notifications Center</Text>
                            <View style={styles.cards}>
                                {notificacoes.map((notificacao) => (
                                    <CardNotification
                                        key={notificacao.id}
                                        username={notificacao.username}
                                        content={notificacao.content}
                                        date={notificacao.date}
                                        image={notificacao.image}
                                        unread={notificacao.unread}
                                    />
                                ))}
                            </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}




const styles = StyleSheet.create({
    cards: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 80,
        paddingHorizontal: 20,
    },
    background: {
        flex: 1,
        width: "100vw",
        height: "100vh",
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    h1: {
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        color: "#000",
        padding: 20,
    },
})
