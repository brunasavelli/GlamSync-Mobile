import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import Header from "../components/Header";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import CategoriaButton from "../components/CircleButton";
import SearchInput from "../components/SearchInput";

export default function AccessoryFeed() {
    const navigation = useNavigation();
        const [fontsLoaded, setFontsLoaded] = useState(false);
        const [liked, setLiked] = useState(false);
        const [likesCount, setLikesCount] = useState(0);
    
        const [posts, setPosts] = useState([
            {
                id: 1,
                username: "@username",
                legend: "Bolsa Shopping Bag Preta",
                liked: false,
                likesCount: 0,
                image: require("../assets/img/accessoryPost.png"),
            },
            {
                id: 2,
                username: "@username",
                legend: "Anel Glee em Prata 925 com Quartzo Fumê e Topázios Incolores",
                liked: false,
                likesCount: 0,
                image: require("../assets/img/accessoryPost2.png"),
            },
            {
                id: 3,
                username: "@username",
                legend: "Esculpidos para brilhar. ✨",
                liked: false,
                likesCount: 0,
                image: require("../assets/img/accessoryPost3.png"),
            },
        ]);
    
        const handleLike = (index) => {
            setPosts((prev) =>
                prev.map((post, i) =>
                    i === index
                        ? {
                            ...post,
                            liked: !post.liked,
                            likesCount: post.liked ? post.likesCount - 1 : post.likesCount + 1,
                        }
                        : post
                )
            );
        };

        const handleSave = (index) => {
            setPosts((prev) =>
                prev.map((post, i) =>
                    i === index
                        ? {
                            ...post,
                            saved: !post.saved,
                        }
                        : post
                )
            );
        }
    
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
                                <SearchInput />
                                <View style={styles.categoriasButtons}>
                                    <CategoriaButton
                                        icon={<FontAwesome5 name="tshirt" size={24} color="#8B2E0B" />}
                                        categoria="Dress"
                                        onPress={() => navigation.navigate('DressFeed')} />
                                    <CategoriaButton
                                        icon={<FontAwesome6 name="hat-cowboy" size={24} color="#8B2E0B" />}
                                        categoria="Hat"
                                        onPress={() => navigation.navigate('HatFeed')} />
                                    <CategoriaButton
                                        icon={<MaterialCommunityIcons name="shoe-ballet" size={24} color="#8B2E0B" />}
                                        categoria="Shoes"
                                        onPress={() => navigation.navigate('ShoesFeed')} />
                                    <CategoriaButton
                                        icon={<MaterialCommunityIcons name="lipstick" size={24} color="#8B2E0B" />}
                                        categoria="Make Up"
                                        onPress={() => navigation.navigate('MakeUpFeed')} />
                                    <CategoriaButton
                                        icon={<MaterialCommunityIcons name="ring" size={24} color="#8B2E0B" />}
                                        categoria="Accessory"
                                        onPress={() => navigation.navigate('AccessoryFeed')} />
                                </View>
                                <View style={styles.feed}>
                                    <Text style={styles.title}>Feed</Text>
                                    <View style={styles.postsContainer}>
                                        {posts.map((post, index) => (
                                            <View style={styles.post} key={post.id}>
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
                                                    <View style={styles.postContent}>
                                                        <Image source={post.image} style={{ width: "100%", height: 400, marginTop: 10 }} />
                                                    </View>
                                                    <View style={styles.interactions}>
                                                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                                            <TouchableOpacity
                                                                onPress={() => handleLike(index)}
                                                            >
                                                                <AntDesign
                                                                    name={post.liked ? "heart" : "hearto"}
                                                                    size={22}
                                                                    color={post.liked ? "#F08080" : "#000"} />
                                                            </TouchableOpacity>
                                                            <Text style={{ marginLeft: 1, color: "#000", fontFamily: "Montserrat-SemiBold" }}>{post.likesCount}</Text>
                                                            <TouchableOpacity>
                                                                <MaterialCommunityIcons name="chat-plus-outline" size={22} color="black" style={{ marginLeft: 10 }} />
                                                            </TouchableOpacity>
                                                        </View>
                                                        <View style={styles.save}>
                                                            <TouchableOpacity
                                                            onPress={() => handleSave(index)}
                                                            >
                                                                <FontAwesome 
                                                                name={post.saved ? "bookmark" : "bookmark-o"}
                                                                size={24}
                                                                color={post.saved ? "#FFD53D" : "black"} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                    <View style={styles.legend}>
                                                        <Text>
                                                            <Text style={{ fontFamily: "Montserrat-SemiBold" }}>{post.username}{" "}</Text>
                                                            {post.legend}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        ))}
        
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
    categoriasButtons: {
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 13,
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
    buttonArea: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    feed: {
        flex: 1,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "114%",
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
        gap: 10,
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
    },
    postContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    interactions: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 10,
        padding: 5,
    },
    legend: {
        flexDirection: "row",
        alignItems: "flex-start",
        width: "100%",
        padding: 5,
        gap: 5,
    }
})