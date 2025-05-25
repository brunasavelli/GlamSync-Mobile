import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
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

export default function MaquiagemFeed() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const [posts, setPosts] = useState([
    {
        id: 1,
        username: "@username",
        legend: "Legenda do post 1 muito longa para quebrar em várias linhas.",
        liked: false,
        likesCount: 0,
        image: require("../assets/img/postImage.png"),
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
                            <View style={styles.buttonArea}>
                                <TouchableOpacity style={styles.categoriasButton}>
                                    <FontAwesome5 name="tshirt" size={24} color="#8B2E0B" />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 10, marginTop: 3 }}>Dress</Text>
                            </View>
                            <View style={styles.buttonArea}>
                                <TouchableOpacity style={styles.categoriasButton}>
                                    <FontAwesome6 name="hat-cowboy" size={24} color="#8B2E0B" style={styles.iconCategoria} />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 10, marginTop: 3 }}>Hat</Text>
                            </View>
                            <View style={styles.buttonArea}>
                                <TouchableOpacity style={styles.categoriasButton}>
                                    <MaterialCommunityIcons name="shoe-ballet" size={24} color="#8B2E0B" style={styles.iconCategoria} />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 10, marginTop: 3 }}>Shoes</Text>
                            </View>
                            <View style={styles.buttonArea}>
                                <TouchableOpacity style={styles.categoriasButton}>
                                    <MaterialCommunityIcons name="lipstick" size={24} color="#8B2E0B" style={styles.iconCategoria} />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 10, marginTop: 3 }}>Make Up</Text>
                            </View>
                            <View style={styles.buttonArea}>
                                <TouchableOpacity style={styles.categoriasButton}>
                                    <MaterialCommunityIcons name="ring" size={24} color="#8B2E0B" style={styles.iconCategoria} />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 10, marginTop: 3 }}>Accessory</Text>
                            </View>
                        </View>
                        <View style={styles.feed}>
                            <Text style={styles.title}>Feed</Text>
                            <View style={styles.postsContainer}>
                                {posts.map((post, index) => (
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
                                            <Image source={require("../assets/img/postImage.png")} style={{ width: "100%", height: 400, marginTop: 10 }} />
                                        </View>
                                        <View style={styles.interactions}>
                                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                                <TouchableOpacity
                                                    onPress={() => handleLike(index)}
                                                    style={styles.validationIcon}>
                                                    <AntDesign
                                                    name={liked ? "heart" : "hearto"}
                                                    size={22}
                                                    color={liked ? "#F08080" : "#000"} />
                                                </TouchableOpacity>
                                                <Text style={{ marginLeft: 1, color: "#000", fontFamily: "Montserrat-SemiBold" }}>{post.likesCount}</Text>
                                                <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.validationIcon}>
                                                    <MaterialCommunityIcons name="chat-plus-outline" size={22} color="black" style={{ marginLeft: 10 }} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.save}>
                                                <TouchableOpacity>
                                                    <Feather name="bookmark" size={22} color="black" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.legend}>
                                            <Text>
                                                <Text style={{ fontFamily: "Montserrat-SemiBold" }}>{post.username}</Text>
                                                Iluminador líquido rare beauty positive light
                                            </Text>
                                        </View>
                                    </View>
                                ))}

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
                                        <Image source={require("../assets/img/postImage2.png")} style={{ width: "100%", height: 400, marginTop: 10 }} />
                                    </View>
                                    <View style={styles.interactions}>
                                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    if (liked) {
                                                        setLikesCount(likesCount - 1);
                                                    } else {
                                                        setLikesCount(likesCount + 1);
                                                    }
                                                    setLiked(!liked);
                                                }}
                                                style={styles.validationIcon}>
                                                <AntDesign name={liked ? "heart" : "hearto"} size={22} color={liked ? "#F08080" : "#000"} />
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: 1, color: "#000", fontFamily: "Montserrat-SemiBold" }}>{likesCount}</Text>
                                            <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.validationIcon}>
                                                <MaterialCommunityIcons name="chat-plus-outline" size={22} color="black" style={{ marginLeft: 10 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.save}>
                                            <TouchableOpacity>
                                                <Feather name="bookmark" size={22} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.legend}>
                                        <Text>
                                            <Text style={{ fontFamily: "Montserrat-SemiBold" }}>@username{" "}</Text>
                                            Gloss preenchedor - efeito volume instantâneo
                                        </Text>
                                    </View>
                                </View>
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
                                        <Image source={require("../assets/img/postImage3.png")} style={{ width: "100%", height: 400, marginTop: 10 }} />
                                    </View>
                                    <View style={styles.interactions}>
                                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    if (liked) {
                                                        setLikesCount(likesCount - 1);
                                                    } else {
                                                        setLikesCount(likesCount + 1);
                                                    }
                                                    setLiked(!liked);
                                                }}
                                                style={styles.validationIcon}>
                                                <AntDesign name={liked ? "heart" : "hearto"} size={22} color={liked ? "#F08080" : "#000"} />
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: 1, color: "#000", fontFamily: "Montserrat-SemiBold" }}>{likesCount}</Text>
                                            <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.validationIcon}>
                                                <MaterialCommunityIcons name="chat-plus-outline" size={22} color="black" style={{ marginLeft: 10 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.save}>
                                            <TouchableOpacity>
                                                <Feather name="bookmark" size={22} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.legend}>
                                        <Text>
                                            <Text style={{ fontFamily: "Montserrat-SemiBold" }}>@username{" "}</Text>
                                            Dior Forever Glow Luminizer
                                        </Text>
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
        height: "100vh",
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