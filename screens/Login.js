import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Login() {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const [isUsernameValid, setIsUsernameValid] = useState(false);

    const validateUsername = (text) => {
        const userRegex = /^[a-zA-Z0-9._]{3,}$/;
        setUsername(text);
        setIsUsernameValid(userRegex.test(text));
    };

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
                source={require("../assets/img/background-mobile-glamsync.png")}
                style={styles.background}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="chevron-back" size={24} color="pink" />
                        </TouchableOpacity>
                        <View style={styles.top}>
                            <Image source={require("../assets/img/logoComEscrita.png")} style={styles.logo} />
                        </View>
                        <View style={styles.main}>
                            <Text style={styles.h1}>Welcome Back!</Text>
                            <Text style={styles.logAccount}>Log in to your account</Text>

                            <View style={styles.form}>
                                { }
                                <View style={styles.inputContainer}>
                                    <FontAwesome name="user-circle-o" size={20} color="pink" style={styles.inputIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Username"
                                        placeholderTextColor="#A4A4A4"
                                        value={username}
                                        onChangeText={validateUsername}
                                        autoCapitalize="none"
                                    />
                                    {username.length > 0 && (
                                        <Ionicons
                                            name={isUsernameValid ? "checkmark-circle" : "close-circle"}
                                            size={20}
                                            color={isUsernameValid ? "green" : "#F08080"}
                                            style={styles.validationIcon}
                                        />
                                    )}
                                </View>
                                <View style={styles.inputContainer}>
                                    <Ionicons name="lock-closed" size={20} color="pink" style={styles.inputIcon} />
                                    <TextInput
                                        placeholder="Password"
                                        placeholderTextColor="#A4A4A4"
                                        style={styles.input}
                                        secureTextEntry={!showPassword}
                                        value={password}
                                        onChange={setPassword}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        textContentType="password"
                                    />
                                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.validationIcon}>
                                        <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="#999" />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.checkboxContainer}>
                                    <TouchableOpacity style={styles.checkbox}
                                        onPress={() => setRememberMe(!rememberMe)} >
                                        {rememberMe ? (
                                            <Ionicons name="checkmark-circle" size={20} color="#F08080" />
                                        ) : (
                                            <Ionicons name="ellipse-outline" size={20} color="#F08080" />
                                        )}
                                    </TouchableOpacity>
                                    <Text style={styles.label}>Remember Me</Text>
                                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                                </View>

                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Log In</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.textArea}>
                                <Text style={styles.p}>Don't have an account?</Text>
                                <Text style={styles.span} onPress={() =>
                                    navigation.navigate('SignUp')
                                }>Sign Up</Text>
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
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
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
        top: 40,
        left: 10,
        zIndex: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
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
        height: 600,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        paddingTop: 30,
        marginTop: 53,
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
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 250,
        width: "100%",
        gap: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 30,
        marginBottom: 15,
        paddingHorizontal: 15,
        height: 50,
        width: 330,
        backgroundColor: '#f9f9f9',
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    checked: {
        backgroundColor: "#DD776C",
        borderColor: "#DD776C",
    },
    label: {
        marginLeft: 8,
        fontSize: 12,
        color: "#A4A4A4",
        fontFamily: "Montserrat-Bold",
    },
    login: {
        marginLeft: 8,
        fontSize: 12,
        color: "#CDCDCD",
        fontFamily: "Montserrat-Regular",
    },
    forgotPassword: {
        marginLeft: 60,
        fontSize: 12,
        color: "#DD776C",
        fontFamily: "Montserrat-SemiBold",
    },
    button: {
        width: 250,
        height: 40,
        marginTop: 20,
        backgroundColor: "#F79489",
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
    },
    textArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    p: {
        color: "#5F5F5F",
        fontFamily: "Montserrat-Regular",
    },
    span: {
        color: "#5F5F5F",
        fontFamily: "Montserrat-Bold",
        textDecorationLine: "underline",
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
        gap: 50,
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: 30,
    },
    icon: {
        width: 30,
        height: 30,
    }
});
