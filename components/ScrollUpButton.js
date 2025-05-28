import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function ScrollUpButton({ visible, onPress, style }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: visible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    return (
        <Animated.View
            style={[
                styles.button,
                style,
                { opacity: fadeAnim }
            ]}
            pointerEvents={visible ? "auto" : "none"}
        >
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>Scroll Up</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        bottom: 100,
        right: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
    },
    buttonText: {
        fontSize: 10,
        color: "#F08080",
        fontFamily: "Montserrat-SemiBold",
    },
});