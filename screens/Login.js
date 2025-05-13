import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { CheckBox } from "react-native-web";
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";

export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                "Montserrat-MediumItalic": require("../assets/fonts/Montserrat-MediumItalic.ttf"),
                "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
                "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
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
            source={require("../assets/img/background-mobile-glamsync.png")}
            style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                <Image source={require("../assets/img/back.png")} style={{ width: 50, height: 50 }}/>
                </TouchableOpacity>
                <View style={styles.top}>
                    <Image source={require("../assets/img/logoComEscrita.png")} style={styles.logo} />
                </View>
                <View style={styles.main}>
                    <Text style={styles.h1}>Welcome Back!</Text>
                    <Text style={styles.logAccount}>Log in to your account</Text>

                    <View style={styles.inputs}>
                        <View style={styles.input}>
                            <Image source={require("../assets/img/user.png")} style={{ width: 20, height: 20 }} />
                            <TextInput placeholder="Usename" style={styles.label} />
                        </View>
                        <View style={styles.input}>
                            <Image source={require("../assets/img/cad.png")} style={{ width: 20, height: 20 }} />
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
                        <Text style={styles.login}>Log In with</Text>
                        <View style={{ width: 100, height: 1, backgroundColor: "#CDCDCD" }}></View>
                    </View>

                    <View style={styles.icons}>
                        <Image source={require('../assets/img/google.png')} style={styles.icon} />
                        <Image source={require('../assets/img/apple.png')} style={styles.icon} />
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
        fontFamily: "Montserrat-MediumItalic",
    },
    logAccount: {
        fontSize: 16,
        color: "#A4A4A4",
        fontFamily: "Montserrat-Bold",
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 250,
        width: "90%",
        gap: 10
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
        borderWidth: 1.5,
        borderColor: "#A4A4A4",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    checked: {
        backgroundColor: "#DD776C",
        borderColor: "#DD776C",
    },
    label: {
        marginLeft: 8,
        fontSize: 12,
        color: "#CDCDCD",
        fontFamily: "Montserrat-Bold",
    },
    login: {
        marginLeft: 8,
        fontSize: 12,
        color: "#CDCDCD",
        fontFamily: "Montserrat-Regular",
    },
    forgotPassword: {
        marginLeft: 80,
        fontSize: 12,
        color: "#DD776C",
        fontFamily: "Montserrat-SemiBold",
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
        fontFamily: "Montserrat-Bold",
    },
    textArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    p: {
        color: "#5F5F5F",
        fontFamily: "Montserrat-Regular",
    },
    span: {
        color: "#5F5F5F",
        fontFamily: "Montserrat-Regular",
        marginLeft: 5,
    },
    lines: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
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
