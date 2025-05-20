import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import CardNotification from "../components/CardNotification";
import Header from "../components/Header";

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
                <Header />
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
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
})