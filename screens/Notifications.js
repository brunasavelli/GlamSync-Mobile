import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import CardNotification from "../components/CardNotification";

export default function Notifications() {
    return(
        <ImageBackground
            source={require("../assets/img/background2-mobile-glamsync.png")}
            style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require("../assets/img/GlamSyncHeader.png")} style={styles.logo} />
                        <View style={styles.icons}>
                            <Image source={require("../assets/img/bell.png")} style={styles.icon} />
                            <Image source={require("../assets/img/menuDots.png")} style={styles.icon} />
                        </View>
                    </View>
                    <View style={styles.main}>
                        <Text style={styles.h1}>Notifications Center</Text>
                        <View style={styles.cards}>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                            <CardNotification username="@brunasavelli" content="start following you" date="2 min"/>
                        </View>
                    </View>
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
    }
})