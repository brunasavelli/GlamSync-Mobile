import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function Header({ height = 100, paddingTop = 50, backButton = false, userPhoto = null, userName = null, info = null }) {
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
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
        <View style={[styles.header, { height, paddingTop }]}>
            <View style={styles.section}>
            <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('InitialFeed')}>
                <Image style={styles.logo} source={require('../assets/img/logoGlamSync.png')} />
                <Text style={styles.title}>Glam</Text>
                <Text style={styles.title2}>Sync</Text>
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notifications')}>
                    <FontAwesome name="bell" size={20} color="brown" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
                <Entypo name="dots-three-horizontal" size={20} color="brown" style={styles.icon} />
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.section}>
                <View style={styles.section2}>
            {backButton && (
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Chats')}
                >
                    <Ionicons name="chevron-back" size={20} color="white" />
                </TouchableOpacity>
            )}
            <View style={styles.userContainer}>
            {userPhoto && (
                <Image
                    source={require('../assets/img/usergray.png')}
                    style={{ width: 40, height: 40 }}
                />
            )}
            {userName && (
                <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Montserrat-SemiBold' }}>
                    {userName}
                </Text>
            )}
            </View>
            </View>
            {info && (
                <Feather name="info" size={24} color="#F79489" />
            )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        gap: 10,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    title: {
        fontSize: 12,
        color: 'brown',
        fontFamily: 'EmblemaOne-Regular'
    },
    title2: {
        fontSize: 12,
        color: 'brown',
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 1,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    section2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    backButton: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#F79489',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
})