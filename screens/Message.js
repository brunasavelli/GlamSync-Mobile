import React, { useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Header from '../components/Header';
import MessageBubble from '../components/MessageBubble';
import SearchInput from '../components/SearchInput';

export default function Message() {
    const navigation = useNavigation();
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardOpen(true));
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardOpen(false));
        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    const handleSend = () => {
        if (message.trim() === "") return;
        console.log("Mensagem enviada:", message);
        setMessage("");
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        >
            <ImageBackground source={require('../assets/img/messageBackground.png')} style={styles.background}>
                <Header height={140} backButton="true" userPhoto={1} userName="@username" info={1} />
                <ScrollView
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <MessageBubble text="Ei! Você viu o novo Work Shop que a Dolce Gabbana está fazendo agora? Tá muito legal!" isUser={false} />
                        <MessageBubble text="Não vi! Vou entrar lá agora mesmo! Adoro essa marca!!" isUser={true} />
                        <MessageBubble text="Olha só esse post que a @cocojones acabou de fazer!" isUser={false} />
                        <MessageBubble mentionedUser="@cocojones" text="" imageUrl="https://escutai.com/wp-content/uploads/2025/05/coco-jones-why-not-more-review-2-684x1024.jpg" isUser={false} />
                    </View>
                </ScrollView>
                <View style={styles.messageInputContainer}>
                    <SearchInput
                        placeholder="Type a message..."
                        icon={false}
                        height={35}
                        width={280}
                        style={styles.messageInput}
                        value={message}
                        onChangeText={setMessage}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                        <Feather name="send" size={18} color="#F79489" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        gap: 10,
    },
    messageInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 25,
        gap: 20,
    },
    messageInput: {
        fontFamily: "Montserrat-Regular",
        fontSize: 16,
        color: "#000",
    },
    sendButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#1C1C1C',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
    },
});