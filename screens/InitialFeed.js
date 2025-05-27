import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState, useRef } from "react";
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
import { Entypo } from '@expo/vector-icons';
import SearchInput from "../components/SearchInput";


export default function MakeUpFeed() {
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const cardWidth = Dimensions.get("window").width * 0.75;

    const posters = [
        { id: 1, image: require("../assets/img/poster.png") },
        { id: 2, image: require("../assets/img/poster2.png") },
        { id: 3, image: require("../assets/img/poster3.png") },
        { id: 4, image: require("../assets/img/poster4.png") },
    ]

    const [posts, setPosts] = useState([
        {
            id: 1,
            username: "@username",
            legend: "Visão além do alcance ✨🔮 O olhar que enxerga além do óbvio. #Misteriosa #PoderVisual #Elegância",
            liked: false,
            likesCount: 0,
            image: require("../assets/img/initialPost.png"),
        },
        {
            id: 2,
            username: "@username",
            legend: "Elegância em cada detalhe. O oversized nunca foi tão poderoso. 🖤✨ #PowerLook #EstiloComAtitude",
            liked: false,
            likesCount: 0,
            image: require("../assets/img/initialPost2.png"),
        },
        {
            id: 3,
            username: "@username",
            legend: "A beleza está nos detalhes. ✨💖 #DetalhesQueEncantam #BelezaNatural",
            liked: false,
            likesCount: 0,
            image: require("../assets/img/initialPost3.png"),
        },
        {
            id: 4,
            username: "@username",
            legend: "A moda é uma forma de expressão. Deixe sua marca! 💃✨ #ModaComAtitude #EstiloÚnico",
            liked: false,
            likesCount: 0,
            image: require("../assets/img/initialPost4.png"),
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

    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < posters.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            flatListRef.current.scrollToIndex({ index: currentIndex - 1, animated: true });
            setCurrentIndex(currentIndex - 1);
        }
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
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image source={require("../assets/img/backgroundInitialFeed.png")} style={styles.background} />
                <Image source={require("../assets/img/logoComEscrita2.png")} style={styles.logo} />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notifications')}>
                        <FontAwesome name="bell" size={20} color="brown" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Entypo name="dots-three-horizontal" size={20} color="brown" style={styles.icon} />
                    </TouchableOpacity>
                </View>
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
                    <View style={styles.carroussel}>
                        <TouchableOpacity style={styles.arrowButton} onPress={handlePrev}>
                            <AntDesign name="left" size={24} color="#F79489" />
                        </TouchableOpacity>
                        <FlatList
                            ref={flatListRef}
                            style={styles.horizontalList}
                            data={posters}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={[styles.cardContainer, { width: cardWidth }]}>
                                    <Image
                                        source={item.image}
                                        style={styles.posterImage}
                                        resizeMode="cover"
                                    />
                                </View>
                            )}
                            contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
                        />
                        <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
                            <AntDesign name="right" size={24} color="#F79489" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.feed}>
                        <Text style={styles.title}>Feed</Text>
                        <View style={styles.postsContainer}>
                            {posts.map((post, index) => (
                                <View style={styles.post}>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        paddingBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    background: {
        width: "100%",
        height: 470,
        position: "absolute",
        top: 0,
        left: 0,
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 40,
    },
    buttonsContainer: {
        position: "absolute",
        top: 35,
        right: 20,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
    button: {
        backgroundColor: "#FFFFFF",
        width: 35,
        height: 35,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    },
    main: {
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    feed: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "103%",
    },
    categoriasButtons: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 13,
    },
    carroussel: {
        marginTop: 30,
        height: 170,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    cardContainer: {
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    posterImage: {
        width: "100%",
        height: 150,
        borderRadius: 16,
    },
    horizontalList: {
        flexGrow: 0,
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
});