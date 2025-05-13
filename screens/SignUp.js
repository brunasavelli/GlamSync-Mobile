import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

export default function SignUp() {
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [foneNumber, setFoneNumber] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView>
            <StatusBar />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
                <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.h1}>Sign Up</Text>
            <Text style={styles.logAccount}>Create your account</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={foneNumber}
                onChangeText={setFoneNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Text style={styles.button}>Sign Up</Text>
            <Text>Remember Me</Text>
            <CheckBox
                value={isChecked}
                onValueChange={setIsChecked}
                style={{ margin: 8 }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
    },
    logAccount: {
        fontSize: 16,
        marginTop: 10,
        textAlign: "center",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 20,
    },
});