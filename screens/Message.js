import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import MessageBubble from '../components/MessageBubble';

export default function Message() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/img/messageBackground.png')} style={styles.background}>
            <Header height={140} backButton="true" userPhoto={1} userName="@username" info={1} />
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <MessageBubble text="Ei! Você viu o novo Work Shop que a Dolce Gabbana está fazendo agora? Tá muito legal!" isUser={false} />
                    <MessageBubble text="Não vi! Vou entrar lá agora mesmo! Adoro essa marca!!" isUser={true} />
                    <MessageBubble text="Olha só esse post que a @cocojones acabou de fazer!" isUser={false} />
                    <MessageBubble mentionedUser="@cocojones" text="" imageUrl="https://media.gettyimages.com/id/1677176649/video/newark-new-jersey-coco-jones-attends-the-2023-mtv-video-music-awards-at-prudential-center-on.jpg?s=640x640&k=20&c=79nIYzP-IaRiqkqDRPXeoBwh6G-r_vWROi1cmH4HP3o=" isUser={false} />
                    <View style={styles.messageInputContainer}>
                        <TextInput
                            style={styles.messageInput}
                            placeholderTextColor="#A4A4A4"
                        />
                    </View>
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
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    messageInputContainer: {
        width: 320,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    },
    messageInput: {
        fontFamily: "Montserrat-Regular",
    },
});