import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MessageBubble({ mentionedUser, text, imageUrl=null, isUser }) {
    return (
        <View style={[
            styles.bubble,
            isUser ? styles.userBubble : styles.otherBubble,
        ]}>
            {mentionedUser && <Text style={styles.mentionedUserText}>{mentionedUser}</Text>}
            {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
            {text && <Text style={isUser ? styles.userText : styles.otherText}>{text}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    bubble: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    userBubble: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
    },
    otherBubble: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
    },
    mentionedUserText: {
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    userText: {
        color: '#000000',
    },
    otherText: {
        color: '#000000',
    },
    image: {
        width: 225,
        height: 225,
        borderRadius: 5,
        marginBottom: 5,
    },
});