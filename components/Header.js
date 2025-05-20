import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function Header() {
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
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/img/logoGlamSync.png')} />
                <Text style={styles.title}>Glam</Text>
                <Text style={styles.title2}>Sync</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 90,
        width: '100%',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: '#dcdcdc',
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
})