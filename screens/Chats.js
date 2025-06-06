import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
    Modal,
    ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import OnlineContactCard from "../components/OnlineContactCard";
import CardNotification from "../components/CardNotification";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://192.168.100.171:3000/api";

export default function Chats() {
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [onlineContacts, setOnlineContacts] = useState([]);
    const [recentContacts, setRecentContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchUsername, setSearchUsername] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchLoading, setLoadingSearch] = useState(false);

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

    useEffect(() => {
        async function fetchContacts() {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/users`);
                if (!response.ok) {
                    throw new Error("Erro ao buscar dados");
                }
                const data = await response.json();

                console.log("Dados da API:", data);
                setOnlineContacts(data.onlineContacts || []);
                setRecentContacts(data.recentContacts || []);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchContacts();
    }, []);

    async function searchUsersByUsername(usernameTyped) {
        setSearchUsername(usernameTyped);

        try {
            setLoadingSearch(true);

            const endpoint = usernameTyped
                ? `${API_URL}/users?username=${usernameTyped}`
                : `${API_URL}/users?limit=10`;

            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error("Erro ao buscar usuários");
            }

            const data = await response.json();
            console.log("Dados da busca de usuários:", data);

            // Tratar resposta para garantir que é array
            const usersArray = Array.isArray(data) ? data : (data.users || []);
            setSearchResults(usersArray.slice(0, 10));
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            setSearchResults([]);
        } finally {
            setLoadingSearch(false);
        }
    }

    useEffect(() => {
        if (showAddUserModal) {
            searchUsersByUsername("");
        }
    }, [showAddUserModal]);

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <ImageBackground
            source={require("../assets/img/background2-mobile-glamsync.png")}
            style={styles.background}
        >
            <Header />
            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <View style={styles.top}>
                    <Text style={styles.title}>Messages</Text>
                    <View style={styles.circle}>
                        <TouchableOpacity onPress={() => setShowAddUserModal(true)}>
                            <Image
                                source={require("../assets/img/chats-adduser.png")}
                                style={styles.circleImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputSection}>
                    <SearchInput />
                </View>

                {loading && (
                    <View style={{ padding: 20 }}>
                        <ActivityIndicator size="large" color="#000" />
                    </View>
                )}

                {error && (
                    <View style={{ padding: 20 }}>
                        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
                    </View>
                )}

                {!loading && !error && (
                    <>
                        <View style={styles.section}>
                            <View style={styles.textSection}>
                                <Text style={styles.subtitle}>Online Contacts</Text>
                                <View style={styles.greenDot}></View>
                            </View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={styles.scrollHorizontal}
                            >
                                {onlineContacts.length === 0 ? (
                                    <Text style={{ padding: 10, fontFamily: "Montserrat-Regular" }}>
                                        Nenhum contato online.
                                    </Text>
                                ) : (
                                    onlineContacts.map((contact) => (
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("Message")}
                                            key={contact.id}
                                        >
                                            <OnlineContactCard
                                                image={contact.image}
                                                username={contact.username}
                                                onPress={() => navigation.navigate("Message")}
                                            />
                                        </TouchableOpacity>
                                    ))
                                )}
                            </ScrollView>
                        </View>

                        <View style={styles.section}>
                            <View style={styles.textSection}>
                                <Text style={styles.subtitle}>Recent Contacts</Text>
                                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                            </View>
                            {recentContacts.length === 0 ? (
                                <Text style={{ padding: 10, fontFamily: "Montserrat-Regular" }}>
                                    Nenhum contato recente.
                                </Text>
                            ) : (
                                recentContacts.map((contact) => (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Message")}
                                        style={styles.touch}
                                        key={contact.id}
                                    >
                                        <CardNotification
                                            image={contact.image}
                                            username={contact.username}
                                            content={contact.content}
                                            date={contact.date}
                                            unread={contact.unread}
                                        />
                                    </TouchableOpacity>
                                ))
                            )}
                        </View>
                    </>
                )}
            </ScrollView>

            <Modal
                visible={showAddUserModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowAddUserModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Adicionar Contato</Text>

                        <SearchInput
                            placeholder="Pesquise por um username"
                            style={styles.searchMobile}
                            onChangeText={searchUsersByUsername}
                        />

                        {searchLoading ? (
                            <ActivityIndicator size="small" color="#000" style={{ marginTop: 10 }} />
                        ) : (
                            searchResults.map((user) => (
                                <TouchableOpacity
                                    key={user.id}
                                    onPress={() => {
                                        console.log("Usuário selecionado:", user.username);
                                        setShowAddUserModal(false);
                                    }}
                                    style={styles.searchResultItem}
                                >
                                    <Image
                                        source={{ uri: user.photo.png }}
                                        style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                                    />
                                    <Text style={{ fontFamily: "Montserrat-Regular" }}>{user.username}</Text>
                                </TouchableOpacity>
                            ))
                        )}

                        <TouchableOpacity onPress={() => setShowAddUserModal(false)} style={{ marginTop: 20 }}>
                            <Text style={{ color: "#FAAEA5", fontFamily: "Montserrat-Bold" }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 70,
    },
    top: {
        width: "100%",
        height: 100,
        padding: 20,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 24,
        fontFamily: "Montserrat-Bold",
    },
    circle: {
        width: 42,
        height: 42,
        borderRadius: 25,
        backgroundColor: "#EDEDED",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#1C1C1C",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
    },
    circleImage: {
        width: 25,
        height: 25,
    },
    inputSection: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    section: {
        marginHorizontal: 15,
        marginVertical: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowColor: "#1C1C1C",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
    },
    scrollHorizontal: {
        width: "100%",
    },
    textSection: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
    },
    greenDot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "#00D218",
    },
    touch: {
        width: "100%",
    },
    searchMobile: {
        width: "95%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 30,
        width: "80%",
        alignItems: "center",
    },
    modalTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
        marginBottom: 10,
    },
    searchResultItem: {
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        marginTop: 10,
        width: "100%",
    },
});
