import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function LikeButton({ liked, likes, onPress }) {
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
            <TouchableOpacity onPress={onPress}>
                <AntDesign
                    name={liked ? "heart" : "hearto"}
                    size={22}
                    color={liked ? "#E04C3B" : "#000"}
                />
            </TouchableOpacity>
            <Text style={{ marginLeft: 1, color: "#000", fontFamily: "Montserrat-SemiBold" }}>{likes}</Text>
        </View>
    )

}