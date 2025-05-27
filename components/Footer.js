import React from 'react';
import { View, Image, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Image source={require('../assets/img/home-icon.png')} style={{ width: 32, height: 32 }} />
            <Image source={require('../assets/img/plus-icon.png')} style={{ width: 32, height: 32 }} />
            <Image source={require('../assets/img/chat-icon.png')} style={{ width: 32, height: 32 }} />
            <Image source={require('../assets/img/profile-icon.png')} style={{ width: 32, height: 32 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 80,
        width: '100%',
        paddingHorizontal: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        position: 'fixed',
        bottom: 0,
        left: 0,
    },
});
