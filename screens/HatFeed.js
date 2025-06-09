import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Dimensions, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import Header from "../components/Header";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CategoriaButton from "../components/CircleButton";
import SearchInput from "../components/SearchInput";
import FollowButton from "../components/FollowButton";
import ScrollUpButton from "../components/ScrollUpButton";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import LikeButton from "../components/LikeButton";

const API_URL = "http://192.168.1.105:3000/api/posts?categorie_id=2";
const API_URL_COMMENTS = "http://192.168.1.105:3000/api/comments";
// Aqui o Ip deve da máquina que o back está rodando

export default function HatFeed() {
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const scrollRef = useRef(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [openCommentsModalId, setOpenCommentsModalId] = useState(null);
    const [allComments, setAllComments] = useState([]);
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(false);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(API_URL);
                setPosts(response.data);
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

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ y: 0, animated: true });
    };

    const handleScroll = (event) => {
        const y = event.nativeEvent.contentOffset.y;
        setShowScrollTop(y > 700);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef} onScroll={handleScroll} scrollEventThrottle={16} contentContainerStyle={styles.scrollView}>
                <Image source={require("../assets/img/background2.png")} style={styles.backgroundImage} />
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
                                            <Image source={{ uri: `http://192.168.1.105:3000/uploads/${post.photo}.jpg` }} style={{ width: "100%", height: 400, marginTop: 10, backgroundColor: 'blue' }} />
                                        </View>
                                        <View style={styles.interactions}>
                                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
                                                <LikeButton
                                                    liked={post.liked}
                                                    likes={post.likes}
                                                    onPress={() => handleLike(index)}
                                                />
                                                <View>
                                                    <TouchableOpacity style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        gap: 5,
                                                    }} onPress={() => handleComment(post.id)}>
                                                        <Ionicons name="chatbubble-outline" size={23} color="black" />
                                                        <Text style={{ marginLeft: 1, color: "#000", fontFamily: "Montserrat-SemiBold" }}>{post.comments}</Text>
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
                                                <Text style={{ fontFamily: "Montserrat-SemiBold" }}>{post.user_name}{" "}</Text>
                                                {post.content}
                                            </Text>
                                        </View>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "350",
    },
    scrollView: {
        backgroundColor: "#fff",
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
        marginVertical: 20,
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
        marginBottom: 20,
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
})