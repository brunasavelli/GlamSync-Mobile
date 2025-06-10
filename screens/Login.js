import { StatusBar } from "expo-status-bar";
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    ImageBackground, 
    KeyboardAvoidingView, 
    Platform, 
    TouchableWithoutFeedback, 
    Keyboard,
    Dimensions
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const navigation = useNavigation();

    const validateUsername = (text) => {
        const userRegex = /^[a-zA-Z0-9._]{3,}$/;
        setUsername(text);
        setIsUsernameValid(userRegex.test(text));
    };

    const handleLogin = () => {
        if (!isUsernameValid || username.length === 0 || password.length === 0) {
            setError('Preencha todos os campos corretamente.');
            setSuccess(null);
            return;
        }
    
        setError(null);
        setSuccess('Login realizado com sucesso!');
        
        // Navegação separada para evitar problemas
        setTimeout(() => {
            navigation.navigate('TabNavigator');
        }, 100);
    };

    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    "Montserrat-MediumItalic": require("../assets/fonts/Montserrat-MediumItalic.ttf"),
                    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
                    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
                    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
                    "EmblemaOne-Regular": require("../assets/fonts/EmblemaOne-Regular.ttf"),
                    "Montserrat-SemiBoldItalic": require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
                });
                setFontsLoaded(true);
            } catch (error) {
                console.log('Erro ao carregar fontes:', error);
                // Continua sem as fontes customizadas em caso de erro
                setFontsLoaded(true);
            }
        }
        loadFonts();
    }, []);

    const handleBackPress = () => {
        try {
            navigation.navigate('Home');
        } catch (error) {
            console.log('Erro na navegação:', error);
            navigation.goBack();
        }
    };

    const handleSignUpPress = () => {
        try {
            navigation.navigate('SignUp');
        } catch (error) {
            console.log('Erro na navegação para SignUp:', error);
        }
    };

    if (!fontsLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="transparent" translucent={true} />
            <ImageBackground
                source={require("../assets/img/background-mobile-glamsync.png")}
                style={styles.background}
                resizeMode="cover"
            >
                <KeyboardAvoidingView
                    style={styles.keyboardView}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.contentContainer}>
                            <TouchableOpacity 
                                style={styles.backButton} 
                                onPress={handleBackPress}
                                activeOpacity={0.7}
                            >
                                <Ionicons name="chevron-back" size={24} color="#DD776C" />
                            </TouchableOpacity>
                            
                            <View style={styles.top}>
                                <View style={styles.logoContainer}>
                                    <Image 
                                        source={require("../assets/img/logoGlamSync.png")} 
                                        style={styles.logo}
                                        resizeMode="contain"
                                    />
                                    <View style={styles.logoText}>
                                        <Text style={styles.glamText}>Glam</Text>
                                        <Text style={styles.syncText}>sync</Text>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={styles.main}>
                                <Text style={styles.h1}>Welcome Back!</Text>
                                <Text style={styles.logAccount}>Log in to your account</Text>

                                <View style={styles.form}>
                                    <View style={styles.inputContainer}>
                                        <FontAwesome 
                                            name="user-circle-o" 
                                            size={20} 
                                            color="#BC7D7C" 
                                            style={styles.inputIcon} 
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Username"
                                            placeholderTextColor="#A4A4A4"
                                            value={username}
                                            onChangeText={validateUsername}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            textContentType="username"
                                            returnKeyType="next"
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
                                        <Ionicons 
                                            name="lock-closed" 
                                            size={20} 
                                            color="#BC7D7C" 
                                            style={styles.inputIcon} 
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Password"
                                            placeholderTextColor="#A4A4A4"
                                            secureTextEntry={!showPassword}
                                            value={password}
                                            onChangeText={setPassword}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            textContentType="password"
                                            returnKeyType="done"
                                            onSubmitEditing={handleLogin}
                                        />
                                        <TouchableOpacity 
                                            onPress={() => setShowPassword(!showPassword)} 
                                            style={styles.validationIcon}
                                            activeOpacity={0.7}
                                        >
                                            <Ionicons 
                                                name={showPassword ? "eye-off" : "eye"} 
                                                size={20} 
                                                color="#999" 
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    
                                    {error && <Text style={styles.error}>{error}</Text>}
                                    {success && <Text style={styles.success}>{success}</Text>}
                                    
                                    <View style={styles.checkboxContainer}>
                                        <TouchableOpacity 
                                            style={styles.checkbox}
                                            onPress={() => setRememberMe(!rememberMe)}
                                            activeOpacity={0.7}
                                        >
                                            {rememberMe ? (
                                                <Ionicons name="checkmark-circle" size={20} color="#F08080" />
                                            ) : (
                                                <Ionicons name="ellipse-outline" size={20} color="#F08080" />
                                            )}
                                        </TouchableOpacity>
                                        <Text style={styles.label}>Remember Me</Text>
                                        <TouchableOpacity activeOpacity={0.7}>
                                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity 
                                        style={styles.button} 
                                        onPress={handleLogin}
                                        activeOpacity={0.8}
                                    >
                                        <Text style={styles.buttonText}>Log In</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.textArea}>
                                    <Text style={styles.p}>Don't have an account? </Text>
                                    <TouchableOpacity onPress={handleSignUpPress} activeOpacity={0.7}>
                                        <Text style={styles.span}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    keyboardView: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'ios' ? 44 : 24,
    },
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 60 : 50,
        left: 20,
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 20,
        maxHeight: screenHeight * 0.45,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    logo: {
        width: Math.min(screenWidth * 0.5, 200),
        height: Math.min(screenWidth * 0.5, 200),
    },
    logoText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    glamText: {
        fontFamily: 'EmblemaOne-Regular',
        fontSize: Platform.OS === 'ios' ? 38 : 42,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    syncText: {
        fontFamily: 'Montserrat-SemiBoldItalic',
        fontSize: Platform.OS === 'ios' ? 30 : 34,
        color: 'white',
        marginTop: Platform.OS === 'ios' ? 4 : 7,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    main: {
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center',
        paddingTop: 25,
        paddingHorizontal: 20,
        paddingBottom: 30,
        minHeight: screenHeight * 0.55,
        justifyContent: 'space-between',
    },
    h1: {
        fontSize: Platform.OS === 'ios' ? 32 : 36,
        color: '#DD776C',
        fontFamily: 'Montserrat-MediumItalic',
        textAlign: 'center',
        marginBottom: 5,
    },
    logAccount: {
        fontSize: 14,
        color: '#A4A4A4',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 30,
        marginBottom: 12,
        paddingHorizontal: 15,
        height: 45,
        width: Math.min(screenWidth - 60, 320),
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 45,
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
    },
    validationIcon: {
        paddingLeft: 10,
    },
    error: {
        color: 'red',
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 8,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    success: {
        color: 'green',
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 8,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Math.min(screenWidth - 60, 320),
        marginVertical: 12,
    },
    checkbox: {
        marginRight: 8,
    },
    label: {
        fontSize: 11,
        color: '#A4A4A4',
        fontFamily: 'Montserrat-Bold',
        flex: 1,
    },
    forgotPassword: {
        fontSize: 11,
        color: '#DD776C',
        fontFamily: 'Montserrat-SemiBold',
    },
    button: {
        width: Math.min(screenWidth - 100, 240),
        height: 45,
        marginTop: 15,
        backgroundColor: '#F79489',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
    },
    textArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        flexWrap: 'wrap',
    },
    p: {
        color: '#5F5F5F',
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
    },
    span: {
        color: '#5F5F5F',
        fontFamily: 'Montserrat-Bold',
        textDecorationLine: 'underline',
        fontSize: 13,
    },
});