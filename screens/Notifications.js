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