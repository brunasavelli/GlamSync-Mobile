"use client";

import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ImageBackground, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as Font from "expo-font";

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

    return (
        <ImageBackground source={require('../assets/img/background2-mobile-glamsync.png')} style={styles.background}>
            <Header />
            <View style={styles.top}>
                <Text style={styles.title}>Messages</Text>
                <View style={styles.circle}>
                    <Image source={require('../assets/img/chats-adduser.png')} style={styles.circleImage} />
                </View>
            </View>
            <Footer />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
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
    
});