import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header';

export default function Post() {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [postText, setPostText] = useState("");
    const [image, setImage] = useState(null);

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
        const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardOpen(true));
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardOpen(false));
        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    useEffect(() => {
        async function requestPermission() {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('É necessário permitir o acesso à galeria para adicionar fotos.');
            }
        }
        requestPermission();
    }, []);

    const handlePost = () => {
        setPostText("");
        setImage(null);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };



    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
            >
                <ImageBackground source={require('../assets/img/messageBackground.png')} style={styles.background}>
                    <Header />
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={styles.scroll}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.container}>
                            <View style={styles.postBlock}>
                                <View style={styles.top}>
                                    <Text style={styles.topText}>What's Up?</Text>
                                    <TouchableOpacity style={styles.postButton} onPress={handlePost} >
                                        <Text style={styles.postButtonText}>POST</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.postImageContainer}>
                                    <TouchableOpacity onPress={pickImage} style={styles.addPhotoArea}>
                                        {image ? (
                                            <Image source={{ uri: image }} style={styles.selectedImage} />
                                        ) : (
                                            <View style={{ alignItems: 'center' }}>
                                                <Text style={styles.photoPlaceholder}>Add Photo</Text>
                                                <Image source={require('../assets/img/grayplus.png')} style={{ width: 30, height: 30, marginTop: 10 }} />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    style={styles.postInput}
                                    placeholder="Write your post here..."
                                    placeholderTextColor="#999"
                                    multiline
                                    textAlignVertical="top"
                                    value={postText}
                                    onChangeText={setPostText}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    scroll: {
        flex: 1,
        width: '100%',
        paddingBottom: 50,
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    postBlock: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 20,
        marginVertical: 50,
    },
    top: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topText: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
    },
    postButton: {
        backgroundColor: '#FAAEA5',
        paddingVertical: 7.5,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    postButtonText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Montserrat-Black',
        letterSpacing: 1,
    },
    postInput: {
        width: '100%',
        minHeight: 60,
        maxHeight: 180,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginTop: 20,
    },
    postImageContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 15,
    },
    addPhotoArea: {
        width: '100%',
        height: 280,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    photoPlaceholder: {
        color: '#aaa',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
    },
});