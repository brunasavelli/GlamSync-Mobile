import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function Home() {
    const navigation = useNavigation();
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
        <ImageBackground source={require('../assets/img/background-mobile-glamsync.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>WELCOME!</Text>
                <Image source={require('../assets/img/logoComEscrita.png')} style={styles.logo} />
                <View style={styles.sloganContainer}>
                    <Text style={styles.slogan}>Fashion that conects</Text>
                    <Text style={styles.slogan}>Style that impacts</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                    <FontAwesome6 name="arrow-right-to-bracket" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                    <FontAwesome name="user-circle-o" size={20} color="black" />
                </TouchableOpacity>
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
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'Montserrat-Black',
        marginTop: 50,
    },
    logo: {
        width: 400,
        height: 400,
        marginTop: 20,
    },
    sloganContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    slogan: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Montserrat-SemiBoldItalic',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: 215,
        height: 42,
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Montserrat-SemiBold',
    },
});