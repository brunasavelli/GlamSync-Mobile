import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import Header from "../components/Header";
import AntDesign from '@expo/vector-icons/AntDesign';

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
    }
})