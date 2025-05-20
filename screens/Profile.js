import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Header from '../components/Header';

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
            <View style={styles.top}>
                <Text style={styles.username}>@username</Text>
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followBT}>Follow</Text>
                    <AntDesign name="plus" size={14} color="pink" />
                </TouchableOpacity>
            </View>
            <View style={styles.middle}>
                <FontAwesome name="user-circle-o" size={100} color="black" />
                <View style={styles.middleRight}>
                    <Text style={styles.username}>Your Name</Text>
                </View>
            </View>
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
    followButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'pink',
        width: 100,
        height: 25,
    },
    followBT: {
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'Montserrat-SemiBold',
        color: 'pink',
    },
    middle: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 30,
        gap: 50,
    },
    middleRight: {
        display: 'flex',
        flexDirection: 'column',
    },
});