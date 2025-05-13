import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ImageBackground source={require('../assets/img/background2-mobile-glamsync.png')} style={styles.background}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/img/logoGlamSync.png')} />
                    <Text style={styles.title}>Glam</Text>
                    <Text style={styles.title2}>Sync</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <FontAwesome name="bell" size={20} color="brown" style={styles.icon} />
                    <Entypo name="dots-three-horizontal" size={20} color="brown" style={styles.icon} />
                </View>
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
        alignItems: 'center',
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
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'brown',
    },
    title2: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'brown',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
});