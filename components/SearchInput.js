import { StyleSheet, View, TextInput } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SearchInput() {
    return (
        <View style={styles.searchArea}>
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar"
                placeholderTextColor="#A4A4A4"
            />
            <AntDesign name="search1" size={20} color="#8B2E0B" />
        </View>
    )
}

const styles = StyleSheet.create({
    searchArea: {
        width: 320,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    },
    searchInput: {
        fontFamily: "Montserrat-Regular",
    },
})