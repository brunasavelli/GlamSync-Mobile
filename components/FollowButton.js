"use client";

import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FollowButton() {
    const [selected, setSelected] = useState(false);
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
        <TouchableOpacity style={[styles.followButton, selected && styles.selected]} onPress={() => setSelected(!selected)}>
            <Text style={[styles.followBT, selected && styles.bTSelected]}>{selected ? 'Following' : 'Follow'}</Text>
            {selected ? <AntDesign name="checkcircle" size={14} color="white" /> : <AntDesign name="plus" size={14} color="#F79489" />}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    followButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#F79489',
        width: 100,
        height: 25,
    },
    selected: {
        backgroundColor: '#F79489',
    },
    bTSelected: {
        color: 'white',
    },
    followBT: {
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'Montserrat-Bold',
        color: '#F79489',
    },
});