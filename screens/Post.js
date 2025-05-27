import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Post() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Post Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        color: '#333',
    },
});