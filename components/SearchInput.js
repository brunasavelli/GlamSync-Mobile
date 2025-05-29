import { StyleSheet, View, TextInput } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SearchInput({ placeholder = "Pesquisar", icon = true, height = 40, width = 320, value, onChangeText }) {
    return (
        <View style={[styles.searchArea, { height, width }]}>
            <TextInput
                style={styles.searchInput}
                placeholder={placeholder}
                placeholderTextColor="#A4A4A4"
                value={value}
                onChangeText={onChangeText}
            />
            {icon && <AntDesign name="search1" size={20} color="#8B2E0B" />}
        </View>
    )
}

const styles = StyleSheet.create({
    searchArea: {
        backgroundColor: "#fff",
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        shadowColor: '#1C1C1C',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
    },
    searchInput: {
        fontFamily: "Montserrat-Regular",
    },
})