import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import CardNotification from "../components/CardNotification";
import { useEffect, useState } from "react";

export default function Notifications() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
            async function loadFonts() {
                await Font.loadAsync({
                    "Montserrat-MediumItalic": require("../assets/fonts/Montserrat-MediumItalic.ttf"),
                    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
                    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
                    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
                    "EmblemaOne-Regular": require("../assets/fonts/EmblemaOne-Regular.ttf"),
                });
                setFontsLoaded(true);
            }
            loadFonts();
        }, []);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <ImageBackground
            source={require("../assets/img/background2-mobile-glamsync.png")}
            style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../assets/img/logoGlamSync.png')} />
                        <Text style={styles.title}>Glam</Text>
                        <Text style={styles.title2}>Sync</Text>
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                <View style={styles.main}>
                    <Text style={styles.h1}>Notifications Center</Text>
                    <View style={styles.cards}>
                        <CardNotification username="@username" content="start following you" date="2 min" />
                        <CardNotification username="@username" content="start following you" date="10 min" />
                        <CardNotification username="@username" content="send you a message" date="50 min" />
                        <CardNotification username="@username" content="send you a message" date="1 h" />
                        <CardNotification username="@username" content="comment in your post" date="1 h" />
                        <CardNotification username="@username" content="comment in your post" date="2 h" />
                        <CardNotification username="@username" content="shared your profile" date="2 h" />
                        <CardNotification username="@username" content="shared your profile" date="2 h" />
                        <CardNotification username="@username" content="visited your profile" date="3 h" />
                        <CardNotification username="@username" content="visited your profile" date="3 h" />
                        <CardNotification username="@username" content="visited your profile" date="5 h" />
                        <CardNotification username="@username" content="visited your profile" date="5 h" />
                        <CardNotification username="@username" content="start following you" date="1 day" />
                        <CardNotification username="@username" content="start following you" date="2 days" />
                    </View>
                </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100vw",
        height: "100vh",
        resizeMode: "cover",
    },
    container: {
        flex: 1,
    },
    header: {
        flex: 0.5,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    logo: {
        width: 160,
        height: 45,
        resizeMode: "contain",
        marginTop: 20,
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 100,
        marginTop: 20,
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 20,
    },
    h1: {
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        color: "#000",
        marginTop: 20,
        marginLeft: 20,
    },
    cards: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 90,
        width: '100%',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: '#dcdcdc',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    title: {
        fontSize: 12,
        color: 'brown',
        fontFamily: 'EmblemaOne-Regular'
    },
    title2: {
        fontSize: 12,
        color: 'brown',
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 1,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
})