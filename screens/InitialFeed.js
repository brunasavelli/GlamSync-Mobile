import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, ImageBackground, Modal, Platform, StatusBar as RNStatusBar } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CategoriaButton from "../components/CircleButton";
import { Entypo } from '@expo/vector-icons';
import SearchInput from "../components/SearchInput"
import FollowButton from "../components/FollowButton";
import ScrollUpButton from "../components/ScrollUpButton";
import axios from "axios";
import Ionicons from '@expo/vector-icons/Ionicons';
import LikeButton from "../components/LikeButton";

const API_URL = "http://192.168.1.105:3000/api/posts";
const API_URL_COMMENTS = "http://192.168.1.105:3000/api/comments";
// Aqui o Ip deve da máquina que o back está rodando

export default function InitialFeed() {
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const cardWidth = Dimensions.get("window").width * 0.85;
    const flatListRef = useRef(null);
    const scrollRef = useRef(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openCommentsModalId, setOpenCommentsModalId] = useState(null);
    const [allComments, setAllComments] = useState([]);
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(false);
    const [commentsCount, setCommentsCount] = useState({});

    const posters = [
        { id: 1, image: require("../assets/img/poster.png") },
        { id: 2, image: require("../assets/img/poster2.png") },
        { id: 3, image: require("../assets/img/poster3.png") },
        { id: 4, image: require("../assets/img/poster4.jpg") },
    ]

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(API_URL);
                setPosts(response.data);

                const counts = {};
                await Promise.all(response.data.map(async (post) => {
                    try {
                        const res = await axios.get(`${API_URL_COMMENTS}/count/${post.id}`);
                        counts[post.id] = res.data.count ?? 0;
                    } catch {
                        counts[post.id] = 0;
                    }
                }));
                setCommentsCount(counts);
            } catch (error) {
                console.log("Erro ao buscar posts: ", error);
            }
        }
        fetchPosts();
    }, []);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(API_URL_COMMENTS);
                setAllComments(response.data);
            } catch (error) {
                console.log("Erro ao buscar comentários: ", error);
            }
        }
        fetchComments();
    }, []);

    const handleLike = (index) => {
        setPosts((prev) =>
            prev.map((post, i) =>
                i === index
                    ? {
                        ...post,
                        liked: !post.liked,
                        likes: post.liked ? post.likes - 1 : post.likes + 1,
                    }
                    : post
            )
        );
    };

    const fetchComments = async (postId) => {
        setLoadingComments(true);
        try {
            const response = await axios.get(`${API_URL_COMMENTS}/post/${postId}`);
            setComments(response.data.comments);
        } catch (error) {
            console.log("Erro ao buscar comentários: ", error);
        } finally {
            setLoadingComments(false);
        }
    };

    const handleComment = async (postId) => {
        setOpenCommentsModalId(postId);
        fetchComments(postId);
    }

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
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1 < posters.length ? prevIndex + 1 : 0;
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [posters.length]);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                "Montserrat-MediumItalic": require("../assets/fonts/Montserrat-MediumItalic.ttf"),
                "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
                "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
                "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
                "EmblemaOne-Regular": require("../assets/fonts/EmblemaOne-Regular.ttf"),
            });
            setFontsLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ y: 0, animated: true });
    };

    const handleScroll = (event) => {
        const y = event.nativeEvent.contentOffset.y;
        setShowScrollTop(y > 700);
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef} onScroll={handleScroll} scrollEventThrottle={16} contentContainerStyle={styles.scrollView}>
                <Image source={require("../assets/img/backgroundInitialFeed.png")} style={styles.background} />
                <ImageBackground source={require('../assets/img/logoGlamSync.png')} style={styles.logo}>
                    <View style={styles.logoOverlay}>
                        <Text style={styles.titleOverlay1}>Glam</Text>
                        <Text style={styles.titleOverlay2}>Sync</Text>
                    </View>
                </ImageBackground>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notifications')}>
                        <FontAwesome name="bell" size={20} color="brown" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}  onPress={() => navigation.openDrawer()}>
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
                            onMomentumScrollEnd={e => {
                                const index = Math.round(e.nativeEvent.contentOffset.x / (cardWidth + 16));
                                setCurrentIndex(index);
                            }}
                        />
                    </View>
                    <View style={styles.feed}>
                        <Text style={styles.title}>Feed</Text>
                        <View style={styles.postsContainer}>
                            {posts.map((post, index) => (
                                <View style={styles.post} key={post.id}>
                                    <View style={styles.headerPost}>
                                        <View style={styles.userArea}>
                                            <Image source={
                                                post.user_photo
                                                    ? { uri: `http://192.168.1.105:3000/uploads/${post.user_photo}.jpg` }
                                                    : require("../assets/img/usergray.png")
                                            }
                                                style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'red' }} />
                                            <Text style={styles.username}>{post.user_name}</Text>
                                        </View>
                                        <View style={styles.followButtonArea}>
                                            <FollowButton />
                                        </View>
                                    </View>
                                    <View style={styles.postContent}>
                                        <Image
                                            source={{ uri: `http://192.168.1.105:3000/uploads/${post.photo}.jpg` }}
                                            style={{ width: "100%", height: 400, marginTop: 10, backgroundColor: 'blue' }}
                                        />
                                    </View>
                                    <View style={styles.interactions}>
                                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
                                            <LikeButton
                                                liked={post.liked}
                                                likes={post.likes}
                                                onPress={() => handleLike(index)}
                                            />
                                            <View>
                                                <TouchableOpacity style={styles.chat} onPress={() => handleComment(post.id)}>
                                                    <Ionicons name="chatbubble-outline" size={23} color="black" />
                                                    <Text style={{ marginLeft: 1, color: "#000", fontFamily: "Montserrat-SemiBold" }}>
                                                        {commentsCount[post.id] ?? 0}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.save}>
                                            <TouchableOpacity onPress={() => handleSave(index)}>
                                                <FontAwesome
                                                    name={post.saved ? "bookmark" : "bookmark-o"}
                                                    size={24}
                                                    color={post.saved ? "#FFD53D" : "black"}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.legend}>
                                        <Text>
                                            <Text style={{ fontFamily: "Montserrat-SemiBold" }}>@{post.user_name}{" "}</Text>
                                            {post.content}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                            {openCommentsModalId && (
                                <Modal
                                    transparent={true}
                                    visible={true}
                                    animationType="slide"
                                    onRequestClose={() => setOpenCommentsModalId(null)}
                                >
                                    <View style={{
                                        flex: 1,
                                        padding: 20,
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            backgroundColor: "#fff",
                                            width: Dimensions.get('window').width,
                                            height: "63%",
                                            borderTopLeftRadius: 20,
                                            borderTopRightRadius: 20,
                                            padding: 20,
                                            borderRadius: 10,
                                            marginTop: 290,
                                            shadowColor: "#363636",
                                            shadowOffset: { width: 0, height: -2 },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 4,
                                        }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18, fontFamily: 'Montserrat-SemiBold' }}>Comentários</Text>
                                                <TouchableOpacity onPress={() => setOpenCommentsModalId(null)}>
                                                    <AntDesign name="closecircleo" size={24} color="#F08080" />
                                                </TouchableOpacity>
                                            </View>
                                            <ScrollView style={{ marginTop: 20 }}>
                                                {loadingComments ? (
                                                    <Text>Carregando comentários...</Text>
                                                ) : comments.length === 0 ? (
                                                    <Text>Nenhum comentário ainda.</Text>
                                                ) : (
                                                    comments.map(comment => (
                                                        <View key={comment.id} style={{ flexDirection: 'row', gap: 3, marginBottom: 5, alignItems: 'center' }}>
                                                            <View style={{ gap: 10, alignItems: 'center', alignItems: 'center' }}>
                                                                <Image source={
                                                                    comment.user_photo
                                                                        ? { uri: `http://192.168.1.105:3000/uploads/${comment.user_photo}.jpg` }
                                                                        : require("../assets/img/usergray.png")
                                                                }
                                                                    style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'red' }} />
                                                            </View>
                                                            <View style={{ flexDirection: 'column', padding: 10 }}>
                                                                <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>{comment.user_name}</Text>
                                                                <Text style={{ fontFamily: 'Montserrat-Regular' }}>{comment.text_comment}</Text>
                                                            </View>
                                                        </View>
                                                    ))
                                                )}
                                            </ScrollView>
                                        </View>
                                    </View>
                                </Modal>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ScrollUpButton visible={showScrollTop} onPress={scrollToTop} />
        </View>
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
        width: 300,
        height: 290,
        marginVertical: 25,
        top: 35
    },
    logoOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    titleOverlay1: {
        fontSize: 55,
        color: 'white',
        fontFamily: 'EmblemaOne-Regular',
        width: 170,
    },
    titleOverlay2: {
        fontSize: 48,
        color: 'white',
        fontFamily: 'Montserrat-MediumItalic',
        marginTop: 10,
    },
    buttonsContainer: {
        position: "absolute",
        top: 50,
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
        width: "100%",
        paddingVertical: 50,
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
        height: 220,
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
        height: 200,
        borderRadius: 16,
    },
    horizontalList: {
        flexGrow: 0,
    },
    title: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16,
        color: "#8B2E0B",
        marginBottom: 30,
        marginLeft: 10,
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
        marginBottom: 30,
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
    },
    inputIcon: {
        width: 35,
        height: 35,
    },
    chat: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
});