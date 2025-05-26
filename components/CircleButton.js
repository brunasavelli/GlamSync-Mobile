import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategoriaButton({ categoria, icon, onPress }) {
    return (
        <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.categoriasButton} onPress={onPress}>
                {icon}
            </TouchableOpacity>
            <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 10, marginTop: 3 }}>{categoria}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    categoriasButton: {
        backgroundColor: "#FFFFFF",
        width: 50,
        height: 50,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    },
    buttonArea: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});
