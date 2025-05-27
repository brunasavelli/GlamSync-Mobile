"use client";

import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ImageBackground, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from "expo-font";

import Header from '../components/Header';
import SearchInput from "../components/SearchInput";
import OnlineContactCard from "../components/onlineContactCard";
import CardNotification from "../components/CardNotification";

export default function Chats() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                "Montserrat-MediumItalic": require("../assets/fonts/Montserrat-MediumItalic.ttf"),
                "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
                "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
                "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
                "Montserrat-SemiBoldItalic": require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
            });
            setFontsLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    const onlineContacts = [
        { id: 1, image: require("../assets/img/ongrayuser-icon.png"), username: "@username" },
        { id: 2, image: require("../assets/img/ongrayuser-icon.png"), username: "@username" },
        { id: 3, image: require("../assets/img/ongrayuser-icon.png"), username: "@username" },
        { id: 4, image: require("../assets/img/ongrayuser-icon.png"), username: "@username" },
        { id: 5, image: require("../assets/img/ongrayuser-icon.png"), username: "@username" },
        { id: 6, image: require("../assets/img/ongrayuser-icon.png"), username: "@username" },
    ]

    const recentContacts = [
        { id: 1, image: require("../assets/img/usergray.png"), username: "@username", content: "Sent you a post by @cocojones", date: "1h ago", unread: true },
        { id: 2, image: require("../assets/img/usergray.png"), username: "@username", content: "Quais peças de roupas você mais...", date: "2h ago", unread: true },
        { id: 3, image: require("../assets/img/usergray.png"), username: "@username", content: "Comprei recentemente uma bota...", date: "5h ago", unread: false },
    ];

    return (
        <ImageBackground source={require('../assets/img/background2-mobile-glamsync.png')} style={styles.background}>
            <Header />
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <View style={styles.top}>
                    <Text style={styles.title}>Messages</Text>
                    <View style={styles.circle}>
                        <Image source={require('../assets/img/chats-adduser.png')} style={styles.circleImage} />
                    </View>
                </View>
                <View style={styles.inputSection}>
                    <SearchInput />
                </View>
                <View style={styles.section}>
                    <View style={styles.textSection}>
                        <Text style={styles.subtitle}>Online Contacts</Text>
                        <View style={styles.greenDot}></View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {onlineContacts.map(contact => (
                            <OnlineContactCard
                                key={contact.id}
                                image={contact.image}
                                username={contact.username} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.section}>
                    <View style={styles.textSection}>
                        <Text style={styles.subtitle}>Recent Contacts</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </View>
                    {recentContacts.map(contact => (
                        <CardNotification
                            key={contact.id}
                            image={contact.image}
                            username={contact.username}
                            content={contact.content}
                            date={contact.date}
                            unread={contact.unread}
                        />
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 70,
    },
    top: {
        width: '100%',
        height: 100,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Montserrat-Bold',
    },
    circle: {
        width: 42,
        height: 42,
        borderRadius: 25,
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#1C1C1C',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
    },
    circleImage: {
        width: 25,
        height: 25,
    },
    inputSection: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        marginHorizontal: 15,
        marginVertical: 20,
        paddingVertical: 20,
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
    textSection: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
    },
    greenDot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#00D218',
    },
    contactCard: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
});