"use client";

import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import FollowButton from '../components/FollowButton';

export default function Profile() {
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
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
            <View style={styles.top}>
                <Text style={styles.username}>@username</Text>
                <FollowButton />
            </View>
            <View style={styles.middle}>
                <Image source={require('../assets/img/profile-user.png')} style={{ width: 120, height: 120 }} />
                <View style={styles.middleRight}>
                    <Text style={styles.username}>Your Name</Text>
                    <View style={styles.section}>
                        <View style={styles.sectionItem}>
                            <Text style={styles.text}>18</Text>
                            <Text style={styles.text}>Following</Text>
                        </View>
                        <View style={styles.divisor}></View>
                        <View style={styles.sectionItem}>
                            <Text style={styles.text}>20</Text>
                            <Text style={styles.text}>Followers</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.desc}>
                <Text style={styles.descText1}>About</Text>
                <Text style={styles.descText2}>"Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe."</Text>
            </View>
            <View style={styles.postSection}>
                <View style={styles.section}>
                    <Text style={styles.postSectionText}>Posts</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" marginRight={15} marginBottom={10} />
                </View>
                <View style={styles.photoSection}>
                    <Image source={require('../assets/img/profile-photo1.png')} style={{ width: 131, height: 220 }} />
                    <Image source={require('../assets/img/profile-photo2.png')} style={{ width: 131, height: 220 }} />
                    <Image source={require('../assets/img/profile-photo3.png')} style={{ width: 131, height: 220 }} />
                </View>
                <View style={styles.photoSection}>
                    <Image source={require('../assets/img/profile-photo4.png')} style={{ width: 131, height: 220 }} />
                    <Image source={require('../assets/img/profile-photo5.png')} style={{ width: 131, height: 220 }} />
                    <Image source={require('../assets/img/profile-photo6.png')} style={{ width: 131, height: 220 }} />
                </View>
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
        resizeMode: 'cover',
        alignItems: 'center',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    username: {
        fontSize: 22,
        fontFamily: 'Montserrat-Bold',
    },
    middle: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    middleRight: {
        display: 'flex',
        flexDirection: 'column',
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 30,
        marginTop: 10,
    },
    sectionItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
    },
    divisor: {
        width: 1,
        height: 25,
        backgroundColor: 'black',
    },
    desc: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 20,
        gap: 10,
    },
    descText1: {
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: 'black',
    },
    descText2: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
    postSection: {
        display: 'flex',
        flexDirection: 'column',
        height: 490,
        width: '100%',
        marginTop: 35,
        backgroundColor: 'white',
    },
    postSectionText: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: 'black',
        marginLeft: 30,
        marginBottom: 10,
    },
    photoSection: {
        display: 'flex',
        flexDirection: 'row',
    },
});