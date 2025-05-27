import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ height=100 }) {
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
        <View style={[styles.header, { height }]}>
            <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('InitialFeed')}>
                <Image style={styles.logo} source={require('../assets/img/logoGlamSync.png')} />
                <Text style={styles.title}>Glam</Text>
                <Text style={styles.title2}>Sync</Text>
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notifications')}>
                    <FontAwesome name="bell" size={20} color="brown" style={styles.icon} />
                </TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={20} color="brown" style={styles.icon} />
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
        width: '100%',
        paddingTop: 40,
        paddingHorizontal: 20,
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
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
})