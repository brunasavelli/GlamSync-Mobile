import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { CheckBox } from "react-native-web";
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../assets/background-mobile-glamsync.png")}
            style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                <Image source={require("../assets/back.png")} style={{ width: 50, height: 50 }}/>
                </TouchableOpacity>
                <View style={styles.top}>
                    <Image source={require("../assets/logoComEscrita.png")} style={styles.logo} />
                </View>
                <View style={styles.main}>
                    <Text style={styles.h1}>Welcome Back!</Text>
                    <Text style={styles.logAccount}>Log in to your account</Text>

                    <View style={styles.inputs}>
                        <View style={styles.input}>
                            <Image source={require("../assets/user.png")} style={{ width: 20, height: 20 }} />
                            <TextInput placeholder="Usename" style={styles.label} />
                        </View>
                        <View style={styles.input}>
                            <Image source={require("../assets/cad.png")} style={{ width: 20, height: 20 }} />
                            <TextInput placeholder="Password" style={styles.label} />
                        </View>

                        <View style={styles.checkboxContainer}>
                            <TouchableOpacity style={[styles.checkbox, isChecked && styles.checked]}
                                onPress={() => setIsChecked(!isChecked)} />
                            <Text style={styles.label}>Remember Me</Text>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textArea}>
                        <Text style={styles.p}>Don't have an account?</Text>
                        <Text style={styles.span}>Sign Up</Text>
                    </View>

                    <View style={styles.lines}>
                        <View style={{ width: 100, height: 1, backgroundColor: "#CDCDCD" }}></View>
                        <Text style={styles.label}>Log In with</Text>
                        <View style={{ width: 100, height: 1, backgroundColor: "#CDCDCD" }}></View>
                    </View>

                    <View style={styles.icons}>
                        <Image source={require('../assets/google.png')} style={styles.icon} />
                        <Image source={require('../assets/apple.png')} style={styles.icon} />
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
        height: 100,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 1,
    },
    top: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 250,
        height: 250,
    },
    text: {
        color: "white",
        fontSize: 50,
    },
    main: {
        backgroundColor: "white",
        width: "100vw",
        height: 600,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        position: "fixed",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
    },
    h1: {
        fontSize: 40,
        color: "#DD776C",
    },
    logAccount: {
        fontSize: 16,
        color: "#A4A4A4",
        fontWeight: "bold",
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: "#F1F3F4",
        borderRadius: 50,
        padding: 15,
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        color: "#CDCDCD",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    checkbox: {
        width: 15,
        height: 15,
        backgroundColor: "#E4E4E4",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#DD776C",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    checked: {
        backgroundColor: "#DD776C",
    },
    label: {
        marginLeft: 8,
        fontSize: 12,
        color: "#CDCDCD",
    },
    forgotPassword: {
        marginLeft: 110,
        fontSize: 12,
        color: "#DD776C",
        fontWeight: "bold",
    },
    button: {
        width: 250,
        height: 50,
        marginTop: 20,
        backgroundColor: "#F79489",
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
    textArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    p: {
        color: "#5F5F5F"
    },
    span: {
        color: "#5F5F5F",
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginLeft: 5,
    },
    lines: {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: 50,
    },
    icon: {
        width: 30,
        height: 30,
    }
});
