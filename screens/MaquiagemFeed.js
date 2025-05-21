import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import Header from "../components/Header";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function MaquiagemFeed() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                "Montserrat-MediumItalic": require("../assets/fonts/Montserrat-MediumItalic.ttf"),
                "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
                "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
                "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
            });
            setFontsLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ImageBackground
            source={require("../assets/img/background.png")}
            style={styles.background}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Header />
                    <View style={styles.main}>
                        <View style={styles.searchArea}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Pesquisar"
                                placeholderTextColor="#A4A4A4"
                            />
                            <AntDesign name="search1" size={20} color="#8B2E0B" />
                        </View>
                        <View style={styles.categoriasButtons}>
                            <TouchableOpacity style={styles.categoriasButton}>
                                <FontAwesome5 name="tshirt" size={24} color="#8B2E0B" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoriasButton}>
                                <FontAwesome6 name="hat-cowboy" size={24} color="#8B2E0B" style={styles.iconCategoria} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoriasButton}>
                                <MaterialCommunityIcons name="shoe-ballet" size={24} color="#8B2E0B" style={styles.iconCategoria} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoriasButton}>
                                <MaterialCommunityIcons name="lipstick" size={24} color="#8B2E0B" style={styles.iconCategoria} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.categoriasButton}>
                                <MaterialCommunityIcons name="ring" size={24} color="#8B2E0B" style={styles.iconCategoria} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.feed}>
                            <Text style={styles.title}>Feed</Text>
                            <View style={styles.postsContainer}>
                                <View style={styles.post}>
                                    <View style={styles.headerPost}>
                                        <View style={styles.userArea}>
                                            <FontAwesome name="user-circle-o" size={20} color="gray" style={styles.inputIcon} />
                                            <Text style={styles.username}>@username</Text>
                                        </View>
                                        <View style={styles.followButtonArea}>
                                            <TouchableOpacity style={styles.followButton}>
                                                <Text style={{ fontFamily: "Montserrat-SemiBold", color: "#F08080", fontSize: 10 }}>Follow</Text>
                                                <AntDesign name="plus" size={14} color="#F08080" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        height: 100,
        display: "flex",
        justifyContent: "center",
    },
    main: {
        flex: 1,
        padding: 20,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    searchArea: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    searchInput: {
        fontFamily: "Montserrat-Regular",
    },
    categoriasButtons: {
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    categoriasButton: {
        backgroundColor: "#FFFFFF",
        width: 50,
        height: 50,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    },
    feed: {
        flex: 1,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "116%",
        height: "100vh"
    },
    title: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        color: "#8B2E0B",
        marginTop: 20,
        alignSelf: "flex-start",
    },
    postsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    post: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 5,
        width: "99%",
    },
    headerPost: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width: "100%",
        justifyContent: "space-between",
    },
    userArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    username: {
        fontSize: 14,
        fontFamily: "Montserrat-SemiBold",
    },
    followButton: {
        borderRadius: 20,
        padding: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderColor: "#F08080",
        borderWidth: 2,
    }
})