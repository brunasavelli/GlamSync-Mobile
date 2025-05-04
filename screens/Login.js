import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { ImageBackground } from "react-native-web";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.textArea}>
                    <Text style={styles.text}>Glam</Text>
                    <Text style={styles.text}>Sync</Text>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.h1}>Welcome Back!</Text>
                <Text style={styles.p}>Log in to your account</Text>
                <View style={styles.inputs}>
                    <TextInput style={styles.input} placeholder="Username" />
                    <TextInput style={styles.input} placeholder="Password" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        width: "100vw",
        height: 400,
        backgroundColor: "#F79489",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
        top: 350,
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
    p: {
    fontSize: 15,
    color: "#A4A4A4",
    },
    inputs: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    },
    input: {
    width: 250,
    height: 50,
    backgroundColor: "#c8c8c8",
    borderRadius: 50,
    padding: 15,
    },
});
