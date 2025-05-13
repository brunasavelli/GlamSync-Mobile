import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/img/background-mobile-glamsync.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>WELCOME!</Text>
                <Image source={require('../assets/img/logoComEscrita.png')} style={styles.logo} />
                <View style={styles.sloganContainer}>
                    <Text style={styles.slogan}>Fashion that conects</Text>
                    <Text style={styles.slogan}>Style that impacts</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                    <FontAwesome6 name="arrow-right-to-bracket" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                    <FontAwesome name="user-circle-o" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 50,
    },
    logo: {
        width: 400,
        height: 400,
        marginTop: 20,
    },
    sloganContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    slogan: {
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: 215,
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
    },
});