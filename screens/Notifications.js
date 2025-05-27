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
    ];

    return (
        <ImageBackground
            source={require("../assets/img/background2-mobile-glamsync.png")}
            style={styles.background}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.h1}>Notifications Center</Text>
                        <View style={styles.cards}>
                            <View style={styles.section}>
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
    },
    section: {
        marginHorizontal: 15,
        marginVertical: 10,
        paddingVertical: 18,
        paddingHorizontal: 20,
        gap: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#1C1C1C',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
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
        fontSize: 24,
        fontFamily: "Montserrat-Bold",
        color: "#000",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
})
