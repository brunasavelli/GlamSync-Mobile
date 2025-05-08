import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { CheckBox, ImageBackground } from "react-native-web";
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

export default function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={require('../assets/backgroundComEscrita.png')} style={styles.background} />
            </View>
            <View style={styles.main}>
                <Text style={styles.h1}>Welcome Back!</Text>
                <Text style={styles.p}>Log in to your account</Text>

                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none" />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"/>

                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            style={styles.checkbox}
                        />
                        <Text>Remember Me</Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.p}>Don't have an account? <span>Sign Up</span></Text>

                <View style={styles.lines}>
                    <View style={{ width: 100, height: 1, backgroundColor: "#5F5F5F" }}></View>
                    <Text style={styles.p}>Log In with</Text>
                    <View style={{ width: 100, height: 1, backgroundColor: "#5F5F5F" }}></View>
                </View>

                <View style={styles.icons}>
                    <Image source={require('../assets/google.png')} style={styles.icon} />
                    <Image source={require('../assets/apple.png')} style={styles.icon} />
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
        backgroundColor: "#E4E4E4",
        borderRadius: 50,
        padding: 15,
    },
    background: {
        width: 450,
        height: 350
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        display: "flex",
        gap: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    checkbox: {
        alignSelf: 'center'
    },
    label: {
        margin: 8,
    },
    button: {
        width: 250,
        height: 50,
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
    p: {
        color: "#5F5F5F"
    },
    span: {
        color: "#5F5F5F",
        fontWeight: "bold",
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
    },
    icon: {
        width: 30,
        height: 30,
    }
});
