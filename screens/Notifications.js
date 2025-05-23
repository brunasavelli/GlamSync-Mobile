import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ImageBackground, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import CardNotification from "../components/CardNotification";
import Header from "../components/Header"


export default function Notifications() {
    return(
        <ImageBackground
            source={require("../assets/img/background2-mobile-glamsync.png")}
            style={styles.background}>
                <ScrollView>
                    <View style={styles.container}>
                    <Header />
                    <View style={styles.main}>
                        <Text style={styles.h1}>Notifications Center</Text>
                        <View style={styles.cards}>
                            <CardNotification username="@username" content="start following you" date="2 min"/>
                            <CardNotification username="@username" content="start following you" date="5 min"/>
                            <CardNotification username="@username" content="start following you" date="10 min"/>
                            <CardNotification username="@username" content="start following you" date="20 min"/>
                            <CardNotification username="@username" content="start following you" date="30 min"/>
                            <CardNotification username="@username" content="start following you" date="40 min"/>
                            <CardNotification username="@username" content="start following you" date="45 min"/>
                            <CardNotification username="@username" content="start following you" date="50 min"/>
                            <CardNotification username="@username" content="start following you" date="1h"/>
                            <CardNotification username="@username" content="start following you" date="2h"/>
                            <CardNotification username="@username" content="start following you" date="2h"/>
                            <CardNotification username="@username" content="start following you" date="4h"/>
                            <CardNotification username="@username" content="start following you" date="5h"/>
                            <CardNotification username="@username" content="start following you" date="6h"/>
                        </View>
                    </View>
                </View>
                </ScrollView>
        </ImageBackground>
    );
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginLeft: 20,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    title: {
        fontSize: 12,
        color: 'brown',
        fontFamily: "EmblemaOne-Regular",
    },
    title2: {
        fontSize: 12,
        color: 'brown',
        fontFamily: "Montserrat-SemiBold",
        marginTop: 2,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
        marginRight: 20,
    },
    h1: {
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        color: "#000",
        padding: 20,
    },
    notificationsContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70%"
    },
    notification: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})
