import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';

export default function Message() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/img/messageBackground.png')} style={styles.background}>
            <Header height={140} backButton="true" userPhoto={1} userName="@username" info={1} />
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});