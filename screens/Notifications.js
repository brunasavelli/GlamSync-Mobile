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
    h1: {
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        color: "#000",
        padding: 20,
    },
})
