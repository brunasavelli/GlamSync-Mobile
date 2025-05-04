import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>WELCOME!</Text>
            <Image source={require('../assets/logo-semFundo.png')} style={styles.logo} />
            <Text style={styles.brand}>GlamSync</Text>
            <Text style={styles.slogan}>Fashion that conects</Text>
            <Text style={styles.slogan}>Style that impacts</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
                <FontAwesome6 name="arrow-right-to-bracket" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
                <FontAwesome name="user-circle-o" size={20} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F79489',
    },
    title: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
    },
    logo: {
        width: 400,
        height: 400,
        marginTop: 20,
    },
    brand: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
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
        width: 250,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
    },
});