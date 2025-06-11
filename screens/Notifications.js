import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ImageBackground, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import CardNotification from "../components/CardNotification";
import Header from "../components/Header"
import axios from "axios";

const API_URL_NOTIFICATIONS = "http://192.168.1.105:3000/api/notification";
const API_URL_USERS = "http://192.168.1.105:3000/api/users";
// Aqui o Ip deve da máquina que o back está rodando

export default function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const [loadingNotifications, setLoadingNotifications] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(API_URL_NOTIFICATIONS);
                setNotifications(response.data);
            } catch (error) {
                console.log("Erro ao buscar notificações: ", error);
            }
        }
        fetchNotifications();
    }, []);

    useEffect(() => {
        axios.get(API_URL_USERS)
            .then(response => {
                setUsers(Array.isArray(response.data) ? response.data : response.data.users || []);
            })
            .catch(() => setUsers([]));
    }, []);

    const getUserName = (userId) => {
        const user = users.find(u => u.id === userId);
        return user ? user.name : "User";
    };

    const getUserPhoto = (userId) => {
        const user = users.find(u => String(u.id) === String(userId));
        return user && user.photo
            ? { uri: `http://192.168.1.105:3000/uploads/${user.photo}.jpg` }
            : require("../assets/img/usergray.png");
    }

    return (
        <ImageBackground
            source={require("../assets/img/background2-mobile-glamsync.png")}
            style={styles.background}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.h1}>Notifications Center</Text>
                        <View style={styles.cards}>
                            <View style={styles.section}>
                                {notifications.map((notificacao) => (
                                    <CardNotification
                                        key={notificacao.id}
                                        username={getUserName(notificacao.user_id)}
                                        content={notificacao.message}
                                        date={notificacao.created_at}
                                        image={getUserPhoto(notificacao.user_id)}
                                        unread={notificacao.unread}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    cards: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 80,
    },
    section: {
        marginHorizontal: 15,
        marginVertical: 10,
        paddingVertical: 18,
        paddingHorizontal: 20,
        gap: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#1C1C1C',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
    },
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
        fontSize: 24,
        fontFamily: "Montserrat-Bold",
        color: "#000",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
})
