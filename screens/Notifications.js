import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Notifications() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

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

    return (
        <ImageBackground
            source={require("../assets/img/background2-mobile-glamsync.png")}
            style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../assets/img/flor-GlamSync.png')} />
                        <Text style={styles.title}>Glam</Text>
                        <Text style={styles.title2}>Sync</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        <FontAwesome name="bell" size={18} color="brown" style={styles.icon} />
                        <Entypo name="dots-three-horizontal" size={20} color="brown" style={styles.icon} />
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={styles.h1}>Notifications Center</Text>
                    <View style={styles.notificationsContainer}>
                        <View style={styles.notification}>
                            <Image source={require("../assets/img/user.png")} style={styles.userIcon} />
                            <Text>@username começou a te seguir</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100vw",
        height: "100vh",
        resizeMode: "cover",
    },
    container: {
        flex: 1,
    },
    header: {
        flex: 0.5,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50%",
    },
    main: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginLeft: 20,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    title: {
        fontSize: 12,
        color: 'brown',
        fontFamily: "EmblemaOne-Regular",
    },
    title2: {
        fontSize: 12,
        color: 'brown',
        fontFamily: "Montserrat-SemiBold",
        marginTop: 2,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
        marginRight: 20,
    },
    h1: {
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        color: "#000",
        marginTop: 20,
        marginLeft: 0
    },
    notificationsContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70%"
    },
    notification: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    userIcon: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10,
    },
})