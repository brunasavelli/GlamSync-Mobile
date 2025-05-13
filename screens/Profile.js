import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ImageBackground source={require('../assets/img/background2-mobile-glamsync.png')} style={styles.background}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/img/logoGlamSync.png')} />
                <Text style={styles.title}>GlamSync</Text>
                <FontAwesome name="bell" size={24} color="brown" style={styles.icon} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
    },
    logo: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'brown',
    },
});